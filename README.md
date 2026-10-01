# Weiterleitung der alten Domain

Dieses Repository leitet die frühere Website (Domain: siehe `docs/CNAME`) auf die aktuellen Seiten von Marcel Lehmann
(KMUpower) um:

- Beratung, Über uns, Kontakt: https://kmupower.com
- Kurse, Workshops, Trainer: https://www.powerplatformacademy.online
- einzelne Tipp-Artikel: https://www.powerplatformtip.com

Ausgeliefert wird nur der Ordner `docs/`, gebaut und veröffentlicht von `.github/workflows/deploy.yml` (GitHub Pages,
Build-Typ «GitHub Actions»). Die frühere Website (React-App, Quelltext im Repo-Root, dazu `dist/` und `node_modules/`) wird
nicht mehr ausgeliefert und bleibt vorerst nur als Historie im Repo.

## So funktioniert es

- GitHub Pages kann keinen HTTP-301 senden. Jede alte URL hat deshalb eine eigene kleine Seite mit sofortigem Meta-Refresh,
  `rel="canonical"` auf das Ziel und einem JavaScript-Fallback. Google wertet einen sofortigen Meta-Refresh als permanente
  Weiterleitung (Google Search Central, «Redirects and Google Search»).
- Die frühere App arbeitete mit `#`-Adressen (z. B. `/#/ueber-uns`). Server und Google sehen den Teil nach dem `#` nie. Die
  Startseite liest ihn deshalb per JavaScript aus und leitet gezielt weiter (Tabelle `hash_routes` in `redirects.json`),
  sonst auf die Startseite von kmupower.com.
- Ältere Wix-Adressen und deren englische Variante (`/en/...`) haben eigene Seiten.
- Pfade ohne eigene Seite landen in `docs/404.html`. Sie schlägt dieselbe Zuordnung per JavaScript nach (inklusive
  Präfix-Regeln, z. B. alle `/service-page/...`) und leitet sonst auf die Startseite von kmupower.com.
- Kein `noindex`: Google muss die alten Seiten abrufen dürfen, um die Weiterleitung zu sehen. `robots.txt` erlaubt alles,
  `sitemap.xml` listet die alten URLs.
- Auf den Seiten steht die alte Marke nicht. Die alte Domain steht nur in `CNAME`, `robots.txt` und `sitemap.xml`
  (dort technisch nötig). Das Skript prüft das bei jedem Lauf.
- Die Weiterleitungen bleiben mindestens ein Jahr stehen, länger ist unproblematisch. Die Domain muss dafür verlängert bleiben.

## Dateien

- `redirects.json`: Zuordnung alter Pfad nach neue Seite, mit Begründung je Eintrag. Einzige Quelle der Wahrheit, hier pflegen.
- `tools/build_redirects.py`: erzeugt daraus den Ordner `docs/` (Seiten, `404.html`, `robots.txt`, `sitemap.xml`, `CNAME`,
  `.nojekyll`). Nur Python 3, keine Abhängigkeiten.
- `docs/`: erzeugte Ausgabe. Nie von Hand ändern, sie wird bei jedem Lauf komplett neu geschrieben.
- `static/` (optional, noch nicht vorhanden): Dateien darin werden 1:1 nach `docs/` kopiert, z. B. eine Bestätigungsdatei
  der Search Console.
- `.github/workflows/deploy.yml`: erzeugt `docs/` neu, bricht ab, wenn die Ausgabe nicht zum Stand im Repo passt, und
  veröffentlicht `docs/`.

## Eintrag ändern oder ergänzen

1. `redirects.json` anpassen (Pfade ohne Domain und ohne Slash am Ende; Ziele als `kmupower:/pfad`, `academy:/pfad` oder `tip:/pfad`).
2. Im Repo-Root `python tools/build_redirects.py` ausführen. Das Skript prüft Ziel, canonical, Meta-Refresh, Schleifen,
   `noindex` und Markennamen im Seiteninhalt und bricht bei einem Fehler ab.
3. `python tools/build_redirects.py --targets` listet alle Ziel-URLs. Jede muss direkt mit 200 antworten, ohne weitere Weiterleitung.
4. `docs/` mitcommitten und auf `main` pushen. Der Workflow veröffentlicht den Stand (und bricht ab, wenn `docs/` fehlt oder veraltet ist).

## DNS (Registrar Namecheap, Advanced DNS)

Die Web-Einträge stimmen bereits und bleiben so:

- `A Record`, Host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME Record`, Host `www`: `marcelehmann.github.io.`
- Alle Mail-Einträge (MX, SPF, weitere TXT, CNAME für Microsoft 365) unverändert lassen. Die Postfächer hängen daran.
- «Enforce HTTPS» (Settings, Pages) bleibt eingeschaltet. GitHub erneuert das Zertifikat selbst, solange das DNS auf GitHub zeigt.
