# Workshop-Daten Verwaltung

Hier findest du alle Workshop-Termine und -Details zentral verwaltet.

## 📁 Dateien

- **`workshops.ts`** - Zentrale Workshop-Datenverwaltung

## 🔧 Workshop-Daten bearbeiten

Öffne die Datei `data/workshops.ts` und bearbeite die entsprechenden Abschnitte:

### Intensiv-Programme (4 Wochen)
```typescript
export const intensivWorkshops: Workshop[] = [
  // Power Platform Admin, Power Automate, Power Apps
]
```

### Schnelleinstieg (2 Abende)
```typescript
export const schnelleinstiegWorkshops: Workshop[] = [
  // Power Apps, Power Automate
]
```

### Fortgeschritten (2 Abende)
```typescript
export const fortgeschrittenWorkshops: Workshop[] = [
  // Power Apps, Power Automate
]
```

## ✏️ Neue Termine hinzufügen

Um einen neuen Termin hinzuzufügen, füge ein neues Objekt im `dates` Array hinzu:

```typescript
{
  id: 'powerapps-einstieg-jan-2026',
  startDate: '2026-01-20',
  endDate: '2026-01-22',
  displayDate: '20. & 22. Januar 2026',
  time: '17:30 - 19:30 Uhr',
  status: 'available',  // available | waitlist | limited | full
  featured: false       // true = wird prominent angezeigt
}
```

## 📋 Status-Typen

- **`available`** - Verfügbar, Plätze frei
- **`waitlist`** - Auf Anfrage / Warteliste
- **`limited`** - Wenige Plätze
- **`full`** - Ausgebucht

## 💡 Tipps

1. **Termine auf "Auf Anfrage" setzen:**
   ```typescript
   displayDate: 'Auf Anfrage',
   time: 'Termin wird bekannt gegeben',
   status: 'waitlist'
   ```

2. **Konkrete Termine anzeigen:**
   ```typescript
   displayDate: '09. & 11. Dezember 2025',
   time: '17:30 - 19:30 Uhr',
   status: 'available'
   ```

3. **Featured-Workshop (hervorgehoben):**
   ```typescript
   featured: true
   ```

## 🚀 Nach Änderungen

Speichere die Datei und committe die Änderungen:
```bash
git add data/workshops.ts
git commit -m "Update workshop dates"
git push origin main
```

Die Änderungen werden automatisch auf der Website angezeigt!
