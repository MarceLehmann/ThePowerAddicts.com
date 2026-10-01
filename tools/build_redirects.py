#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Erzeugt aus redirects.json alle statischen Weiterleitungsseiten fuer GitHub Pages.

Aufruf im Repo-Root:   python tools/build_redirects.py
Ausgabe:               Ordner "out_dir" aus redirects.json (Standard docs/). Er wird bei jedem Lauf
                       komplett neu geschrieben, nie von Hand bearbeiten.
Zusatzdateien:         Dateien in static/ (z. B. eine Search-Console-Bestaetigung) werden 1:1 mit ausgeliefert.

Warum Stub-Seiten: GitHub Pages kann keinen HTTP-301 senden. Jede alte URL bekommt deshalb eine eigene
Seite mit sofortigem Meta-Refresh (Google wertet das als permanente Weiterleitung, Quelle: Google Search
Central, "Redirects and Google Search"), rel=canonical auf das Ziel und JavaScript-Fallback. Pfade ohne
eigene Seite landen in 404.html. Sie schlaegt denselben Katalog per JavaScript nach und leitet sonst auf
die Startseite des Hauptziels.

Die alte Domain steht nur in CNAME, robots.txt und sitemap.xml (technisch noetig). Auf den Seiten selbst
kommt sie nicht vor. Das prueft das Skript am Ende selbst.
"""
import html as htmllib
import io
import json
import os
import re
import shutil
import sys
import unicodedata
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BRAND = re.compile(r"power[\s_-]*addict", re.I)       # Alt-Markenname, darf in keinem Seiteninhalt stehen
TECH_FILES = ("CNAME", "robots.txt", "sitemap.xml")    # nennen die alte Domain, weil das Protokoll es verlangt
BAD_CHARS = set('<>:"\\|?*')
RE_CANON = re.compile(r'<link rel="canonical" href="([^"]+)">')
RE_REFRESH = re.compile(r'<meta http-equiv="refresh" content="0; url=([^"]+)">')

STUB = """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Weiterleitung auf __DOMAIN__</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="__TARGET__">
<meta http-equiv="refresh" content="0; url=__TARGET__">
<script>__SCRIPT__</script>
</head>
<body>
<p>Weiterleitung auf <a href="__TARGET__">__DOMAIN__</a></p>
</body>
</html>
"""

# Normale Seite: nur der Fallback. Meta-Refresh steht davor und gilt fuer alle ohne JavaScript und fuer Google.
SCRIPT_PLAIN = "location.replace(__TARGET_JS__);"

# Startseite mit Deep-Link-Tabelle: Die fruehere App hat #-Routen (https://domain/#/ueber-uns). Ein Server und
# Google sehen den Teil nach # nie, nur der Browser kann ihn lesen. Ohne bekannte Route geht es auf die Startseite.
SCRIPT_HASH = """(function () {
  var routes = __ROUTES__;
  var target = __TARGET_JS__;
  var key = location.hash || "";
  try { key = decodeURIComponent(key); } catch (e) {}
  key = key.replace(/^#!?\\/?/, "").split(/[?#]/)[0].replace(/\\/+$/, "").toLowerCase();
  if (Object.prototype.hasOwnProperty.call(routes, key)) { target = routes[key]; }
  location.replace(target);
})();"""

NOT_FOUND = """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Weiterleitung auf __DOMAIN__</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<noscript><meta http-equiv="refresh" content="0; url=__FALLBACK__"></noscript>
</head>
<body>
<p>Weiterleitung auf <a id="go" href="__FALLBACK__">__DOMAIN__</a></p>
<script>
(function () {
  var exact = __EXACT__;
  var rules = __RULES__;
  var prefixes = __PREFIXES__;
  var fallback = __FALLBACK_JS__;
  var own = Object.prototype.hasOwnProperty;
  var path = location.pathname;
  try { path = decodeURIComponent(path); } catch (e) {}
  if (path.normalize) { path = path.normalize("NFC"); }
  path = path.toLowerCase().replace(/\\/{2,}/g, "/").replace(/\\/index\\.html?$/, "").replace(/\\.html?$/, "").replace(/\\/+$/, "");
  if (path === "") { path = "/"; }
  function find(p) {
    if (own.call(exact, p)) { return exact[p]; }
    for (var i = 0; i < rules.length; i++) {
      if (p === rules[i][0] || p.indexOf(rules[i][0] + "/") === 0) { return rules[i][1]; }
    }
    return null;
  }
  var target = find(path);
  for (var j = 0; target === null && j < prefixes.length; j++) {
    if (path === prefixes[j] || path.indexOf(prefixes[j] + "/") === 0) { target = find(path.slice(prefixes[j].length) || "/"); }
  }
  if (target === null) { target = fallback; }
  var link = document.getElementById("go");
  if (link) { link.href = target; link.textContent = target.replace(/^https?:\\/\\/(www\\.)?/, "").replace(/\\/.*$/, ""); }
  document.title = "Weiterleitung auf " + (link ? link.textContent : "");
  location.replace(target);
})();
</script>
</body>
</html>
"""


def load_config():
    with io.open(os.path.join(ROOT, "redirects.json"), encoding="utf-8") as f:
        cfg = json.load(f)
    for key in ("host", "out_dir", "lastmod", "targets", "redirects", "fallback_default"):
        if key not in cfg:
            sys.exit("redirects.json: Schluessel fehlt: " + key)
    return cfg


def resolve(cfg, ref):
    """'kmupower:/pfad' -> volle URL aus targets, vollstaendige https-URLs bleiben unveraendert."""
    scheme, sep, path = ref.partition(":/")
    if sep and scheme in cfg["targets"]:
        return cfg["targets"][scheme].rstrip("/") + "/" + path.lstrip("/")
    if ref.startswith("https://"):
        return ref
    sys.exit("Unbekanntes Ziel: " + ref)


def collect_targets(cfg):
    """Alle Ziel-URLs (ohne Doppelte, in der Reihenfolge des Auftretens) fuer die Online-Pruefung."""
    refs = [i["to"] for i in cfg["redirects"]] + list(cfg.get("hash_routes", {}).values())
    refs += [r["to"] for r in cfg.get("fallback_rules", [])] + [cfg["fallback_default"]]
    seen, out = set(), []
    for ref in refs:
        url = resolve(cfg, ref)
        if url not in seen:
            seen.add(url)
            out.append(url)
    return out


def norm(path):
    return unicodedata.normalize("NFC", path).lower()


def domain(url):
    host = urllib.parse.urlsplit(url).hostname or ""
    return host[4:] if host.startswith("www.") else host


def esc(text):
    return htmllib.escape(text, quote=True)


def js(value):
    return json.dumps(value).replace("</", "<\\/")      # ASCII-only, kein </script>-Ausbruch


def lp(path):
    """Windows: Pfade ueber 260 Zeichen brauchen das Praefix fuer erweiterte Laengen (lange Slugs, tiefe Ordner)."""
    path = os.path.abspath(path)
    if os.name == "nt" and not path.startswith("\\\\?\\"):
        path = "\\\\?\\" + path
    return path


def write(out, rel, content):
    full = lp(os.path.join(out, *rel.split("/")))
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with io.open(full, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)


def render_stub(target, script):
    return (STUB.replace("__SCRIPT__", script).replace("__DOMAIN__", esc(domain(target)))
            .replace("__TARGET_JS__", js(target)).replace("__TARGET__", esc(target)))


def selfcheck(cfg, out, expected):
    """Liest alles zurueck, was geschrieben wurde. Liefert (Probleme, Hinweise)."""
    problems, notes = [], []
    host = cfg["host"].lower()
    old_hosts = {host, host[4:] if host.startswith("www.") else "www." + host}
    for rel, target in expected.items():
        full = lp(os.path.join(out, *rel.split("/")))
        if not os.path.isfile(full):
            problems.append("fehlt: " + rel)
            continue
        with io.open(full, encoding="utf-8", newline="") as f:
            text = f.read()
        if [htmllib.unescape(c) for c in RE_CANON.findall(text)] != [target]:
            problems.append("canonical falsch: " + rel)
        if [htmllib.unescape(c) for c in RE_REFRESH.findall(text)] != [target]:
            problems.append("meta refresh falsch: " + rel)
        if text.count("location.replace(") != 1:
            problems.append("JS-Fallback fehlt oder doppelt: " + rel)
        if "Weiterleitung auf " + domain(target) not in text:
            problems.append("sichtbarer Text fehlt: " + rel)
        if (urllib.parse.urlsplit(target).hostname or "").lower() in old_hosts:
            problems.append("Schleife (Ziel = alte Domain): " + rel)
    found = set()
    top = lp(out)
    for dirpath, _, files in os.walk(top):
        for name in files:
            full = os.path.join(dirpath, name)
            rel = full[len(top):].lstrip("\\/").replace(os.sep, "/")
            with open(full, "rb") as f:
                raw = f.read()
            if b"\r" in raw:
                problems.append("CR-Zeichen (nur LF erlaubt): " + rel)
            text = raw.decode("utf-8", "replace")
            if re.search(r"noindex", text, re.I):
                problems.append("noindex gefunden: " + rel)
            if rel not in TECH_FILES and BRAND.search(text):
                problems.append("Markenname im Inhalt: " + rel)
            if BRAND.search(rel):
                notes.append("Dateiname ist die alte URL und enthaelt den Markennamen (nicht sichtbar): " + rel)
            if rel.endswith(".html"):
                found.add(rel)
    unexpected = found - set(expected) - {"404.html"}
    if unexpected and not os.path.isdir(lp(os.path.join(ROOT, "static"))):
        problems.append("unerwartete Seiten: " + ", ".join(sorted(unexpected)))
    for rel in ("404.html", "robots.txt", "sitemap.xml", "CNAME", ".nojekyll"):
        if not os.path.isfile(lp(os.path.join(out, rel))):
            problems.append("fehlt: " + rel)
    return problems, notes


def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    cfg = load_config()
    if "--targets" in sys.argv[1:]:                  # nur die Ziel-URLs ausgeben (fuer die Online-Pruefung)
        print("\n".join(collect_targets(cfg)))
        return
    host_l = cfg["host"].lower()
    for url in collect_targets(cfg):                 # kein Ziel darf auf die alte Domain zeigen (Schleife)
        if (urllib.parse.urlsplit(url).hostname or "").lower() in (host_l, host_l[4:] if host_l.startswith("www.") else "www." + host_l):
            sys.exit("Schleife: Ziel zeigt auf die alte Domain: " + url)
    out_rel = cfg["out_dir"].strip("/")
    if (not out_rel or out_rel.split("/")[0] in (".", "..", ".git", ".github", "tools", "static") or ":" in out_rel
            or "\\" in out_rel):
        sys.exit("out_dir muss ein eigener Unterordner sein (z. B. docs)")
    out = os.path.join(ROOT, *out_rel.split("/"))
    prefixes = [norm(p) for p in cfg.get("prefixes", [])]

    # 1) Eintraege einlesen und um die Sprach-Praefixe erweitern
    entries, seen, home = [], set(), None
    for item in cfg["redirects"]:
        src = item["from"]
        if not src.startswith("/") or "//" in src or (len(src) > 1 and src.endswith("/")) or set(src) & BAD_CHARS:
            sys.exit("Ungueltiger Pfad: %r" % src)
        if unicodedata.normalize("NFC", src) != src:
            sys.exit("Pfad nicht in Unicode-Form NFC: %r" % src)
        target = resolve(cfg, item["to"])
        variants = [src] + ([p + ("" if src == "/" else src) for p in prefixes] if item.get("prefix", True) else [])
        for v in variants:
            if norm(v) in seen:
                sys.exit("Doppelter Eintrag: " + v)
            seen.add(norm(v))
            if v.strip("/") + ".html" in ("404.html", "index.html") and v != "/":
                sys.exit("Pfad kollidiert mit einer erzeugten Datei: " + v)
            entries.append((v, target, item.get("sitemap", True)))
        if src == "/":
            home = target
    if home is None:
        sys.exit('Eintrag fuer "/" fehlt')

    # 2) Ausgabeordner neu aufbauen
    if os.path.isdir(lp(out)):
        shutil.rmtree(lp(out))
    os.makedirs(lp(out))
    expected = {}
    hash_routes = {norm(k).strip("/"): resolve(cfg, v) for k, v in cfg.get("hash_routes", {}).items()}
    for src, target, _ in entries:
        if src == "/":
            script = (SCRIPT_HASH.replace("__ROUTES__", js(hash_routes)).replace("__TARGET_JS__", js(target))
                      if hash_routes else SCRIPT_PLAIN.replace("__TARGET_JS__", js(target)))
            files = ["index.html"]
        else:
            script = SCRIPT_PLAIN.replace("__TARGET_JS__", js(target))
            rel = src.strip("/")
            files = [rel + ".html", rel + "/index.html"]      # /pfad  und  /pfad/
        for rel_file in files:
            write(out, rel_file, render_stub(target, script))
            expected[rel_file] = target

    # 3) Auffangseite: voller Katalog (nur Basispfade, Praefix-Varianten behandelt das Skript selbst)
    exact, skipped = {}, []
    for item in cfg["redirects"]:
        if BRAND.search(item["from"]):
            skipped.append(item["from"])          # soll nicht einmal im Quelltext der Auffangseite stehen
            continue
        exact[norm(item["from"])] = resolve(cfg, item["to"])
    for route, target in hash_routes.items():       # die frueheren #-Routen auch als normale Pfade abfangen
        exact.setdefault("/" + route, target)
    rules = [[norm(r["prefix"]), resolve(cfg, r["to"])] for r in cfg.get("fallback_rules", [])]
    fallback = resolve(cfg, cfg["fallback_default"])
    write(out, "404.html", (NOT_FOUND.replace("__EXACT__", js(exact)).replace("__RULES__", js(rules))
                            .replace("__PREFIXES__", js(prefixes)).replace("__FALLBACK_JS__", js(fallback))
                            .replace("__FALLBACK__", esc(fallback)).replace("__DOMAIN__", esc(domain(fallback)))))

    # 4) robots.txt, sitemap.xml, CNAME, .nojekyll
    host = cfg["host"]
    write(out, "robots.txt", "User-agent: *\nAllow: /\n\nSitemap: https://%s/sitemap.xml\n" % host)
    lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    listed = 0
    for src, _, in_sitemap in entries:
        if not in_sitemap:
            continue
        loc = "https://%s%s" % (host, urllib.parse.quote(src, safe="/-_.~"))
        lines.append("<url><loc>%s</loc><lastmod>%s</lastmod></url>" % (esc(loc), cfg["lastmod"]))
        listed += 1
    lines.append("</urlset>")
    write(out, "sitemap.xml", "\n".join(lines) + "\n")
    write(out, "CNAME", host + "\n")
    write(out, ".nojekyll", "")

    # 5) static/ 1:1 uebernehmen (nie ueberschreiben)
    static = lp(os.path.join(ROOT, "static"))
    if os.path.isdir(static):
        for dirpath, _, files in os.walk(static):
            for name in files:
                rel = os.path.join(dirpath, name)[len(static):].lstrip("\\/").replace(os.sep, "/")
                dest = lp(os.path.join(out, *rel.split("/")))
                if os.path.exists(dest):
                    sys.exit("static/%s wuerde eine erzeugte Datei ueberschreiben" % rel)
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                shutil.copyfile(os.path.join(dirpath, name), dest)

    # 6) Selbstpruefung
    problems, notes = selfcheck(cfg, out, expected)
    for n in notes:
        print("Hinweis:", n)
    for s in skipped:
        print("Hinweis: nicht im Katalog der Auffangseite (Markenname im Pfad):", s)
    if problems:
        print("FEHLER:")
        for p in problems:
            print("  -", p)
        sys.exit(1)
    print("OK: %d Eintraege, %d Seiten, %d Sitemap-URLs, Auffangseite, robots.txt, CNAME (%s) in %s/"
          % (len(entries), len(expected), listed, host, out_rel))


if __name__ == "__main__":
    main()
