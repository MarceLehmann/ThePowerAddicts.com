import { allWorkshops } from '../data/workshops';

export const en = {
  header: {
    navLinks: [
      { name: 'About Us', path: '/ueber-uns' },
      { name: 'Consulting', path: '/unabhaengige-beratung' },
    ],
    mvp: 'Microsoft MVP',
    contact: 'Contact',
    openMenu: 'Open menu',
  },
  footer: {
    slogan: 'Microsoft Power Platform Expertise by MVPs. We transform careers and businesses.',
    nav: 'Navigation',
    navLinks: {
      about: 'About Us',
      workshops: 'Workshops',
      consulting: 'Consulting',
      success: 'Success',
      partner: 'Become a Partner'
    },
    legal: 'Legal',
    legalLinks: {
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    },
    socials: {
      title: 'Follow us',
      companyLinkedInUrl: 'https://www.linkedin.com/company/100255788/'
    },
    newsletter: 'Newsletter',
    newsletterText: 'Stay up-to-date.',
    emailPlaceholder: 'Your Email',
    submit: 'Subscribe',
    copyright: `© ${new Date().getFullYear()} ThePowerAddicts.com. All rights reserved.`
  },
  or: 'or',
  countdown: {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    workshopStarted: 'Workshop has started!'
  },
  systemeIo: {
    newsletter: '<!-- PASTE ENGLISH SYSTEME.IO CODE FOR NEWSLETTER HERE -->',
    waitingListAdmin: '<!-- PASTE ENGLISH SYSTEME.IO CODE FOR ADMIN WAITING LIST HERE -->',
    waitingListAutomate: '<!-- PASTE ENGLISH SYSTEME.IO CODE FOR AUTOMATE WAITING LIST HERE -->',
    waitingListApps: '<!-- PASTE ENGLISH SYSTEME.IO CODE FOR APPS WAITING LIST HERE -->',
    partner: '<!-- PASTE ENGLISH SYSTEME.IO CODE FOR PARTNER SIGNUP HERE -->'
  },
  home: {
    meta: {
      title: 'ThePowerAddicts | Power Platform Training & Courses (DACH)',
      description: 'Intensive Power Platform workshops and admin training by Microsoft MVPs. Become an expert in 4 weeks. For Switzerland, Germany & Austria.'
    },
    hero: {
      title1: 'Microsoft Power Platform Expertise',
      title2: 'Workshops & Consulting',
      subtitle: 'Become an expert in 4 weeks or get independent MVP consulting. Leading Power Platform training in Switzerland, Germany, and Austria (DACH region).',
      stats: [
        { value: '300+', label: 'Professionals trained' },
        { value: '23%', label: 'Avg. salary increase' },
      ],
      ctaWorkshops: 'Discover Workshops',
      ctaConsulting: 'Request Consulting'
    },
    upcomingCourses: {
      title: 'Power Platform Workshops',
      subtitle: 'Choose your workshop – All courses 100% online via Microsoft Teams',
      formats: allWorkshops,
      statusLabels: {
        available: 'Available',
        limited: 'Few Spots Left',
        waitlist: 'Join Waiting List',
        full: 'Sold Out'
      },
      spotsLeft: 'spots available',
      perPerson: 'per person',
      earlyBird: 'Early bird until',
      register: 'Register Now',
      registerWaitlist: 'Join Waitlist',
      details: 'More Details'
    },
    expertisePaths: {
      title: 'Available Expert Workshops',
      subtitle: 'Choose the path that best suits your goals: intensive workshops or tailored consulting.',
      workshops: [
        {
          id: 'admin',
          modalId: 'waitingListAdmin',
          title: 'Become a Power Platform Admin in 4 Weeks',
          subtitle: 'Become a certified Power Platform Administrator',
          description: 'Structured 4-week intensive program to become a certified admin. From environment setup to Center of Excellence - all hands-on.',
          status: 'waitlist',
          priceNormal: 1290,
          priceEarlyBird: 990,
          currency: 'CHF / EUR',
          cta: 'Join Waiting List',
          detailLink: '/workshops/power-platform-admin-in-4-wochen',
          features: [
            '30min 1:1 Mentoring',
            'ThePowerAddicts Certificate',
            'Recordings & Presentations',
            '100% Practical Focus'
          ]
        },
        {
          id: 'automate',
          modalId: 'waitingListAutomate',
          title: 'Become a Power Automate Pro in 4 Weeks',
          subtitle: 'Master complex automations',
          description: 'A deep-dive into advanced Power Automate concepts, from error handling to API integration.',
          status: 'waitlist',
          priceNormal: 1290,
          priceEarlyBird: 990,
          currency: 'CHF / EUR',
          cta: 'Join Waiting List',
          detailLink: '/workshops/power-automate-profi-in-4-wochen',
          features: [
            '30min 1:1 Mentoring',
            'ThePowerAddicts Certificate',
            'Recordings & Presentations',
            'API Integrations'
          ]
        },
        {
          id: 'apps',
          modalId: 'waitingListApps',
          title: 'Become a Power Apps Pro in 4 Weeks',
          subtitle: 'Develop sophisticated business apps',
          description: 'Learn to build performant and scalable Canvas and Model-Driven apps with a focus on premium UX.',
          status: 'waitlist',
          priceNormal: 1290,
          priceEarlyBird: 990,
          currency: 'CHF / EUR',
          cta: 'Join Waiting List',
          detailLink: '/workshops/power-apps-profi-in-4-wochen',
          features: [
            '30min 1:1 Mentoring',
            'ThePowerAddicts Certificate',
            'Recordings & Presentations',
            'Dataverse for Pros'
          ]
        }
      ],
      consulting: {
        title: 'Independent Consulting',
        description: 'Get objective MVP expertise for your most complex challenges.',
        cta: 'Request Consulting'
      },
      customTraining: {
        title: 'No suitable date available?',
        description: 'No problem! We also offer individual training for you or your team. Flexible according to your schedule and adapted to your specific needs.',
        cta: 'Request Individual Training'
      }
    }
  },
  about: {
    meta: {
      title: 'About Us | Microsoft MVP Expertise | ThePowerAddicts',
      description: 'Meet Microsoft MVPs Marcel Lehmann and Michael Roth. Learn about our mission to train Power Platform experts in the DACH region.'
    },
    hero: {
        title: "Your Mentors for the Microsoft Power Platform",
        text: "In recent years, we have guided over 300 professionals on their journey to becoming Power Platform experts. With the number of citizen developers exploding—often quadrupling in just three years—our mission is clearer than ever: we train the urgently needed administrators who ensure stability, security, and scalability. We impart the practical knowledge that transforms careers."
    },
    expertise: {
        title: "Why ThePowerAddicts is Different",
        cards: [
            { title: "Practitioners, Not Just Theorists", description: "Every workshop content is based on real enterprise projects. No theory without practical relevance." },
            { title: "Vendor-Independent Perspective", description: "As independent MVPs, we only recommend what truly works—not what needs to be sold." },
            { title: "Measurable Success", description: "Our high completion rate of 97% ensures that every participant leaves the workshop with a recognized certificate." },
            { title: "100% Remote & Flexible", description: "Participate from anywhere, without travel costs. All sessions are recorded and available to you." }
        ]
    },
    team: {
        title: "The Minds Behind ThePowerAddicts",
        members: [
          {
            name: 'Marcel Lehmann',
            specialty: 'PowerApps & PowerAutomate',
            image: '/marcel.webp',
            bio: "In 2017, I was frustrated with repetitive Excel tasks, and my first Flow saved me 2 hours daily. This 'wow' experience drives me today as an MVP to help SMEs automate up to 60% of their processes. I know from my own experience how the Power Platform can change a career: my salary has increased by over 75% in just a few years.",
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
            bio: "Most companies realize it too late: without governance, the Power Platform becomes a security risk instead of a productivity tool. As a Power Platform MVP, I focus on practical governance strategies that empower teams rather than restrict them.",
            website: 'www.michaelroth42.com',
            websiteUrl: 'https://www.michaelroth42.com',
            socials: {
              linkedin: 'https://www.linkedin.com/in/michaelroth42/'
            }
          }
        ]
    },
    philosophy: {
        title: "Our Workshop Philosophy",
        cards: [
            { title: "1. Hands-on from Day 1", description: "No endless PowerPoint presentations. From minute one, you'll work in real Power Platform environments with real business scenarios.", example: "In Week 1, you'll configure a complete production environment for a fictional company with 500 employees." },
            { title: "2. Failure-driven Learning", description: "You learn from the most common admin mistakes. Every workshop day starts with a 'Fail-Case Study'.", example: "'Why this DLP policy brought down the entire company'—real disaster scenarios and solutions." },
            { title: "3. Enterprise-Scale from Start", description: "No 'Hello World' exercises. All projects are designed to be deployed in Fortune 500 companies.", example: "Governance framework for 10,000+ users with multi-geo compliance requirements." },
            { title: "4. Certification-focused", description: "Every workshop day ends with certification-relevant exercises. The final week consists of 5 full mock exams.", example: "Daily 30-minute mini-tests on the corresponding exam objectives." }
        ],
        example: "Example:"
    }
  },
  workshops: {
    meta: {
      title: 'Our Power Platform Workshops & Courses | ThePowerAddicts',
      description: 'Discover our expert workshops for Power Platform Admin, Power Automate, and Power Apps. Book your training and start your career in the DACH region.'
    },
    hero: {
        title: "Become a Microsoft Power Platform Expert in 4 Weeks",
        subtitle: "Structured 4-week courses with ThePowerAddicts certification. Based on 150+ enterprise projects. Guaranteed measurable results for your professional development."
    },
    available: "Available Expert Workshops",
    list: [
        {
            id: 'power-platform-admin',
            modalId: 'waitingListAdmin',
            title: 'Become a Power Platform Admin in 4 Weeks',
            subtitle: 'Become a certified Power Platform Administrator',
            description: 'Structured 4-week intensive program to become a certified admin. From environment setup to the Center of Excellence - all hands-on.',
            status: 'waiting-list',
            priceNormal: 1290,
            priceEarlyBird: 990,
            currency: 'CHF / EUR',
            ctaText: 'Join Waiting List',
            features: [
                'ThePowerAddicts Certificate',
                'Enterprise Governance',
                'CoE Dashboard',
                '100% Hands-on',
            ]
        },
        {
            id: 'power-automate-pro',
            modalId: 'waitingListAutomate',
            title: 'Become a Power Automate Pro in 4 Weeks',
            subtitle: 'Master complex automations',
            description: 'A deep-dive into advanced Power Automate concepts, from error handling to API integration.',
            status: 'waiting-list',
            priceNormal: 1290,
            priceEarlyBird: 990,
            currency: 'CHF / EUR',
            ctaText: 'Join Waiting List',
            features: [
                'ThePowerAddicts Certificate',
                'Advanced Error Handling',
                'API Integrations',
                'Performance Optimization',
            ]
        },
        {
            id: 'power-apps-pro',
            modalId: 'waitingListApps',
            title: 'Become a Power Apps Pro in 4 Weeks',
            subtitle: 'Develop sophisticated business apps',
            description: 'Learn to build performant and scalable Canvas and Model-Driven apps with a focus on premium UX.',
            status: 'waiting-list',
            priceNormal: 1290,
            priceEarlyBird: 990,
            currency: 'CHF / EUR',
            ctaText: 'Join Waiting List',
            features: [
                'ThePowerAddicts Certificate',
                'Responsive UI/UX Design',
                'Dataverse for Pros',
                'Delegation & Performance',
            ]
        }
    ],
    status: {
        'waiting-list': 'Waiting list',
        'available': 'Seats available',
        'full': 'Sold out'
    },
    earlyBird: "Early Bird",
    regularPrice: "Regular Price",
    details: "Details",
    certification: {
        title: "ThePowerAddicts Certification",
        text: "Upon successful completion of the workshop, you will receive the official ThePowerAddicts certificate, which documents your Power Platform expertise and is recognized by companies as proof of quality.",
        features: [
            "LinkedIn-optimized certificate",
            "Digital badges for email signature",
            "Certificate with lifetime validity"
        ],
        certTitle: "Certificate of Expertise",
        certExpert: "Verified Power Platform Expert",
        certIssuedBy: "Issued by: Microsoft MVP"
    }
  },
  workshopDetail: {
    meta: {
      title: 'Power Platform Admin Workshop (4 Weeks) | ThePowerAddicts',
      description: 'Detailed information on our 4-week Power Platform Admin course. Learn Governance, Security, Monitoring, and the CoE Starter Kit.'
    },
    nav: "Become a Power Platform Admin in 4 Weeks",
    title: "Become a Power Platform Admin in 4 Weeks",
    heroList: [
      "Practical governance strategies that empower teams instead of restricting them.",
      "Automated monitoring processes that minimize risks and control costs.",
      "Hands-on experience with the CoE Starter Kit in real enterprise scenarios."
    ],
    cta: "Join the Waiting List",
    curriculum: {
        title: "What You'll Learn – Weekly Plan",
        subtitle: "A structured 4-week plan that guides you step-by-step from setup, through governance and monitoring, to the CoE Starter Kit. 100% practical, 0% theory.",
        weeks: [
            {
                title: "Fundamentals & Setup",
                topics: [
                    "Processes & emergency accounts",
                    "Tenant Settings (properly disabling self-service purchases/consent plans)",
                    "Controlling add-on/AI Builder credits",
                    "Environment strategy incl. default environment best practices"
                ]
            },
            {
                title: "Governance & Security",
                topics: [
                    "DLP policies end-to-end",
                    "Tenant isolation with practical examples",
                    "On-Premises Data Gateway basics",
                    "Sharing/Guest rules"
                ]
            },
            {
                title: "Monitoring & Cost Control",
                topics: [
                    "What to really monitor (instead of 'everything')",
                    "Limits & API requests incl. cost risks",
                    "Purview/Audit logs",
                    "Housekeeping process (auto in-compliance check + notifications)"
                ]
            },
            {
                title: "CoE Starter Kit (Hands-on)",
                topics: [
                    "Admin Command Center",
                    "Maker Command Center",
                    "Managed Permissions",
                    "DLP Impact Analysis",
                    "App Catalog (strengths/weaknesses)"
                ]
            }
        ]
    },
    deliverables: {
        title: "Your Results (Deliverables)",
        subtitle: "You won't leave the workshop empty-handed. You'll take these directly into your daily work:",
        cards: [
            {
                title: "PowerShell Snippets & Policies",
                items: ["Disable self-service purchases/consent plans", "Add-on assignments", "'Pooling environment' for credits"]
            },
            {
                title: "Checklists & Templates",
                items: ["Housekeeping/compliance process", "Environment approval workflow", "DLP impact check template"]
            },
            {
                title: "CoE Assets",
                items: ["Pre-configured apps, flows & tables to continue working with directly"]
            }
        ]
    },
    audience: {
        title: "Who is this workshop for?",
        items: [
            "IT/Platform Admins who want to build an enterprise-ready governance.",
            "Citizen-Dev Leads who need to securely scale their app maker community.",
            "Security & Governance managers who want to understand and manage Power Platform risks."
        ]
    },
    format: {
        title: "Format & Schedule",
        text: "The workshop consists of <strong>live sessions with intensive practical walkthroughs</strong>. We work directly in the Admin Center, Purview, and with the CoE Starter Kit. You will receive <strong>concrete scripts, reports, and templates</strong> that you can use directly in your company. All workshops are 100% online, offering you maximum flexibility without travel costs.",
        note: "<strong>Important:</strong> All sessions are recorded and will be available to you afterward, in case you cannot attend live."
    },
    faq: {
        title: "Frequently Asked Questions (FAQ)",
        items: [
            {
                question: "Is the workshop held on-site?",
                answer: "No, all our workshops are 100% remote. You can participate comfortably from home or the office and save on all travel costs and time. All sessions are also recorded, giving you maximum flexibility."
            },
            {
                question: "Who can create environments?",
                answer: "In our framework: only defined admins. We show you how to establish a process that prevents uncontrolled growth and unnecessary storage consumption from the start."
            },
            {
                question: "How do I prevent trial workarounds?",
                answer: "By specifically disabling consent plans and self-service purchases. In our model, licenses and credits are assigned centrally and on-demand by admins."
            },
            {
                question: "How do I keep API costs under control?",
                answer: "We show you which limits and reports you really need to check, how to structure flows for cost optimization, and how to set up automated alerts via audit logs before it gets expensive."
            }
        ]
    },
    finalCta: {
        title: "Ready for the next step?",
        subtitle: "Join the waiting list to be notified when the next dates are announced."
    }
  },
  powerAppsDetail: {
    meta: {
      title: 'Power Apps Pro Course | 4-Week Certification DACH',
      description: 'Power Apps training: 4-week course on Canvas Apps, Model-Driven Apps, Dataverse and UX design. By Microsoft MVPs. Book now for DACH region.'
    },
    nav: "Become a Power Apps Pro in 4 Weeks",
    title: "Become a Power Apps Pro in 4 Weeks",
    heroList: [
      "Develop high-performance Canvas and Model-Driven Apps",
      "Master delegation, collections and complex formulas",
      "Dataverse expertise and professional UX design"
    ],
    cta: "Join Waiting List",
    curriculum: {
        title: "What You'll Learn – Weekly Plan",
        subtitle: "A structured 4-week plan that takes you from app basics through Dataverse and performance to professional UX/UI design.",
        weeks: [
            {
                title: "Canvas Apps Fundamentals",
                topics: [
                    "App architecture and best practices",
                    "Using collections vs. variables correctly",
                    "Understanding and utilizing delegation",
                    "Formulas: Filter, LookUp, ForAll"
                ]
            },
            {
                title: "Dataverse Deep-Dive",
                topics: [
                    "Tables, relationships and business logic",
                    "Calculated fields and rollups",
                    "Security roles and column security",
                    "Dataverse for Teams vs. Premium"
                ]
            },
            {
                title: "Model-Driven Apps",
                topics: [
                    "When Model-Driven instead of Canvas?",
                    "Forms, views and business process flows",
                    "JavaScript and PCF controls",
                    "Modern controls"
                ]
            },
            {
                title: "Performance & UX",
                topics: [
                    "Performance optimization (OnStart tricks)",
                    "Responsive design for mobile/desktop",
                    "Component libraries",
                    "Accessibility"
                ]
            }
        ]
    },
    deliverables: {
        title: "Your Results (Deliverables)",
        subtitle: "You won't leave the workshop empty-handed. You'll take these directly into your daily work:",
        cards: [
            {
                title: "App Templates & Snippets",
                items: ["Starter template with best practices", "Formula collection for common scenarios", "Component Library"]
            },
            {
                title: "Checklists & Guidelines",
                items: ["Performance checklist", "UX/UI design guide", "Dataverse schema template"]
            },
            {
                title: "Hands-on Projects",
                items: ["3 complete sample apps to continue developing"]
            }
        ]
    },
    audience: {
        title: "Who is this workshop for?",
        items: [
            "Citizen developers who want to take their apps to a professional level",
            "IT developers who want to learn low-code approaches for enterprise applications",
            "Power Platform makers who want to implement complex business scenarios"
        ]
    },
    format: {
        title: "Format & Schedule",
        text: "The workshop consists of <strong>live sessions with intensive practical exercises</strong>. We develop apps together, optimize performance and work with Dataverse. All workshops are 100% online, offering you maximum flexibility without travel costs.",
        note: "<strong>Important:</strong> All sessions are recorded and will be available to you afterward, in case you cannot attend live."
    },
    faq: {
        title: "Frequently Asked Questions (FAQ)",
        items: [
            {
                question: "Do I need programming skills?",
                answer: "No, but basic understanding of logic and formulas is helpful. We explain all concepts from scratch but quickly move to advanced topics."
            },
            {
                question: "Canvas or Model-Driven - which is better?",
                answer: "It depends on the use case. We show you both approaches and when which makes sense. Often a combination is the best solution."
            },
            {
                question: "What about desktop applications?",
                answer: "Power Apps focuses on web and mobile. For desktop scenarios we show you alternatives or hybrid approaches with PWAs."
            },
            {
                question: "How do I scale my apps?",
                answer: "We cover performance optimization, delegation and caching strategies for apps with thousands of records in detail."
            }
        ]
    },
    finalCta: {
        title: "Ready to become a Power Apps Pro?",
        subtitle: "Join the waiting list to be notified when the next dates are announced."
    }
  },
  powerAutomateDetail: {
    meta: {
      title: 'Power Automate Pro Course | 4-Week Certification DACH',
      description: 'Power Automate training: 4-week course on Cloud Flows, Desktop Flows, Error Handling and API integration. By Microsoft MVPs. Book now for DACH region.'
    },
    nav: "Become a Power Automate Pro in 4 Weeks",
    title: "Become a Power Automate Pro in 4 Weeks",
    heroList: [
      "Master complex automations and error handling",
      "Learn API integrations and custom connectors",
      "Desktop Flows and Cloud Flows at enterprise level"
    ],
    cta: "Join Waiting List",
    curriculum: {
        title: "What You'll Learn – Weekly Plan",
        subtitle: "A structured 4-week plan that takes you from flow basics through error handling and APIs to enterprise automations.",
        weeks: [
            {
                title: "Flow Fundamentals & Patterns",
                topics: [
                    "Trigger types and conditions",
                    "Loops and parallel branches",
                    "Variables, arrays and Apply to Each",
                    "Expressions and formulas"
                ]
            },
            {
                title: "Error Handling & Monitoring",
                topics: [
                    "Try-Catch pattern with scopes",
                    "Retry policies and timeout strategies",
                    "Logging and custom tracking",
                    "Run-After configuration"
                ]
            },
            {
                title: "APIs & Custom Connectors",
                topics: [
                    "HTTP requests and authentication",
                    "JSON parsing and schema",
                    "Creating custom connectors",
                    "OpenAPI specifications"
                ]
            },
            {
                title: "Desktop Flows & Enterprise",
                topics: [
                    "Power Automate Desktop basics",
                    "Attended vs. Unattended bots",
                    "Cloud-Desktop hybrid scenarios",
                    "Solution-aware flows and ALM"
                ]
            }
        ]
    },
    deliverables: {
        title: "Your Results (Deliverables)",
        subtitle: "You won't leave the workshop empty-handed. You'll take these directly into your daily work:",
        cards: [
            {
                title: "Flow Templates & Snippets",
                items: ["Error handling framework", "API integration examples", "Logging template"]
            },
            {
                title: "Checklists & Guidelines",
                items: ["Performance best practices", "Security checklist", "Testing strategy"]
            },
            {
                title: "Hands-on Projects",
                items: ["3 enterprise flow examples to continue developing"]
            }
        ]
    },
    audience: {
        title: "Who is this workshop for?",
        items: [
            "Power users who want to professionalize their automations",
            "IT professionals who want to learn RPA and workflow automation",
            "Developers looking for low-code integration into enterprise systems"
        ]
    },
    format: {
        title: "Format & Schedule",
        text: "The workshop consists of <strong>live sessions with intensive practical exercises</strong>. We develop flows together, debug errors and integrate APIs. All workshops are 100% online, offering you maximum flexibility without travel costs.",
        note: "<strong>Important:</strong> All sessions are recorded and will be available to you afterward, in case you cannot attend live."
    },
    faq: {
        title: "Frequently Asked Questions (FAQ)",
        items: [
            {
                question: "What's the difference to Logic Apps?",
                answer: "Logic Apps is Azure-based and intended for developers. Power Automate is citizen-developer-friendly and deeply integrated into Microsoft 365. We show both approaches."
            },
            {
                question: "How do I handle large data volumes?",
                answer: "We cover pagination, batching and performance optimization for flows with millions of records in detail."
            },
            {
                question: "What does Power Automate cost?",
                answer: "We explain the licensing model (Per User, Per Flow) and show you how to optimize costs, e.g. through flow consolidation."
            },
            {
                question: "Desktop Flows - do I need that?",
                answer: "If you want to automate legacy systems without APIs: yes. We show you pros and cons and when it makes sense."
            }
        ]
    },
    finalCta: {
        title: "Ready to become a Power Automate Pro?",
        subtitle: "Join the waiting list to be notified when the next dates are announced."
    }
  },
  consulting: {
    meta: {
      title: 'Independent Power Platform Consulting | ThePowerAddicts',
      description: 'Get objective MVP expertise for Power Platform Audits, Project Second Opinions, or Governance Checks. Independent and practice-oriented.'
    },
    hero: {
      title: "Independent Power Platform Consulting",
      subtitle: "Get objective expertise from Microsoft MVPs for your most complex challenges—without vendor lock-in."
    },
    services: [
      {
        title: "Power Platform Audit",
        duration: "3-5 days",
        description: "In-depth analysis of your entire Power Platform environment. We identify risks, performance bottlenecks, and untapped potential.",
        deliverables: ["Comprehensive Audit Report", "Concrete Action Plan", "Executive Management Presentation"]
      },
      {
        title: "Project Second Opinion",
        duration: "1-2 days",
        description: "Independent evaluation of an existing or planned Power Platform project. We validate architecture, solution design, and budget.",
        deliverables: ["Validation Document", "Risk Analysis", "Optimization Suggestions"]
      },
      {
        title: "Governance Check",
        duration: "2-3 days",
        description: "Review and optimization of your governance framework. We ensure your platform is secure, compliant, and scalable.",
        deliverables: ["Governance Scorecard", "DLP Policy Optimization", "CoE Strategy Recommendation"]
      }
    ],
    deliverablesTitle: "Deliverables:",
    process: {
      title: "Our Consulting Process",
      steps: [
        { title: "Free Initial Consultation", description: "We understand your challenge and define the scope." },
        { title: "Analysis & Execution", description: "We conduct the agreed-upon analysis (remote or on-site)." },
        { title: "Results Presentation", description: "You receive actionable results and a clear roadmap." }
      ]
    },
    cta: {
      title: "Ready for clarity in your project?",
      subtitle: "Contact us for a no-obligation initial consultation and find out how we can help you maximize your Power Platform investment.",
      button: "Request Consulting"
    }
  },
  success: {
    meta: {
      title: 'Success Stories of Our Graduates | ThePowerAddicts',
      description: 'See the success of our workshop participants: 23% average salary increase, 89% promotion rate, and a huge ROI.'
    },
    hero: {
      title: "Over 300 Successful Career Leaps",
      subtitle: "Read how our graduates have transformed their careers, increased their salaries, and become sought-after experts in the Power Platform community."
    },
    metrics: {
      title: "Success in Numbers",
      subtitle: "Based on surveys 6 & 12 months after workshop completion (participation rate: 89%)",
      items: [
        { value: "23%", label: "Avg. Salary Increase", description: "Based on the career leap from beginner to professional with 1-2 years of experience." },
        { value: "89%", label: "Promotion", description: "Receive a promotion or a new, better position." },
        { value: "2,847%", label: "Avg. ROI", description: "Average return on investment after 12 months." }
      ]
    },
    potential: {
        title: "The Salary Potential is Enormous",
        text: "A six-figure annual salary is not the exception but the rule for trained Power Platform administrators. Of course, it depends on the industry and company, but the expertise is a <span class=\"font-bold text-brand-gold\">huge career booster</span>."
    },
    testimonialsTitle: "What Our Graduates Say"
  },
  contact: {
    meta: {
      title: 'Contact | ThePowerAddicts',
      description: 'Contact us for questions about Power Platform workshops, training, or consulting. We are here to help.'
    },
    hero: {
      title: "Contact Us",
      subtitle: "Do you have questions about our workshops or consulting services? We're here to help."
    },
    form: {
      title: "Send us a message",
      name: "Your Name *",
      email: "Your Email *",
      subject: "Subject *",
      subjects: ["General Inquiry", "Question about a Workshop", "Consulting Request", "Press Inquiry"],
      message: "Your Message *",
      submit: "Send Message"
    },
    info: [
      { title: "General Inquiries", description: "For general questions about ThePowerAddicts.", email: "info@thepoweraddicts.com" },
      { title: "Workshop Support", description: "Questions about bookings, content, or dates.", email: "workshops@thepoweraddicts.com" },
      { title: "Consulting Inquiries", description: "For a no-obligation initial consultation about our services.", email: "consulting@thepoweraddicts.com" }
    ],
    alert: "Thank you for your message! We will get back to you shortly."
  },
  partner: {
    meta: {
      title: 'Become a Partner | ThePowerAddicts Partner Program',
      description: 'Recommend our Power Platform workshops and earn a 15% lifetime commission. Become a ThePowerAddicts partner now.'
    },
    hero: {
        title: "Become a ThePowerAddicts Partner",
        subtitle: "Recommend our highly-rated workshops and receive a lifetime commission of <span class=\"font-bold text-brand-gold font-bold\">15% on all revenue</span> generated by your referred customers."
    },
    process: {
        title: "How It Works",
        steps: [
            { title: "Sign Up", description: "Fill out the partner form. We will review your application." },
            { title: "Share", description: "You will receive a personal referral link and marketing materials." },
            { title: "Earn", description: "Receive a 15% lifetime commission on every sale." }
        ]
    },
    benefits: {
        title: "Your Benefits as a Partner",
        items: [
            { title: "15% Lifetime Commission", description: "You don't just earn once, but on every future purchase from your referred customer." },
            { title: "High-Converting Products", description: "Benefit from the excellent reputation of Microsoft MVPs and a 97% completion rate." },
            { title: "Easy Tracking", description: "A fair and transparent dashboard to track your clicks, sign-ups, and commissions." },
            { title: "Marketing Materials", description: "We provide you with professional banners, texts, and templates." }
        ]
    },
    form: {
        title: "Become a Partner Now",
        subtitle: "Fill out the form to apply for our partner program.",
        submit: "Submit Partner Application",
        alert: "Thank you for your application! We will review it and get back to you shortly."
    }
  },
  legal: {
    meta: {
      title: 'Legal | Imprint, Privacy & Terms | ThePowerAddicts',
      description: 'Legal information of ThePowerAddicts, including imprint, privacy policy, and terms and conditions.'
    },
    hero: {
      title: 'Legal Information'
    },
    imprint: {
      title: 'Imprint',
      content: [
        'ThePowerAddicts.com',
        'Sole proprietorship of Marcel Lehmann',
        'Im Feldacher 16',
        '8320 Fehraltorf',
        'Switzerland'
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        <p><strong>Last Updated: October 2025</strong></p>
        <h4>1. General Information and Contact Details</h4>
        <p>This privacy policy informs you about the nature, scope, and purpose of the processing of personal data on our website www.thepoweraddicts.com and when using our services. We comply with the Swiss Federal Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR) for customers in the EU.</p>
        <p><strong>Data Controller:</strong><br>ThePowerAddicts.com, Marcel Lehmann, Im Feldacher 16, 8320 Fehraltorf, Switzerland</p>
        <p><strong>For data protection inquiries:</strong> info@thepoweraddicts.com</p>
        
        <h4>2. Data Collection on Our Website</h4>
        <p><strong>Informational Use of the Website:</strong> When you use our website for informational purposes only, we only collect the data that your browser automatically transmits to our server. This includes: IP address, date and time of the request, time zone difference to Greenwich Mean Time (GMT), content of the request, access status/HTTP status code, amount of data transferred, website from which the request comes, browser, operating system and its interface, language and version of the browser software.</p>
        <p><strong>Contact Forms (Waiting List, Newsletter, etc.) and Email:</strong> When you contact us via forms (e.g., for the waiting list or newsletter) or by email, your details, including contact information, are stored by us to process the request and for follow-up questions. For users outside the German-speaking area, we use a standard opt-in procedure for consent.</p>
        
        <h4>3. Workshop Registrations and Consulting Services</h4>
        <p>For our <strong>Power Platform Workshops</strong> and <strong>consulting services</strong>, we collect the following data:</p>
        <ul>
          <li>Name, first name, company</li>
          <li>Email address and phone number</li>  
          <li>Billing address</li>
          <li>Professional background (for workshop preparation)</li>
          <li>Communication related to the service provision</li>
        </ul>
        <p><strong>Legal Basis:</strong> Performance of a contract (Art. 6(1)(b) GDPR / Art. 31(2)(a) FADP)</p>
        
        <h4>4. Cookies and Website Analysis</h4>
        <p>Our website uses essential cookies for its functionality. For detailed information, please see our Cookie Policy. We do not use third-party tracking tools without your explicit consent.</p>
        
        <h4>5. Your Rights</h4>
        <p>You have the following rights regarding your personal data:</p>
        <ul>
          <li>Right to access your stored data</li>
          <li>Right to rectification of incorrect data</li>
          <li>Right to erasure of your data</li>
          <li>Right to restriction of processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
        
        <h4>6. Data Security</h4>
        <p>We use appropriate technical and organizational security measures to protect your data against accidental or intentional manipulation, loss, destruction, or unauthorized access.</p>
        
        <h4>7. Changes to the Privacy Policy</h4>
        <p>We reserve the right to adapt this privacy policy to always comply with current legal requirements.</p>
      `
    },
    terms: {
      title: 'Terms & Conditions',
      content: `
        <p><strong>Last Updated: October 2025</strong></p>
        <h4>§ 1 Scope</h4>
        <p>These General Terms and Conditions apply to all services provided by ThePowerAddicts.com, Marcel Lehmann, based in Fehraltorf, Switzerland (hereinafter "ThePowerAddicts.com" or "we") to customers in the DACH region.</p>
        <p>Our GTCs apply exclusively. Deviating or conflicting terms and conditions of the customer will not be recognized unless we have expressly agreed to their validity in writing.</p>
        
        <h4>§ 2 Subject of Performance</h4>
        <p>ThePowerAddicts.com offers the following services:</p>
        <ol>
          <li><strong>Power Platform Workshops:</strong>
            <ul>
              <li>Become a Power Platform Admin in 4 Weeks</li>
              <li>Become a Power Automate Pro in 4 Weeks</li>  
              <li>Become a Power Apps Pro in 4 Weeks</li>
            </ul>
          </li>
          <li><strong>Digitalization Consulting and Implementation</strong></li>
        </ol>
        
        <h4>§ 3 Contract Conclusion and Prices</h4>
        <p><strong>Workshops:</strong> Registration for workshops is done via our website. The contract is concluded upon our registration confirmation.</p>
        <p><strong>Consulting Services:</strong> Offers are valid for 30 days. The contract is concluded upon written order confirmation.</p>
        <p><strong>Prices:</strong> The prices valid at the time of the order according to our current price list shall apply. All prices are exclusive of statutory value-added tax.</p>
        
        <h4>§ 4 Payment Terms</h4>
        <p><strong>Workshops:</strong> Payment is due 14 days before the workshop begins.</p>
        <p><strong>Payment Period:</strong> 30 days net after invoicing.</p>
        
        <h4>§ 5 Right of Withdrawal</h4>
        <p>Consumers have a 14-day right of withdrawal from the conclusion of the contract. For workshops, the right of withdrawal expires if the workshop has already begun and you have expressly consented to the performance.</p>
        
        <h4>§ 6 Performance and Dates</h4>
        <p><strong>Workshops:</strong> Take place on the announced dates. Postponements by ThePowerAddicts.com will be communicated at least 14 days in advance.</p>
        
        <h4>§ 7 Customer's Duty to Cooperate</h4>
        <p>The customer shall provide all necessary information, access, and personnel in a timely manner. In case of delays due to a lack of cooperation, the customer shall bear the additional costs.</p>
        
        <h4>§ 8 Intellectual Property and Confidentiality</h4>
        <p>All solutions developed by ThePowerAddicts.com remain the property of ThePowerAddicts.com until full payment has been received. Upon full payment, the customer receives the agreed rights of use.</p>
        <p>Both parties undertake to maintain confidentiality regarding all business secrets that become known in the course of the cooperation.</p>
        
        <h4>§ 9 Liability and Warranty</h4>
        <p>ThePowerAddicts.com warrants the contractual performance of the agreed services. Liability is limited to intent and gross negligence, except for damages resulting from injury to life, body, or health.</p>
        <p><strong>For Workshops:</strong> The scope and content correspond to the respective workshop description. Individual learning success cannot be guaranteed.</p>
        
        <h4>§ 10 Termination</h4>
        <p><strong>Workshops:</strong> No cancellation after the registration deadline, except in case of withdrawal.</p>
        
        <h4>§ 11 Final Provisions</h4>
        <p>Swiss law shall apply. The place of jurisdiction is Zurich, Switzerland. Should individual provisions be ineffective, the validity of the remaining GTCs shall remain unaffected.</p>
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
            "name": "Become a Power Platform Admin in 4 Weeks",
            "description": "Structured 4-week intensive program to become a certified admin. From environment setup to the Center of Excellence - all hands-on.",
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
            "name": "Become a Power Automate Pro in 4 Weeks",
            "description": "A deep-dive into advanced Power Automate concepts, from error handling to API integration.",
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
            "name": "Become a Power Apps Pro in 4 Weeks",
            "description": "Learn to build performant and scalable Canvas and Model-Driven apps with a focus on premium UX.",
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
        "name": "Become a Power Platform Admin in 4 Weeks",
        "description": "A structured 4-week plan that guides you step-by-step from setup, through governance and monitoring, to the CoE Starter Kit. 100% practical, 0% theory.",
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
            "name": "Is the workshop held on-site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, all our workshops are 100% remote. You can participate comfortably from home or the office and save on all travel costs and time. All sessions are also recorded, giving you maximum flexibility."
            }
          },
          {
            "@type": "Question",
            "name": "Who can create environments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In our framework: only defined admins. We show you how to establish a process that prevents uncontrolled growth and unnecessary storage consumption from the start."
            }
          },
          {
            "@type": "Question",
            "name": "How do I prevent trial workarounds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By specifically disabling consent plans and self-service purchases. In our model, licenses and credits are assigned centrally and on-demand by admins."
            }
          },
          {
            "@type": "Question",
            "name": "How do I keep API costs under control?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We show you which limits and reports you really need to check, how to structure flows for cost optimization, and how to set up automated alerts via audit logs before it gets expensive."
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
          "name": "Become a Power Platform Admin in 4 Weeks"
        }]
    },
    services: [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Power Platform Audit",
            "description": "In-depth analysis of your entire Power Platform environment. We identify risks, performance bottlenecks, and untapped potential.",
            "provider": {
                "@type": "Organization",
                "name": "ThePowerAddicts"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Project Second Opinion",
            "description": "Independent evaluation of an existing or planned Power Platform project. We validate architecture, solution design, and budget.",
            "provider": {
                "@type": "Organization",
                "name": "ThePowerAddicts"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Governance Check",
            "description": "Review and optimization of your governance framework. We ensure your platform is secure, compliant, and scalable.",
            "provider": {
                "@type": "Organization",
                "name": "ThePowerAddicts"
            }
        }
    ]
  }
};