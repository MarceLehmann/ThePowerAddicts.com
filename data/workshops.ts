/**
 * Zentrale Workshop-Datenverwaltung
 * 
 * Hier können alle Workshop-Termine und Details verwaltet werden.
 * Diese Daten werden automatisch in die Website eingebunden.
 */

export interface WorkshopDate {
  id: string;
  startDate: string;
  endDate: string;
  displayDate: string;
  time: string;
  status: 'available' | 'waitlist' | 'limited' | 'full';
  featured?: boolean;
}

export interface Workshop {
  type: 'intensiv' | 'schnelleinstieg' | 'fortgeschritten';
  name: string;
  tagline: string;
  duration: string;
  participants: string;
  format: string;
  schedule: string;
  price: number;
  earlyBirdPrice?: number;
  currency: string;
  dates: WorkshopDate[];
}

// ============================================
// INTENSIV-PROGRAMME (4 Wochen)
// ============================================

export const intensivWorkshops: Workshop[] = [
  {
    type: 'intensiv',
    name: 'Intensiv-Programm',
    tagline: 'Werde Power Platform Admin in 4 Wochen',
    duration: '4 Wochen (4 Sessions à 2h)',
    participants: 'Max. 12 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '1x pro Woche, 17:30-19:30 Uhr',
    price: 1290,
    earlyBirdPrice: 990,
    currency: 'CHF',
    dates: [
      {
        id: 'admin-waitlist',
        startDate: '2026-01-01',
        endDate: '2026-01-31',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist',
        featured: true
      }
    ]
  },
  {
    type: 'intensiv',
    name: 'Intensiv-Programm',
    tagline: 'Werde Power Automate Profi in 4 Wochen',
    duration: '4 Wochen (4 Sessions à 2h)',
    participants: 'Max. 12 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '1x pro Woche, 17:30-19:30 Uhr',
    price: 1290,
    earlyBirdPrice: 990,
    currency: 'CHF',
    dates: [
      {
        id: 'automate-waitlist',
        startDate: '2026-02-01',
        endDate: '2026-02-28',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist'
      }
    ]
  },
  {
    type: 'intensiv',
    name: 'Intensiv-Programm',
    tagline: 'Werde Power Apps Profi in 4 Wochen',
    duration: '4 Wochen (4 Sessions à 2h)',
    participants: 'Max. 12 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '1x pro Woche, 17:30-19:30 Uhr',
    price: 1290,
    earlyBirdPrice: 990,
    currency: 'CHF',
    dates: [
      {
        id: 'apps-waitlist',
        startDate: '2026-03-01',
        endDate: '2026-03-31',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist'
      }
    ]
  }
];

// ============================================
// SCHNELLEINSTIEG (2 Abende)
// ============================================

export const schnelleinstiegWorkshops: Workshop[] = [
  {
    type: 'schnelleinstieg',
    name: 'Schnelleinstieg',
    tagline: 'Power Apps kennenlernen',
    duration: '2 Abende (4 Stunden)',
    participants: 'Max. 25 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '2 Abende, 17:30-19:30 Uhr',
    price: 299,
    currency: 'CHF',
    dates: [
      {
        id: 'powerapps-einstieg-dec-2025',
        startDate: '2025-12-09',
        endDate: '2025-12-11',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist'
      }
    ]
  },
  {
    type: 'schnelleinstieg',
    name: 'Schnelleinstieg',
    tagline: 'Power Automate kennenlernen',
    duration: '2 Abende (4 Stunden)',
    participants: 'Max. 25 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '2 Abende, 17:30-19:30 Uhr',
    price: 299,
    currency: 'CHF',
    dates: [
      {
        id: 'powerautomate-einstieg-jan-2026',
        startDate: '2026-01-13',
        endDate: '2026-01-15',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist'
      }
    ]
  }
];

// ============================================
// FORTGESCHRITTEN (2 Abende)
// ============================================

export const fortgeschrittenWorkshops: Workshop[] = [
  {
    type: 'fortgeschritten',
    name: 'Fortgeschritten',
    tagline: 'Power Apps fortgeschritten',
    duration: '2 Abende (4 Stunden)',
    participants: 'Max. 25 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '2 Abende, 17:30-19:30 Uhr',
    price: 399,
    currency: 'CHF',
    dates: [
      {
        id: 'powerapps-fortgeschritten-feb-2026',
        startDate: '2026-02-09',
        endDate: '2026-02-11',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist'
      }
    ]
  },
  {
    type: 'fortgeschritten',
    name: 'Fortgeschritten',
    tagline: 'Power Automate fortgeschritten',
    duration: '2 Abende (4 Stunden)',
    participants: 'Max. 25 Personen',
    format: 'Online per Microsoft Teams',
    schedule: '2 Abende, 17:30-19:30 Uhr',
    price: 399,
    currency: 'CHF',
    dates: [
      {
        id: 'powerautomate-fortgeschritten-mar-2026',
        startDate: '2026-03-09',
        endDate: '2026-03-11',
        displayDate: 'Auf Anfrage',
        time: 'Termin wird bekannt gegeben',
        status: 'waitlist'
      }
    ]
  }
];

// ============================================
// ALLE WORKSHOPS (Kombiniert)
// ============================================

export const allWorkshops: Workshop[] = [
  ...intensivWorkshops,
  ...schnelleinstiegWorkshops,
  ...fortgeschrittenWorkshops
];
