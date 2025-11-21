export const de = {
  header: {
    navLinks: [
      { name: 'Über uns', path: '/ueber-uns' },
      { name: 'Beratung', path: '/unabhaengige-beratung' },
    ],
    mvp: 'Microsoft MVP',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
  },
  footer: {
    slogan: 'Microsoft Power Platform Expertise by MVPs. Wir transformieren Karrieren und Unternehmen.',
    nav: 'Navigation',
    navLinks: {
      about: 'Über uns',
      workshops: 'Workshops',
      consulting: 'Beratung',
      success: 'Erfolge',
      partner: 'Partner werden'
    },
    legal: 'Rechtliches',
    legalLinks: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB'
    },
    socials: {
      title: 'Folge uns',
      companyLinkedInUrl: 'https://www.linkedin.com/company/100255788/'
    },
    newsletter: 'Newsletter',
    newsletterText: 'Bleiben Sie auf dem Laufenden.',
    emailPlaceholder: 'Ihre E-Mail',
    submit: 'Abonnieren',
    copyright: `© ${new Date().getFullYear()} ThePowerAddicts.com. Alle Rechte vorbehalten.`
  },
  or: 'oder',
  countdown: {
    days: 'Tage',
    hours: 'Stunden',
    minutes: 'Minuten',
    workshopStarted: 'Workshop hat begonnen!'
  },
  systemeIo: {
    newsletter: '<!-- HIER DEUTSCHEN SYSTEME.IO CODE FÜR NEWSLETTER EINFÜGEN -->',
    waitingListAdmin: '<!-- HIER DEUTSCHEN SYSTEME.IO CODE FÜR ADMIN-WARTELISTE EINFÜGEN -->',
    waitingListAutomate: '<!-- HIER DEUTSCHEN SYSTEME.IO CODE FÜR AUTOMATE-WARTELISTE EINFÜGEN -->',
    waitingListApps: '<!-- HIER DEUTSCHEN SYSTEME.IO CODE FÜR APPS-WARTELISTE EINFÜGEN -->',
    partner: '<!-- HIER DEUTSCHEN SYSTEME.IO CODE FÜR PARTNER-ANMELDUNG EINFÜGEN -->'
  },
  home: {
    meta: {
      title: 'Power Platform Schulung DACH | Microsoft MVP Workshops & Beratung',
      description: 'Power Platform Schulung von Microsoft MVPs: Intensive Admin-, Power Apps- & Power Automate-Kurse. Werden Sie in 4 Wochen zum Experten. Top-Schulungen für Schweiz, Deutschland & Österreich.'
    },
    hero: {
      title1: 'Power Platform Schulung DACH',
      title2: 'von Microsoft MVPs',
      subtitle: 'Führende Power Platform Schulung in der Schweiz, Deutschland und Österreich. Werde Power Platform Expert in 4 Wochen oder hole dir unabhängige MVP-Beratung für dein Unternehmen.',
      nextCourse: 'Nächstes Intensiv-Programm',
      courseDate: 'Januar 2026',
      courseDetails: '4 Wochen | 4 Live-Sessions à 2 Stunden',
      stats: [
        { value: '300+', label: 'Professionals geschult' },
        { value: '23%', label: 'Ø Gehaltserhöhung' },
      ],
      ctaWorkshops: 'Jetzt anmelden',
      ctaConsulting: 'Beratung anfragen',
      ctaAllDates: 'Alle Termine'
    },
    upcomingCourses: {
      title: 'Power Platform Workshops',
      subtitle: 'Wähle deinen Workshop – Alle Kurse 100% online via Microsoft Teams',
      formats: [
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
              displayDate: 'Januar 2026',
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
        },
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
              displayDate: '09. & 11. Dezember 2025',
              time: '17:30 - 19:30 Uhr',
              status: 'available',
              featured: true
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
        },
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
      ],
      statusLabels: {
        available: 'Verfügbar',
        limited: 'Wenige Plätze',
        waitlist: 'Auf Warteliste eintragen',
        full: 'Ausgebucht'
      },
      spotsLeft: 'Plätze frei',
      perPerson: 'pro Person',
      earlyBird: 'Frühbucher bis',
      register: 'Jetzt anmelden',
      registerWaitlist: 'Auf Warteliste',
      details: 'Mehr Details'
    },
    expertisePaths: {
      title: 'Verfügbare Expert-Workshops',
      subtitle: 'Wähle den Weg, der am besten zu deinen Zielen passt: intensive Workshops oder massgeschneiderte Beratung.',
      workshops: [
        {
          id: 'admin',
          modalId: 'waitingListAdmin',
          title: 'Werde Power Platform Admin in 4 Wochen',
          subtitle: 'Werde zertifizierter Power Platform Administrator',
          description: 'Strukturiertes 4-Wochen-Intensiv-Programm zum zertifizierten Admin. Von Environment-Setup bis Center of Excellence - alles hands-on.',
          status: 'waitlist',
          priceNormal: 1290,
          priceEarlyBird: 990,
          currency: 'CHF / EUR',
          cta: 'Auf die Warteliste',
          detailLink: '/workshops/power-platform-admin-in-4-wochen',
          features: [
            '30min 1:1 Mentoring',
            'ThePowerAddicts Zertifikat',
            'Aufzeichnungen & Präsentationen',
            '100% Praxis-Bezug'
          ]
        },
        {
          id: 'automate',
          modalId: 'waitingListAutomate',
          title: 'Werde Power Automate Profi in 4 Wochen',
          subtitle: 'Meistere komplexe Automatisierungen',
          description: 'Ein Deep-Dive in fortgeschrittene Power Automate-Konzepte, von der Fehlerbehandlung bis zur API-Integration.',
          status: 'waitlist',
          priceNormal: 1290,
          priceEarlyBird: 990,
          currency: 'CHF / EUR',
          cta: 'Auf die Warteliste',
          detailLink: '/workshops/power-automate-profi-in-4-wochen',
          features: [
            '30min 1:1 Mentoring',
            'ThePowerAddicts Zertifikat',
            'Aufzeichnungen & Präsentationen',
            'API-Integrationen'
          ]
        },
        {
          id: 'apps',
          modalId: 'waitingListApps',
          title: 'Werde Power Apps Profi in 4 Wochen',
          subtitle: 'Entwickle anspruchsvolle Business-Apps',
          description: 'Lerne, performante und skalierbare Canvas- und Model-Driven Apps mit Fokus auf erstklassige UX zu bauen.',
          status: 'waitlist',
          priceNormal: 1290,
          priceEarlyBird: 990,
          currency: 'CHF / EUR',
          cta: 'Auf die Warteliste',
          detailLink: '/workshops/power-apps-profi-in-4-wochen',
          features: [
            '30min 1:1 Mentoring',
            'ThePowerAddicts Zertifikat',
            'Aufzeichnungen & Präsentationen',
            'Dataverse für Profis'
          ]
        }
      ],
      consulting: {
        title: 'Unabhängige Beratung',
        description: 'Hole dir objektive MVP-Expertise für deine komplexesten Herausforderungen.',
        cta: 'Beratung anfragen'
      },
      customTraining: {
        title: 'Nicht der passende Termin dabei?',
        description: 'Kein Problem! Wir bieten auch individuelle Schulungen für dich oder dein Team an. Flexibel nach deinen Terminen und angepasst an deine spezifischen Bedürfnisse.',
        cta: 'Individuelle Schulung anfragen'
      }
    }
  },
  about: {
    meta: {
      title: 'Über Uns | Microsoft MVP Expertise | ThePowerAddicts',
      description: 'Lernen Sie die Microsoft MVPs Marcel Lehmann und Michael Roth kennen. Erfahren Sie mehr über unsere Mission, Power Platform Experten im DACH-Raum auszubilden.'
    },
    hero: {
        title: "Microsoft MVPs mit einer Mission",
        text: "In den letzten Jahren haben wir über 300 Professionals auf ihrem Weg zu Power Platform Experten begleitet. Angesichts der explodierenden Anzahl von Citizen Developern – oft eine Vervierfachung in nur drei Jahren – ist unsere Mission klarer denn je: Wir bilden die dringend benötigten Administratoren aus, die für Stabilität, Sicherheit und Skalierbarkeit sorgen. Wir vermitteln das Praxis-Wissen, das Karrieren transformiert."
    },
    expertise: {
        title: "Warum ThePowerAddicts anders ist",
        cards: [
            { title: "Praktiker, nicht nur Theoretiker", description: "Jeder Workshop-Inhalt basiert auf echten Enterprise-Projekten. Keine Theorie ohne Praxis-Bezug." },
            { title: "Vendor-unabhängige Perspektive", description: "Als unabhängige MVPs empfehlen wir nur, was wirklich funktioniert - nicht was verkauft werden soll." },
            { title: "Messbarer Erfolg", description: "Unsere hohe Abschlussrate von 97% stellt sicher, dass jeder Teilnehmer den Workshop mit einem anerkannten Zertifikat verlässt." },
            { title: "100% Remote & Flexibel", description: "Nehmen Sie von überall teil, ohne Reisekosten. Alle Sessions werden aufgezeichnet und stehen Ihnen zur Verfügung." }
        ]
    },
    team: {
        title: "Die Köpfe hinter ThePowerAddicts",
        members: [
          {
            name: 'Marcel Lehmann',
            specialty: 'PowerApps & PowerAutomate',
            image: '/marcel.webp',
            bio: "2017 war ich frustriert von repetitiven Excel-Tasks und mein erster Flow sparte mir 2 Stunden täglich. Diese 'Wow'-Erfahrung treibt mich heute als MVP an, KMUs zu helfen, bis zu 60% ihrer Prozesse zu automatisieren. Ich weiss aus eigener Erfahrung, wie die Power Platform eine Karriere verändert: Mein Gehalt ist dadurch in wenigen Jahren um über 75% gestiegen.",
            website: 'www.kmupower.com',
            websiteUrl: 'https://www.kmupower.com',
            blog: 'www.powerplatformtip.com',
            blogUrl: 'https://www.powerplatformtip.com',
            socials: {
              linkedin: 'https://www.linkedin.com/in/marcelehmann/'
            }
          },
          {
            name: 'Michael Roth',
            specialty: 'Governance',
            image: '/michael.webp',
            bio: "Die meisten Unternehmen erkennen zu spät: Ohne Governance wird die Power Platform zum Sicherheitsrisiko statt zum Produktivitäts-Tool. Als Power Platform MVP fokussiere ich mich auf praxisnahe Governance-Strategien, die Teams befähigen statt einschränken.",
            website: 'www.michaelroth42.com',
            websiteUrl: 'https://www.michaelroth42.com',
            socials: {
              linkedin: 'https://www.linkedin.com/in/michaelroth42/'
            }
          }
        ]
    },
    philosophy: {
        title: "Unsere Workshop-Philosophie",
        cards: [
            { title: "1. Hands-on from Day 1", description: "Keine endlosen PowerPoint-Präsentationen. Ab Minute 1 arbeiten Sie in echten Power Platform Environments mit realen Business-Szenarien.", example: "In Woche 1 konfigurieren Sie ein komplettes Production-Environment für ein fiktives Unternehmen mit 500 Mitarbeitern." },
            { title: "2. Failure-driven Learning", description: "Sie lernen aus den häufigsten Admin-Fehlern. Jeder Workshop-Tag beginnt mit einem 'Fail-Case-Study'.", example: "'Warum diese DLP-Policy das gesamte Unternehmen lahmlegte' - echte Disaster-Szenarien und Lösungen." },
            { title: "3. Enterprise-Scale from Start", description: "Keine 'Hello World' Übungen. Alle Projekte sind so designed, dass sie bei Fortune 500 Unternehmen produktiv eingesetzt werden könnten.", example: "Governance-Framework für 10.000+ User mit Multi-Geo Compliance-Anforderungen." },
            { title: "4. Certification-focused", description: "Jeder Workshop-Tag endet mit zertifizierungsrelevanten Übungen. Die finale Woche sind 5 vollständige Mock-Exams.", example: "Tägliche 30-minütige Mini-Tests zu den entsprechenden Exam-Objectives." }
        ],
        example: "Beispiel:"
    }
  },
  workshops: {
    meta: {
      title: 'Power Apps Workshop Schweiz | Power Automate Schulung Online',
      description: 'Microsoft Power Platform Workshops von MVPs: Power Apps Workshop Schweiz, Power Automate Schulung Online und Admin-Kurse. 4-Wochen Programme mit Zertifizierung – inkl. unabhängiger Beratung.'
    },
    hero: {
        title: "Power Platform Workshop: Vom Anfänger zum Expert",
        subtitle: "Strukturierte 4-Wochen Power Platform Kurse mit ThePowerAddicts Zertifizierung. Basiert auf 150+ Enterprise-Projekten. Garantiert messbare Ergebnisse für Ihre Power Platform Schulung."
    },
    available: "Verfügbare Expert-Workshops",
    list: [
        {
            id: 'power-platform-admin',
            modalId: 'waitingListAdmin',
            title: 'Werde Power Platform Admin in 4 Wochen',
            subtitle: 'Werde zertifizierter Power Platform Administrator',
            description: 'Strukturiertes 4-Wochen-Intensiv-Programm zum zertifizierten Admin. Von Environment-Setup bis Center of Excellence - alles hands-on.',
            status: 'waiting-list',
            priceNormal: 1290,
            priceEarlyBird: 990,
            currency: 'CHF / EUR',
            ctaText: 'Auf die Warteliste',
            features: [
                '30min 1:1 Mentoring',
                'ThePowerAddicts Zertifikat',
                'Aufzeichnungen & Präsentationen',
                '100% Praxis-Bezug'
            ]
        },
        {
            id: 'power-automate-pro',
            modalId: 'waitingListAutomate',
            title: 'Werde Power Automate Profi in 4 Wochen',
            subtitle: 'Meistere komplexe Automatisierungen',
            description: 'Ein Deep-Dive in fortgeschrittene Power Automate-Konzepte, von der Fehlerbehandlung bis zur API-Integration.',
            status: 'waiting-list',
            priceNormal: 1290,
            priceEarlyBird: 990,
            currency: 'CHF / EUR',
            ctaText: 'Auf die Warteliste',
            features: [
                '30min 1:1 Mentoring',
                'ThePowerAddicts Zertifikat',
                'Aufzeichnungen & Präsentationen',
                'API-Integrationen'
            ]
        },
        {
            id: 'power-apps-pro',
            modalId: 'waitingListApps',
            title: 'Werde Power Apps Profi in 4 Wochen',
            subtitle: 'Entwickle anspruchsvolle Business-Apps',
            description: 'Lerne, performante und skalierbare Canvas- und Model-Driven Apps mit Fokus auf erstklassige UX zu bauen.',
            status: 'waiting-list',
            priceNormal: 1290,
            priceEarlyBird: 990,
            currency: 'CHF / EUR',
            ctaText: 'Auf die Warteliste',
            features: [
                '30min 1:1 Mentoring',
                'ThePowerAddicts Zertifikat',
                'Aufzeichnungen & Präsentationen',
                'Dataverse für Profis'
            ]
        }
    ],
    status: {
        'waiting-list': 'Warteliste',
        'available': 'Plätze verfügbar',
        'full': 'Ausgebucht'
    },
    earlyBird: "Frühbucher",
    regularPrice: "Normalpreis",
    details: "Details",
    certification: {
        title: "ThePowerAddicts Zertifizierung",
        text: "Nach erfolgreichem Workshop-Abschluss erhalten Sie das offizielle ThePowerAddicts Zertifikat, das Ihre Power Platform Expertise dokumentiert und von Unternehmen als Qualitätsnachweis anerkannt wird.",
        features: [
            "Linkedin-optimiertes Zertifikat",
            "Digitale Badges für E-Mail-Signatur",
            "Zertifikat mit lebenslanger Gültigkeit"
        ],
        certTitle: "Certificate of Expertise",
        certExpert: "Verified Power Platform Expert",
        certIssuedBy: "Ausgestellt von: Microsoft MVP"
    }
  },
  workshopDetail: {
    meta: {
      title: 'Power Platform Admin Kurs | 4-Wochen Zertifizierung DACH',
      description: 'Power Platform Admin Schulung: 4-wöchiger Kurs zu Governance, Security, Monitoring und CoE Starter Kit. Von Microsoft MVPs. Jetzt für DACH-Region buchen.'
    },
    nav: "Werde Power Platform Admin in 4 Wochen",
    title: "Werde Power Platform Admin in 4 Wochen",
    heroList: [
      "Praxisnahe Governance-Strategien in der Power Platform Admin Schulung",
      "Automatisierte Monitoring-Prozesse für sichere Power Platform Administration",
      "Hands-on Erfahrung mit dem CoE Starter Kit in echten Enterprise-Szenarien."
    ],
    cta: "Auf die Warteliste eintragen",
    curriculum: {
        title: "Was du lernst – Wochenplan",
        subtitle: "Ein strukturierter 4-Wochen-Plan, der dich schrittweise vom Setup über Governance und Monitoring bis zum CoE Starter Kit führt. 100% Praxis, 0% Theorie.",
        weeks: [
            {
                title: "Grundlagen & Setup",
                topics: [
                    "Prozesse & Notfall-Accounts",
                    "Tenant Settings (Self-Service Purchases/Consent Plans sauber abschalten)",
                    "Add-on/AI-Builder-Credits steuern",
                    "Environment-Strategie inkl. Default-Environment Best Practices"
                ]
            },
            {
                title: "Governance & Security",
                topics: [
                    "DLP-Policies end-to-end",
                    "Tenant Isolation (Mandantenisolierung) mit Praxisbeispielen",
                    "On-Premises Data Gateway Basics",
                    "Sharing/Guest-Regeln"
                ]
            },
            {
                title: "Monitoring & Kostenkontrolle",
                topics: [
                    "Was wirklich monitoren (statt „alles“)",
                    "Limits & API-Requests inkl. Kosten-Risiken",
                    "Purview/Audit-Logs",
                    "Housekeeping-Prozess (autom. In-Compliance-Check + Benachrichtigungen)"
                ]
            },
            {
                title: "CoE Starter Kit (Hands-on)",
                topics: [
                    "Admin Command Center",
                    "Maker Command Center",
                    "Managed Permissions",
                    "DLP Impact Analysis",
                    "App-Katalog (Stärken/Schwächen)"
                ]
            }
        ]
    },
    deliverables: {
        title: "Deine Ergebnisse (Deliverables)",
        subtitle: "Du verlässt den Workshop nicht mit leeren Händen. Das nimmst du direkt für deinen Arbeitsalltag mit:",
        cards: [
            {
                title: "PowerShell-Snippets & Policies",
                items: ["Self-Service Purchases/Consent Plans deaktivieren", "Add-on-Zuweisungen", "„Pooling-Environment“ für Credits"]
            },
            {
                title: "Checklisten & Vorlagen",
                items: ["Housekeeping/Compliance-Prozess", "Environment-Freigaben-Workflow", "DLP-Impact-Check-Vorlage"]
            },
            {
                title: "CoE-Assets",
                items: ["Vorkonfigurierte Apps, Flows & Tabellen zum direkten Weiterarbeiten"]
            }
        ]
    },
    audience: {
        title: "Für wen ist dieser Workshop geeignet?",
        items: [
            "IT/Platform Admins, die eine Enterprise-ready Governance aufbauen wollen.",
            "Citizen-Dev Leads, die ihre App-Maker-Community sicher skalieren müssen.",
            "Security & Governance-Verantwortliche, die die Power Platform Risiken verstehen und managen wollen."
        ]
    },
    format: {
        title: "Format & Ablauf",
        text: "Der Workshop besteht aus <strong>Live-Sessions mit intensiven Praxis-Walkthroughs</strong>. Wir arbeiten direkt im Admin Center, in Purview und mit dem CoE Starter Kit. Du erhältst <strong>konkrete Scripts, Reports und Vorlagen</strong>, die du direkt in deinem Unternehmen einsetzen kannst. Alle Workshops finden zu 100% online statt, was Ihnen maximale Flexibilität ohne Reisekosten ermöglicht.",
        note: "<strong>Wichtig:</strong> Alle Sessions werden aufgezeichnet und stehen dir im Anschluss zur Verfügung, falls du einmal nicht live dabei sein kannst."
    },
    faq: {
        title: "Häufig gestellte Fragen (FAQ)",
        items: [
            {
                question: "Findet der Workshop vor Ort statt?",
                answer: "Nein, alle unsere Workshops sind zu 100% remote. Sie können bequem von zu Hause oder vom Büro aus teilnehmen und sparen sich jegliche Reisekosten und -zeit. Alle Sessions werden zudem aufgezeichnet, sodass Sie maximale Flexibilität haben."
            },
            {
                question: "Wer darf Environments erstellen?",
                answer: "In unserem Framework: Nur definierte Admins. Wir zeigen Ihnen, wie Sie einen Prozess etablieren, der Wildwuchs und unnötigen Speicherverbrauch von Anfang an verhindert."
            },
            {
                question: "Wie verhindere ich Trial-Umgehungen?",
                answer: "Durch das gezielte Deaktivieren von Consent Plans und Self-Service Purchases. Lizenzen und Credits werden in unserem Modell zentral und bedarfsgerecht durch Admins zugewiesen."
            },
            {
                question: "Wie behalte ich API-Kosten im Griff?",
                answer: "Wir zeigen Ihnen, welche Limits und Reports Sie wirklich prüfen müssen, wie Sie Flows kostenoptimiert strukturieren und automatisierte Alerts via Audit-Logs einrichten, bevor es teuer wird."
            }
        ]
    },
    finalCta: {
        title: "Bereit, zum Admin zu werden?",
        subtitle: "Tragen Sie sich unverbindlich in die Warteliste ein. Wir informieren Sie, sobald die nächsten Termine feststehen."
    }
  },
  powerAppsDetail: {
    meta: {
      title: 'Power Apps Profi Kurs | 4-Wochen Zertifizierung DACH',
      description: 'Power Apps Schulung: 4-wöchiger Kurs zu Canvas Apps, Model-Driven Apps, Dataverse und UX-Design. Von Microsoft MVPs. Jetzt für DACH-Region buchen.'
    },
    nav: "Werde Power Apps Profi in 4 Wochen",
    title: "Werde Power Apps Profi in 4 Wochen",
    heroList: [
      "Entwickle performante Canvas und Model-Driven Apps",
      "Meistere Delegation, Collections und komplexe Formeln",
      "Dataverse-Expertise und professionelles UX-Design"
    ],
    cta: "Auf die Warteliste eintragen",
    curriculum: {
        title: "Was du lernst – Wochenplan",
        subtitle: "Ein strukturierter 4-Wochen-Plan, der dich vom App-Grundlagen über Dataverse und Performance bis zu professionellem UX/UI-Design führt.",
        weeks: [
            {
                title: "Canvas Apps Fundamentals",
                topics: [
                    "App-Architektur und Best Practices",
                    "Collections vs. Variablen richtig einsetzen",
                    "Delegation verstehen und nutzen",
                    "Formeln: Filter, LookUp, ForAll"
                ]
            },
            {
                title: "Dataverse Deep-Dive",
                topics: [
                    "Tabellen, Beziehungen und Geschäftslogik",
                    "Berechnete Felder und Rollups",
                    "Sicherheitsrollen und Column Security",
                    "Dataverse for Teams vs. Premium"
                ]
            },
            {
                title: "Model-Driven Apps",
                topics: [
                    "Wann Model-Driven statt Canvas?",
                    "Formulare, Ansichten und Geschäftsprozessflows",
                    "JavaScript und PCF-Controls",
                    "Moderne Steuerelemente"
                ]
            },
            {
                title: "Performance & UX",
                topics: [
                    "Performance-Optimierung (OnStart-Tricks)",
                    "Responsive Design für Mobile/Desktop",
                    "Komponentenbibliotheken",
                    "Barrierefreiheit (Accessibility)"
                ]
            }
        ]
    },
    deliverables: {
        title: "Deine Ergebnisse (Deliverables)",
        subtitle: "Du verlässt den Workshop nicht mit leeren Händen. Das nimmst du direkt für deinen Arbeitsalltag mit:",
        cards: [
            {
                title: "App-Templates & Snippets",
                items: ["Starter-Template mit Best Practices", "Formel-Sammlung für häufige Szenarien", "Component Library"]
            },
            {
                title: "Checklisten & Guidelines",
                items: ["Performance-Checklist", "UX/UI-Design-Guide", "Dataverse-Schema-Vorlage"]
            },
            {
                title: "Hands-on Projekte",
                items: ["3 vollständige Sample-Apps zum Weiterentwickeln"]
            }
        ]
    },
    audience: {
        title: "Für wen ist dieser Workshop geeignet?",
        items: [
            "Citizen Developer, die ihre Apps auf professionelles Niveau heben wollen",
            "IT-Entwickler, die Low-Code-Ansätze für Unternehmensanwendungen lernen möchten",
            "Power Platform Maker, die komplexe Business-Szenarien umsetzen wollen"
        ]
    },
    format: {
        title: "Format & Ablauf",
        text: "Der Workshop besteht aus <strong>Live-Sessions mit intensiven Praxis-Übungen</strong>. Wir entwickeln gemeinsam Apps, optimieren Performance und arbeiten mit Dataverse. Alle Workshops finden zu 100% online statt, was Ihnen maximale Flexibilität ohne Reisekosten ermöglicht.",
        note: "<strong>Wichtig:</strong> Alle Sessions werden aufgezeichnet und stehen dir im Anschluss zur Verfügung, falls du einmal nicht live dabei sein kannst."
    },
    faq: {
        title: "Häufig gestellte Fragen (FAQ)",
        items: [
            {
                question: "Brauche ich Programmierkenntnisse?",
                answer: "Nein, aber Grundverständnis von Logik und Formeln ist hilfreich. Wir erklären alle Konzepte von Grund auf, gehen aber schnell zu fortgeschrittenen Themen über."
            },
            {
                question: "Canvas oder Model-Driven - was ist besser?",
                answer: "Das hängt vom Use-Case ab. Wir zeigen dir beide Ansätze und wann welcher sinnvoll ist. Oft ist eine Kombination die beste Lösung."
            },
            {
                question: "Was ist mit Desktop-Anwendungen?",
                answer: "Power Apps fokussiert auf Web und Mobile. Für Desktop-Szenarien zeigen wir dir Alternativen oder Hybrid-Ansätze mit PWAs."
            },
            {
                question: "Wie skaliere ich meine Apps?",
                answer: "Wir behandeln ausführlich Performance-Optimierung, Delegation und Caching-Strategien für Apps mit Tausenden von Datensätzen."
            }
        ]
    },
    finalCta: {
        title: "Bereit, Power Apps Profi zu werden?",
        subtitle: "Tragen Sie sich unverbindlich in die Warteliste ein. Wir informieren Sie, sobald die nächsten Termine feststehen."
    }
  },
  powerAutomateDetail: {
    meta: {
      title: 'Power Automate Profi Kurs | 4-Wochen Zertifizierung DACH',
      description: 'Power Automate Schulung: 4-wöchiger Kurs zu Cloud Flows, Desktop Flows, Error Handling und API-Integration. Von Microsoft MVPs. Jetzt für DACH-Region buchen.'
    },
    nav: "Werde Power Automate Profi in 4 Wochen",
    title: "Werde Power Automate Profi in 4 Wochen",
    heroList: [
      "Meistere komplexe Automatisierungen und Error Handling",
      "Lerne API-Integrationen und Custom Connectors",
      "Desktop Flows und Cloud Flows auf Enterprise-Level"
    ],
    cta: "Auf die Warteliste eintragen",
    curriculum: {
        title: "Was du lernst – Wochenplan",
        subtitle: "Ein strukturierter 4-Wochen-Plan, der dich von Flow-Grundlagen über Error Handling und APIs bis zu Enterprise-Automatisierungen führt.",
        weeks: [
            {
                title: "Flow Fundamentals & Patterns",
                topics: [
                    "Trigger-Arten und Bedingungen",
                    "Schleifen und Parallel Branches",
                    "Variablen, Arrays und Apply to Each",
                    "Expressions und Formeln"
                ]
            },
            {
                title: "Error Handling & Monitoring",
                topics: [
                    "Try-Catch-Pattern mit Scopes",
                    "Retry-Policies und Timeout-Strategien",
                    "Logging und Custom Tracking",
                    "Run-After-Konfiguration"
                ]
            },
            {
                title: "APIs & Custom Connectors",
                topics: [
                    "HTTP-Requests und Authentifizierung",
                    "JSON Parsing und Schema",
                    "Custom Connectors erstellen",
                    "OpenAPI-Spezifikationen"
                ]
            },
            {
                title: "Desktop Flows & Enterprise",
                topics: [
                    "Power Automate Desktop-Grundlagen",
                    "Attended vs. Unattended Bots",
                    "Cloud-Desktop-Hybrid-Szenarien",
                    "Solution-Aware-Flows und ALM"
                ]
            }
        ]
    },
    deliverables: {
        title: "Deine Ergebnisse (Deliverables)",
        subtitle: "Du verlässt den Workshop nicht mit leeren Händen. Das nimmst du direkt für deinen Arbeitsalltag mit:",
        cards: [
            {
                title: "Flow-Templates & Snippets",
                items: ["Error-Handling-Framework", "API-Integration-Beispiele", "Logging-Template"]
            },
            {
                title: "Checklisten & Guidelines",
                items: ["Performance-Best-Practices", "Security-Checklist", "Testing-Strategie"]
            },
            {
                title: "Hands-on Projekte",
                items: ["3 Enterprise-Flow-Beispiele zum Weiterentwickeln"]
            }
        ]
    },
    audience: {
        title: "Für wen ist dieser Workshop geeignet?",
        items: [
            "Power-User, die ihre Automatisierungen professionalisieren wollen",
            "IT-Professionals, die RPA und Workflow-Automatisierung lernen möchten",
            "Entwickler, die Low-Code-Integration in Enterprise-Systeme suchen"
        ]
    },
    format: {
        title: "Format & Ablauf",
        text: "Der Workshop besteht aus <strong>Live-Sessions mit intensiven Praxis-Übungen</strong>. Wir entwickeln gemeinsam Flows, debuggen Fehler und integrieren APIs. Alle Workshops finden zu 100% online statt, was Ihnen maximale Flexibilität ohne Reisekosten ermöglicht.",
        note: "<strong>Wichtig:</strong> Alle Sessions werden aufgezeichnet und stehen dir im Anschluss zur Verfügung, falls du einmal nicht live dabei sein kannst."
    },
    faq: {
        title: "Häufig gestellte Fragen (FAQ)",
        items: [
            {
                question: "Was ist der Unterschied zu Logic Apps?",
                answer: "Logic Apps ist Azure-basiert und für Entwickler gedacht. Power Automate ist citizen-developer-freundlich und tief in Microsoft 365 integriert. Wir zeigen beide Ansätze."
            },
            {
                question: "Wie handle ich große Datenmengen?",
                answer: "Wir behandeln ausführlich Pagination, Batching und Performance-Optimierung für Flows mit Millionen von Datensätzen."
            },
            {
                question: "Was kostet Power Automate?",
                answer: "Wir erklären das Lizenzmodell (Per User, Per Flow) und zeigen dir, wie du Kosten optimierst, z.B. durch Flow-Konsolidierung."
            },
            {
                question: "Desktop Flows - brauche ich das?",
                answer: "Wenn du Legacy-Systeme ohne APIs automatisieren willst: ja. Wir zeigen dir Vor- und Nachteile und wann es Sinn macht."
            }
        ]
    },
    finalCta: {
        title: "Bereit, Power Automate Profi zu werden?",
        subtitle: "Tragen Sie sich unverbindlich in die Warteliste ein. Wir informieren Sie, sobald die nächsten Termine feststehen."
    }
  },
  consulting: {
    meta: {
      title: 'Unabhängige Power Platform Beratung | ThePowerAddicts',
      description: 'Holen Sie sich objektive MVP-Expertise für Power Platform Audits, Projekt-Zweitmeinungen oder Governance Checks. Unabhängig und praxisorientiert.'
    },
    hero: {
      title: "Unabhängige Power Platform Beratung",
      subtitle: "Holen Sie sich die objektive Expertise von Microsoft MVPs für Ihre komplexesten Herausforderungen – ohne Vendor-Lock-in."
    },
    services: [
      {
        title: "Power Platform Audit",
        duration: "3-5 Tage",
        description: "Tiefgehende Analyse Ihrer gesamten Power Platform Umgebung. Wir identifizieren Risiken, Performance-Engpässe und ungenutztes Potenzial.",
        deliverables: ["Umfassender Audit-Report", "Konkreter Maßnahmenkatalog", "Executive-Management-Präsentation"]
      },
      {
        title: "Projekt-Zweitmeinung",
        duration: "1-2 Tage",
        description: "Unabhängige Bewertung eines bestehenden oder geplanten Power Platform Projekts. Wir validieren Architektur, Lösungsdesign und Budget.",
        deliverables: ["Validierungs-Dokument", "Risiko-Analyse", "Optimierungsvorschläge"]
      },
      {
        title: "Governance Check",
        duration: "2-3 Tage",
        description: "Überprüfung und Optimierung Ihres Governance-Frameworks. Wir stellen sicher, dass Ihre Plattform sicher, compliant und skalierbar ist.",
        deliverables: ["Governance-Scorecard", "DLP-Policy-Optimierung", "CoE-Strategie-Empfehlung"]
      }
    ],
    deliverablesTitle: "Deliverables:",
    process: {
      title: "Unser Beratungs-Prozess",
      steps: [
        { title: "Kostenloses Erstgespräch", description: "Wir verstehen Ihre Herausforderung und definieren den Scope." },
        { title: "Analyse & Durchführung", description: "Wir führen die vereinbarte Analyse durch (remote oder vor Ort)." },
        { title: "Ergebnis-Präsentation", description: "Sie erhalten umsetzbare Ergebnisse und einen klaren Fahrplan." }
      ]
    },
    cta: {
      title: "Bereit für Klarheit in Ihrem Projekt?",
      subtitle: "Kontaktieren Sie uns für ein unverbindliches Erstgespräch und finden Sie heraus, wie wir Ihnen helfen können, Ihre Power Platform Investition zu maximieren.",
      button: "Beratung anfragen"
    }
  },
  success: {
    meta: {
      title: 'Erfolgsgeschichten unserer Absolventen | ThePowerAddicts',
      description: 'Sehen Sie die Erfolge unserer Workshop-Teilnehmer: 23% durchschnittliche Gehaltserhöhung, 89% Beförderungsrate und ein enormer ROI.'
    },
    hero: {
      title: "Über 300 erfolgreiche Karriere-Sprünge",
      subtitle: "Lesen Sie, wie unsere Absolventen ihre Karriere transformiert, ihr Gehalt erhöht und zu gefragten Experten in der Power Platform Community geworden sind."
    },
    metrics: {
      title: "Erfolg in Zahlen",
      subtitle: "Basierend auf Umfragen 6 & 12 Monate nach Workshop-Abschluss (Teilnahmequote: 89%)",
      items: [
        { value: "23%", label: "Ø Gehaltserhöhung", description: "Basierend auf dem Karrieresprung vom Einsteiger zum Professional mit 1-2 Jahren Erfahrung." },
        { value: "89%", label: "Beförderung", description: "Erhalten eine Beförderung oder eine neue, bessere Position." },
        { value: "2.847%", label: "Ø ROI", description: "Durchschnittlicher Return on Investment nach 12 Monaten." }
      ]
    },
    potential: {
        title: "Das Gehaltspotenzial ist enorm",
        text: "Ein Jahreslohn im sechsstelligen Bereich ist für ausgebildete Power Platform Administratoren nicht die Ausnahme, sondern die Regel. Natürlich hängt es von Branche und Unternehmen ab, aber die Expertise ist ein <span class=\"font-bold text-brand-gold\">enormer Karriere-Booster</span>."
    },
    testimonialsTitle: "Was unsere Absolventen sagen"
  },
  contact: {
    meta: {
      title: 'Kontakt | ThePowerAddicts',
      description: 'Kontaktieren Sie uns für Fragen zu Power Platform Workshops, Schulungen oder Beratung. Wir helfen Ihnen gerne weiter.'
    },
    hero: {
      title: "Kontaktieren Sie uns",
      subtitle: "Haben Sie Fragen zu unseren Workshops oder Beratungsleistungen? Wir sind hier, um zu helfen."
    },
    form: {
      title: "Schreiben Sie uns eine Nachricht",
      name: "Ihr Name *",
      email: "Ihre E-Mail *",
      subject: "Betreff *",
      subjects: ["Allgemeine Anfrage", "Frage zum Workshop", "Anfrage für Beratung", "Presseanfrage"],
      message: "Ihre Nachricht *",
      submit: "Nachricht senden"
    },
    info: [
      { title: "Allgemeine Anfragen", description: "Für allgemeine Fragen zu ThePowerAddicts.", email: "info@thepoweraddicts.com" },
      { title: "Workshop-Support", description: "Fragen zu Buchungen, Inhalten oder Terminen.", email: "workshops@thepoweraddicts.com" },
      { title: "Beratungs-Anfragen", description: "Für ein unverbindliches Erstgespräch zu unseren Beratungsleistungen.", email: "consulting@thepoweraddicts.com" }
    ],
    alert: "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden."
  },
  partner: {
    meta: {
        title: 'Partner werden | ThePowerAddicts Partnerprogramm',
        description: 'Empfehlen Sie unsere Power Platform Workshops und verdienen Sie 15% Lifetime-Provision. Werden Sie jetzt Partner von ThePowerAddicts.'
    },
    hero: {
        title: "Werden Sie ThePowerAddicts Partner",
        subtitle: "Empfehlen Sie unsere hoch bewerteten Workshops und erhalten Sie eine lebenslange Provision von <span class=\"text-brand-gold font-bold\">15% auf alle Umsätze</span>, die durch Ihre vermittelten Kunden generiert werden."
    },
    process: {
        title: "So einfach funktioniert's",
        steps: [
            { title: "Anmelden", description: "Füllen Sie das Partnerformular aus. Wir prüfen Ihre Anfrage." },
            { title: "Teilen", description: "Sie erhalten einen persönlichen Empfehlungslink und Marketing-Material." },
            { title: "Verdienen", description: "Erhalten Sie 15% Provision auf Lebenszeit für jeden Umsatz." }
        ]
    },
    benefits: {
        title: "Ihre Vorteile als Partner",
        items: [
            { title: "15% Lifetime-Provision", description: "Sie verdienen nicht nur einmal, sondern an jedem zukünftigen Kauf Ihres vermittelten Kunden." },
            { title: "Hochkonvertierende Produkte", description: "Profitieren Sie vom exzellenten Ruf von Microsoft MVPs und einer Abschlussrate von 97%." },
            { title: "Einfaches Tracking", description: "Ein faires und transparentes Dashboard zur Verfolgung Ihrer Klicks, Anmeldungen und Provisionen." },
            { title: "Marketing-Materialien", description: "Wir stellen Ihnen professionelle Banner, Texte und Vorlagen zur Verfügung." }
        ]
    },
    form: {
        title: "Jetzt Partner werden",
        subtitle: "Füllen Sie das Formular aus, um sich für unser Partnerprogramm zu bewerben.",
        submit: "Partner-Anmeldung absenden",
        alert: "Vielen Dank für Ihre Anmeldung! Wir werden Ihre Anfrage prüfen und uns in Kürze bei Ihnen melden."
    }
  },
  legal: {
    meta: {
      title: 'Rechtliches | Impressum, Datenschutz & AGB | ThePowerAddicts',
      description: 'Rechtliche Informationen von ThePowerAddicts, einschliesslich Impressum, Datenschutzerklärung und Allgemeinen Geschäftsbedingungen (AGB).'
    },
    hero: {
      title: 'Rechtliche Informationen'
    },
    imprint: {
      title: 'Impressum',
      content: [
        'ThePowerAddicts.com',
        'Einzelfirma von Marcel Lehmann',
        'Im Feldacher 16',
        '8320 Fehraltorf',
        'Schweiz'
      ]
    },
    privacy: {
      title: 'Datenschutzerklärung',
      content: `
        <p><strong>Stand: Oktober 2025</strong></p>
        <h4>1. Allgemeine Hinweise und Kontaktdaten</h4>
        <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website www.thepoweraddicts.com und bei der Nutzung unserer Dienstleistungen auf. Wir berücksichtigen dabei das Schweizer Datenschutzgesetz (nDSG) sowie die Datenschutz-Grundverordnung (DSGVO) für Kunden im EU-Raum.</p>
        <p><strong>Verantwortliche Stelle:</strong><br>ThePowerAddicts.com, Marcel Lehmann, Im Feldacher 16, 8320 Fehraltorf, Schweiz</p>
        <p><strong>Bei Fragen zum Datenschutz:</strong> info@thepoweraddicts.com</p>
        
        <h4>2. Datenerfassung auf unserer Website</h4>
        <p><strong>Informatorische Nutzung der Website:</strong> Bei der rein informativen Nutzung der Website erheben wir nur die Daten, die Ihr Browser automatisch an unseren Server übermittelt. Dies sind: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time (GMT), Inhalt der Anforderung, Zugriffsstatus/HTTP-Statuscode, jeweils übertragene Datenmenge, Website von der die Anforderung kommt, Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware.</p>
        <p><strong>Kontaktformulare (Warteliste, Newsletter, etc.) und E-Mail:</strong> Bei Anfragen über Kontaktformulare (z.B. für die Warteliste oder den Newsletter) oder per E-Mail werden Ihre Angaben inklusive der Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Für Anmeldungen aus dem deutschsprachigen Raum wenden wir zur Sicherstellung Ihrer Einwilligung das Double-Opt-in-Verfahren an. Das bedeutet, Sie erhalten nach Ihrer Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden.</p>
        
        <h4>3. Workshop-Anmeldungen und Beratungsleistungen</h4>
        <p>Für unsere <strong>Power Platform Workshops</strong> und <strong>Beratungsdienstleistungen</strong> erheben wir folgende Daten:</p>
        <ul>
          <li>Name, Vorname, Unternehmen</li>
          <li>E-Mail-Adresse und Telefonnummer</li>  
          <li>Rechnungsadresse</li>
          <li>Fachlicher Hintergrund (für Workshop-Vorbereitung)</li>
          <li>Kommunikation im Rahmen der Leistungserbringung</li>
        </ul>
        <p><strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO / Art. 31 Abs. 2 lit. a nDSG)</p>
        
        <h4>4. Cookies und Website-Analyse</h4>
        <p>Unsere Website verwendet grundlegende Cookies für die Funktionsfähigkeit. Detaillierte Informationen finden Sie in unserer Cookie-Richtlinie. Wir setzen keine Tracking-Tools von Drittanbietern ohne Ihre explizite Einwilligung ein.</p>
        
        <h4>5. Ihre Rechte</h4>
        <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
          <li>Recht auf Berichtigung unrichtiger Daten</li>
          <li>Recht auf Löschung Ihrer Daten</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
          <li>Widerspruchsrecht gegen die Verarbeitung</li>
        </ul>
        
        <h4>6. Datensicherheit</h4>
        <p>Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.</p>
        
        <h4>7. Änderungen der Datenschutzerklärung</h4>
        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
      `
    },
    terms: {
      title: 'Allgemeine Geschäftsbedingungen (AGB)',
      content: `
        <p><strong>Stand: Oktober 2025</strong></p>
        <h4>§ 1 Geltungsbereich</h4>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von ThePowerAddicts.com, Marcel Lehmann, mit Sitz in Fehraltorf, Schweiz (nachfolgend "ThePowerAddicts.com" oder "wir") gegenüber Kunden im DACH-Raum.</p>
        <p>Unsere AGB gelten ausschließlich. Abweichende oder entgegenstehende Geschäftsbedingungen des Kunden werden nicht anerkannt, es sei denn, wir haben deren Geltung ausdrücklich schriftlich zugestimmt.</p>
        
        <h4>§ 2 Leistungsgegenstand</h4>
        <p>ThePowerAddicts.com bietet folgende Dienstleistungen an:</p>
        <ol>
          <li><strong>Power Platform Workshops:</strong>
            <ul>
              <li>Werde Power Platform Admin in 4 Wochen</li>
              <li>Werde Power Automate Profi in 4 Wochen</li>  
              <li>Werde Power Apps Profi in 4 Wochen</li>
            </ul>
          </li>
          <li><strong>Digitalisierungsberatung und -implementierung</strong></li>
        </ol>
        
        <h4>§ 3 Vertragsabschluss und Preise</h4>
        <p><strong>Workshops:</strong> Die Anmeldung zu Workshops erfolgt über unsere Website. Der Vertrag kommt durch unsere Anmeldebestätigung zustande.</p>
        <p><strong>Beratungsleistungen:</strong> Angebote sind 30 Tage gültig. Der Vertrag kommt durch schriftliche Auftragsbestätigung zustande.</p>
        <p><strong>Preise:</strong> Es gelten die zum Zeitpunkt der Bestellung gültigen Preise gemäß unserer aktuellen Preisliste. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.</p>
        
        <h4>§ 4 Zahlungsbedingungen</h4>
        <p><strong>Workshops:</strong> Zahlung 14 Tage vor Workshop-Beginn.</p>
        <p><strong>Zahlungsfrist:</strong> 30 Tage netto nach Rechnungstellung.</p>
        
        <h4>§ 5 Widerrufsrecht</h4>
        <p>Verbraucher haben ein 14-tägiges Widerrufsrecht ab Vertragsabschluss. Bei Workshops erlischt das Widerrufsrecht, wenn der Workshop bereits begonnen hat und Sie der Ausführung ausdrücklich zugestimmt haben.</p>
        
        <h4>§ 6 Leistungserbringung und Termine</h4>
        <p><strong>Workshops:</strong> Finden zu den angekündigten Terminen statt. Terminverschiebungen durch ThePowerAddicts.com werden mindestens 14 Tage vorher mitgeteilt.</p>
        
        <h4>§ 7 Mitwirkungspflichten des Kunden</h4>
        <p>Der Kunde stellt rechtzeitig alle erforderlichen Informationen, Zugänge und Mitarbeiter zur Verfügung. Bei Verzögerungen durch mangelnde Mitwirkung trägt der Kunde die Mehrkosten.</p>
        
        <h4>§ 8 Geistiges Eigentum und Vertraulichkeit</h4>
        <p>Alle von ThePowerAddicts.com entwickelten Lösungen bleiben bis zur vollständigen Bezahlung Eigentum von ThePowerAddicts.com. Nach vollständiger Zahlung erhält der Kunde die vereinbarten Nutzungsrechte.</p>
        <p>Beide Parteien verpflichten sich zur Vertraulichkeit über alle im Rahmen der Zusammenarbeit bekannt gewordenen Geschäftsgeheimnisse.</p>
        
        <h4>§ 9 Haftung und Gewährleistung</h4>
        <p>ThePowerAddicts.com leistet Gewähr für die vertragsgemäße Erbringung der vereinbarten Dienstleistungen. Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, außer bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
        <p><strong>Bei Workshops:</strong> Umfang und Inhalt entsprechen der jeweiligen Workshop-Beschreibung. Individuelle Lernerfolge können nicht garantiert werden.</p>
        
        <h4>§ 10 Kündigung</h4>
        <p><strong>Workshops:</strong> Keine Kündigung nach Anmeldeschluss, außer bei Widerruf.</p>
        
        <h4>§ 11 Schlussbestimmungen</h4>
        <p>Es gilt Schweizer Recht. Gerichtsstand ist Zürich, Schweiz. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen AGB bestehen.</p>
      `
    }
  },
  schemas: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ThePowerAddicts",
      "url": "https://www.thepoweraddicts.com",
      "logo": "https://www.thepoweraddicts.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@thepoweraddicts.com",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://www.linkedin.com/company/100255788/"
      ],
      "founder": {
        "@type": "Person",
        "name": "Marcel Lehmann"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Im Feldacher 16",
        "addressLocality": "Fehraltorf",
        "postalCode": "8320",
        "addressCountry": "CH"
      }
    },
    website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.thepoweraddicts.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.thepoweraddicts.com/#/workshops?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
    },
    persons: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Marcel Lehmann",
        "jobTitle": "Microsoft MVP",
        "worksFor": {
          "@type": "Organization",
          "name": "ThePowerAddicts"
        },
        "url": "https://www.linkedin.com/in/marcelehmann/",
        "image": "https://www.thepoweraddicts.com/marcel.webp",
        "sameAs": [
          "https://www.linkedin.com/in/marcelehmann/",
          "https://www.kmupower.com",
          "https://www.powerplatformtip.com"
        ],
        "knowsAbout": ["Power Apps", "Power Automate", "Microsoft Power Platform"]
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Michael Roth",
        "jobTitle": "Microsoft MVP",
        "worksFor": {
          "@type": "Organization",
          "name": "ThePowerAddicts"
        },
        "url": "https://www.linkedin.com/in/michaelroth42/",
        "image": "https://www.thepoweraddicts.com/michael.webp",
        "sameAs": [
          "https://www.linkedin.com/in/michaelroth42/",
          "https://www.michaelroth42.com"
        ],
        "knowsAbout": ["Power Platform Governance", "Power Platform Security", "Microsoft Power Platform"]
      }
    ],
    courseList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Course",
            "name": "Werde Power Platform Admin in 4 Wochen",
            "description": "Strukturiertes 4-Wochen-Intensiv-Programm zum zertifizierten Admin. Von Environment-Setup bis Center of Excellence - alles hands-on.",
            "provider": {
              "@type": "Organization",
              "name": "ThePowerAddicts"
            },
            "url": "https://www.thepoweraddicts.com/#/workshops/power-platform-admin-in-4-wochen"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Course",
            "name": "Werde Power Automate Profi in 4 Wochen",
            "description": "Ein Deep-Dive in fortgeschrittene Power Automate-Konzepte, von der Fehlerbehandlung bis zur API-Integration.",
             "provider": {
              "@type": "Organization",
              "name": "ThePowerAddicts"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Course",
            "name": "Werde Power Apps Profi in 4 Wochen",
            "description": "Lerne, performante und skalierbare Canvas- und Model-Driven Apps mit Fokus auf erstklassige UX zu bauen.",
             "provider": {
              "@type": "Organization",
              "name": "ThePowerAddicts"
            }
          }
        }
      ]
    },
    courseDetail: {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Werde Power Platform Admin in 4 Wochen",
        "description": "Ein strukturierter 4-Wochen-Plan, der dich schrittweise vom Setup über Governance und Monitoring bis zum CoE Starter Kit führt. 100% Praxis, 0% Theorie.",
        "provider": {
            "@type": "Organization",
            "name": "ThePowerAddicts",
            "sameAs": "https://www.thepoweraddicts.com"
        }
    },
    faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Findet der Workshop vor Ort statt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nein, alle unsere Workshops sind zu 100% remote. Sie können bequem von zu Hause oder vom Büro aus teilnehmen und sparen sich jegliche Reisekosten und -zeit. Alle Sessions werden zudem aufgezeichnet, sodass Sie maximale Flexibilität haben."
            }
          },
          {
            "@type": "Question",
            "name": "Wer darf Environments erstellen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In unserem Framework: Nur definierte Admins. Wir zeigen Ihnen, wie Sie einen Prozess etablieren, der Wildwuchs und unnötigen Speicherverbrauch von Anfang an verhindert."
            }
          },
          {
            "@type": "Question",
            "name": "Wie verhindere ich Trial-Umgehungen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Durch das gezielte Deaktivieren von Consent Plans und Self-Service Purchases. Lizenzen und Credits werden in unserem Modell zentral und bedarfsgerecht durch Admins zugewiesen."
            }
          },
          {
            "@type": "Question",
            "name": "Wie behalte ich API-Kosten im Griff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wir zeigen Ihnen, welche Limits und Reports Sie wirklich prüfen müssen, wie Sie Flows kostenoptimiert strukturieren und automatisierte Alerts via Audit-Logs einrichten, bevor es teuer wird."
            }
          }
        ]
    },
    breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Workshops",
          "item": "https://www.thepoweraddicts.com/#/workshops"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Power Platform Admin in 4 Wochen"
        }]
    },
    services: [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Power Platform Audit",
            "description": "Tiefgehende Analyse Ihrer gesamten Power Platform Umgebung. Wir identifizieren Risiken, Performance-Engpässe und ungenutztes Potenzial.",
            "provider": {
                "@type": "Organization",
                "name": "ThePowerAddicts"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Projekt-Zweitmeinung",
            "description": "Unabhängige Bewertung eines bestehenden oder geplanten Power Platform Projekts. Wir validieren Architektur, Lösungsdesign und Budget.",
            "provider": {
                "@type": "Organization",
                "name": "ThePowerAddicts"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Governance Check",
            "description": "Überprüfung und Optimierung Ihres Governance-Frameworks. Wir stellen sicher, dass Ihre Plattform sicher, compliant und skalierbar ist.",
            "provider": {
                "@type": "Organization",
                "name": "ThePowerAddicts"
            }
        }
    ]
  }
};