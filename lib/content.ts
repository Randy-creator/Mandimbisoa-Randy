export type Locale = "fr" | "en";

export const socials = {
  github: "https://github.com/Randy-creator",
  linkedin: "https://www.linkedin.com/in/randy-mandimbisoa-11657b29a/",
} as const;

export const profile = {
  firstName: "Mandimbisoa",
  lastName: "Randy",
  fullName: "Hery Ny Aina Mandimbisoa Randy",
  initials: "MR",
  email: "randyherynyaina187@gmail.com",
  phone: "+261 32 43 492 30",
  phoneHref: "tel:+261324349230",
  city: "Antananarivo",
  country: "Madagascar",
  location: "Antananarivo, Madagascar",
  portrait: "/images/portrait.png",
  roles: ["Full-Stack", "Back-End", "Dev/Sec Ops", "Cloud"],
  cv: {
    href: "/cv.pdf",
    filename: "CV-Mandimbisoa-Randy.pdf",
  },

  contactTo: "randyherynyaina187@gmail.com",
} as const;

export const marquee = [
  "Java",
  "Python",
  "JavaScript",
  "PHP",
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "Laravel",
  "Vue.js",
  "Quarkus",
  "Express",
  "Docker",
  "AWS",
  "Airflow",
  "Firebase",
  "Git",
  "Linux",
] as const;

type Copy = {
  meta: { title: string; description: string };
  nav: { links: { id: string; label: string }[]; cta: string; menu: string; close: string };
  availability: string;
  hero: {
    eyebrow: string;

    title: string;

    role: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    photoAlt: string;

    badge: string;

    quote: string;

    quoteBy: string;

    socialsTitle: string;
    stats: { value: string; label: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    summary: string;
    roles: string[];
    groups: { title: string; items: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;

    more: string;
    present: string;
    items: {
      role: string;
      org: string;
      location: string;
      period: string;
      badge?: string;
      points: string[];
      tags: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    prev: string;
    next: string;
    goTo: string;
    counter: string;

    preview: string;
    items: {
      title: string;
      context: string;
      description: string;
      tags: string[];
      metric?: { value: string; label: string };

      highlights: string[];
    }[];
  };
  cv: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    meta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialsTitle: string;
    note: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
      openMail: string;
    };
  };
  education: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { degree: string; school: string; period: string; detail: string }[];
  };
  footer: {
    rights: string;
    builtWith: string;
    backToTop: string;
    localTime: string;
    quickLinks: string;
  };
};

export const copy: Record<Locale, Copy> = {
  fr: {
    meta: {
      title: "Mandimbisoa Randy — Développeur Full-Stack & Dev/Sec Ops",
      description:
        "Portfolio de Mandimbisoa Randy, développeur full-stack basé à Antananarivo, Madagascar. Spécialisé en Java, Python, React, Next.js, Laravel, Quarkus et cloud AWS.",
    },
    nav: {
      links: [
        { id: "skills", label: "Compétences" },
        { id: "experience", label: "Expérience" },
        { id: "projects", label: "Projets" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Me contacter",
      menu: "Ouvrir le menu",
      close: "Fermer le menu",
    },
    availability: "Disponible pour de nouvelles opportunités",
    hero: {
      eyebrow: "Bonjour",
      title: "Je suis",
      role: "Développeur full-stack & Dev/Sec Ops · Antananarivo, Madagascar",
      quote:
        "Curieux de nature, j'aime comprendre un système avant de le toucher — puis livrer quelque chose de propre, vite et qui tient dans la durée.",
      quoteBy: "Mandimbisoa Randy",
      socialsTitle: "Me suivre",
      lead:
        "Développeur full-stack, passionné par la conception d'applications web et mobiles performantes. Spécialisé en architectures modernes, je conçois des solutions fluides, robustes et évolutives. Toujours en veille technologique, j'apporte une réelle valeur ajoutée à chaque projet avec rigueur, autonomie et esprit d'innovation.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Me contacter",
      scroll: "Défiler",
      photoAlt: "Portrait de Mandimbisoa Randy",
      badge: "Parlons-en",
      stats: [
        { value: "> 8", label: "Projets menés" },
        { value: "> 3", label: "Compétition" },
        { value: "10+", label: "Stack cloud & conteneur" },
        { value: "C1", label: "Anglais & français" },
      ],
    },
    skills: {
      eyebrow: "Compétences",
      title: "La boîte à outils",
      subtitle:
        "Des langages typingés au cloud, en passant par les frameworks web et les outils du quotidien.",
      summary: "Ce que je fais au quotidien",
      roles: [
        "Applications web full-stack",
        "APIs back-end & cloud",
        "Refonte de legacy",
        "Data & pipelines",
      ],
      groups: [
        {
          title: "Langages",
          items: ["Java", "Python", "TypeScript", "JavaScript", "PHP", "HTML", "CSS"],
        },
        {
          title: "Frameworks",
          items: ["React", "Next.js", "NestJS", "Spring Boot", "Laravel", "Quarkus", "Express"],
        },
        { title: "Cloud", items: ["Docker", "AWS S3", "AWS EC2", "AWS Lambda"] },
        {
          title: "Outils & IDE",
          items: [
            "VS Code",
            "IntelliJ",
            "Cursor",
            "Git",
            "Google Workspace",
            "Power BI",
            "Looker Studio",
            "Canva",
          ],
        },
        { title: "Systèmes", items: ["Linux", "Windows"] },
      ],
    },
    experience: {
      eyebrow: "Expérience",
      title: "Parcours professionnel",
      subtitle:
        "Stages, missions freelance et projets personnels — du refonte d'application d'État à la conception d'APIs métier.",
      more: "Réalisations antérieures",
      present: "Aujourd'hui",
      items: [
        {
          role: "Stage — Développement Full-Stack",
          org: "Ministère de la Finance",
          location: "Antananarivo",
          period: "Mars 2026 → Aujourd'hui",
          points: [
            "Refonte d'une application legacy de plus de 10 ans avec Laravel, Inertia et VueJS",
            "Code modulaire et maintenable, UI/UX repensée",
            "Suivi et traçabilité des bugs",
          ],
          tags: ["Laravel", "Inertia", "VueJS"],
        },
        {
          role: "Freelance — Développement Back-end",
          org: "TELIMANI MALI",
          location: "Remote",
          period: "Mars 2026 → Juin 2026",
          points: [
            "API backend d'une application de VTC (Java, Quarkus)",
            "Gestion des courses, des rôles et des règles métier",
            "Authentification Firebase et cloud",
          ],
          tags: ["Java", "Quarkus", "Firebase"],
        },
        {
          role: "Comparaison climatique entre villes",
          org: "Projet personnel",
          location: "Antananarivo",
          period: "Janvier 2026 → Avril 2026",
          points: [
            "Pipeline météo automatisé en Python avec Airflow",
            "Analyse climatique comparative entre villes",
            "Dashboard déployé sur Vercel",
          ],
          tags: ["Python", "Airflow", "Vercel"],
        },
        {
          role: "Cloudflight Coding Contest — 3ᵉ place",
          org: "Compétition algorithmique",
          location: "Antananarivo",
          period: "Octobre 2024",
          badge: "3ᵉ",
          points: [
            "Compétition de programmation algorithmique",
            "Résolution de problèmes complexes en temps limité",
          ],
          tags: ["Algorithmique", "Problem solving"],
        },
      ],
    },
    projects: {
      eyebrow: "Projets",
      title: "Carnet de projets",
      subtitle:
        "Quatre réalisations, du legacy d'État au pipeline de données — faites défiler pour feuilleter.",
      prev: "Projet précédent",
      next: "Projet suivant",
      goTo: "Aller au projet",
      counter: "sur",
      preview: "Aperçu du projet",
      items: [
        {
          title: "Refonte d'une application legacy",
          context: "Ministère de la Finance",
          description:
            "Migration progressive d'une application de plus de 10 ans vers une base modulaire Laravel + Inertia + VueJS, avec une UI/UX entièrement repensée et une traçabilité des bugs.",
          tags: ["Laravel", "Inertia", "VueJS"],
          metric: { value: "10+ ans", label: "d'ancienneté de l'application" },
          highlights: [
            "Refonte d'une application en production depuis plus de 10 ans, sans interruption de service",
            "Découpage en modules maintenables pour freiner la dette technique",

            "Traçabilité complète des bugs : chaque anomalie est suivie jusqu'à sa résolution",
          ],
        },
        {
          title: "API backend pour une app de VTC",
          context: "TELIMANI MALI — Freelance",
          description:
            "Conception d'une API Java/Quarkus couvrant la gestion des courses, les rôles et les règles métier, avec authentification Firebase et intégration cloud.",
          tags: ["Java", "Quarkus", "Firebase"],
          highlights: [
            "Modèle métier complet : courses, rôles et permissions",
            "Authentification Firebase branchée sur l'écosystème cloud du client",
            "Mission menée entièrement à distance",
          ],
        },
        {
          title: "Pipeline météo & climat",
          context: "Projet personnel",
          description:
            "Pipeline de données météo automatisé sous Airflow pour comparer le climat de plusieurs villes, exposé via un dashboard déployé sur Vercel.",
          tags: ["Python", "Airflow", "Vercel"],
          highlights: [
            "Orchestration Airflow pour un traitement reproductible des relevés",
            "Analyse comparative du climat entre plusieurs villes",
            "Dashboard en ligne déployé sur Vercel",
          ],
        },
        {
          title: "Cloudflight Coding Contest",
          context: "Compétition algorithmique",
          description:
            "Résolution de problèmes algorithmiques complexes en temps limité lors de la CCC, avec une 3ᵉ place au classement général.",
          tags: ["Algorithmique"],
          metric: { value: "3ᵉ", label: "place au classement" },
          highlights: [
            "Algorithmes et structures de données sous contrainte de temps",
            "3ᵉ place sur l'ensemble des participants",
          ],
        },
      ],
    },
    cv: {
      eyebrow: "Curriculum Vitae",
      title: "Télécharger mon CV",
      subtitle:
        "La version complète et à jour de mon parcours, en un clic — format PDF, prête à envoyer.",
      cta: "Télécharger le CV",
      meta: "PDF · Mis à jour récemment",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre projet",
      subtitle:
        "Une idée de produit, un refonte à faire, une mission back-end ? Écrivez-moi, je réponds rapidement.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      socialsTitle: "Réseaux",
      note: "Basé à Antananarivo, Madagascar — ouvert aux missions remote et sur site.",
      form: {
        name: "Votre nom",
        email: "Votre email",
        subject: "Sujet",
        message: "Votre message",
        submit: "Envoyer le message",
        sending: "Envoi…",
        success: "Message envoyé ! Je vous réponds rapidement.",
        error: "L'envoi a échoué. Réessayez ou écrivez-moi directement.",
        required: "Ce champ est requis.",
        invalidEmail: "Adresse email invalide.",
        openMail: "Ouvrir dans ma messagerie",
      },
    },
    education: {
      eyebrow: "Formation",
      title: "Parcours",
      subtitle: "Études et débuts professionnels, côte à côte.",
      items: [
        {
          degree: "Licence en Génie Informatique",
          school: "HEI — Haute École Informatique",
          period: "2023 → 2026",
          detail: "Génie logiciel, systèmes et réseaux.",
        },
        {
          degree: "Baccalauréat — Série D",
          school: "Lycée Privé ACEEM, Ankadivoto",
          period: "2021 → 2023",
          detail: "Sciences et mathématiques.",
        },
      ],
    },
    footer: {
      rights: "Tous droits réservés.",
      builtWith: "Conçu avec Next.js & Tailwind CSS",
      backToTop: "Retour en haut",
      localTime: "Heure locale",
      quickLinks: "Navigation",
    },
  },

  en: {
    meta: {
      title: "Mandimbisoa Randy — Full-Stack Developer & Dev/Sec Ops",
      description:
        "Portfolio of Mandimbisoa Randy, a full-stack developer based in Antananarivo, Madagascar. Working with Java, Python, React, Next.js, Laravel, Quarkus and AWS.",
    },
    nav: {
      links: [
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Get in touch",
      menu: "Open menu",
      close: "Close menu",
    },
    availability: "Available for new opportunities",
    hero: {
      eyebrow: "Hello",
      title: "I'm",
      role: "Full-Stack Developer & Dev/Sec Ops · Antananarivo, Madagascar",
      quote:
        "Curious by nature, I like understanding a system before I touch it — then shipping something clean, quickly, and built to last.",
      quoteBy: "Mandimbisoa Randy",
      socialsTitle: "Find me",
      lead:
        "Full-stack developer, passionate about designing high-performing web and mobile applications. Specialised in modern architectures, I build solutions that are fluid, robust and scalable. I keep a close eye on new technology, and bring real value to every project with rigour, autonomy and an inventive mindset.",
      ctaPrimary: "View my projects",
      ctaSecondary: "Get in touch",
      scroll: "Scroll",
      photoAlt: "Portrait of Mandimbisoa Randy",
      badge: "Let's talk",
      stats: [
        { value: "> 8", label: "Projects delivered" },
        { value: "> 3", label: "Competition" },
        { value: "10+", label: "Cloud & container stack" },
        { value: "C1", label: "English & French" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "The toolkit",
      subtitle:
        "From typed languages to the cloud, through web frameworks and everyday tooling.",
      summary: "What I actually build",
      roles: [
        "Full-stack web apps",
        "Back-end APIs & cloud",
        "Legacy refactors",
        "Data & pipelines",
      ],
      groups: [
        {
          title: "Languages",
          items: ["Java", "Python", "TypeScript", "JavaScript", "PHP", "HTML", "CSS"],
        },
        {
          title: "Frameworks",
          items: ["React", "Next.js", "NestJS", "Spring Boot", "Laravel", "Quarkus", "Express"],
        },
        { title: "Cloud", items: ["Docker", "AWS S3", "AWS EC2", "AWS Lambda"] },
        {
          title: "Tools & IDEs",
          items: [
            "VS Code",
            "IntelliJ",
            "Cursor",
            "Git",
            "Google Workspace",
            "Power BI",
            "Looker Studio",
            "Canva",
          ],
        },
        { title: "Operating systems", items: ["Linux", "Windows"] },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional journey",
      subtitle:
        "Internships, freelance missions and personal projects — from refactoring a government application to designing business APIs.",
      more: "Earlier work",
      present: "Present",
      items: [
        {
          role: "Internship — Full-Stack Development",
          org: "Ministry of Finance",
          location: "Antananarivo",
          period: "Mar 2026 → Present",
          points: [
            "Refactoring a 10+ year-old legacy application with Laravel, Inertia and VueJS",
            "Modular, maintainable codebase with a rethought UI/UX",
            "Bug tracking and traceability",
          ],
          tags: ["Laravel", "Inertia", "VueJS"],
        },
        {
          role: "Freelance — Back-end Development",
          org: "TELIMANI MALI",
          location: "Remote",
          period: "Mar 2026 → Jun 2026",
          points: [
            "Back-end API for a ride-hailing application (Java, Quarkus)",
            "Trip, role and business-rule management",
            "Firebase authentication and cloud integration",
          ],
          tags: ["Java", "Quarkus", "Firebase"],
        },
        {
          role: "Climate comparison between cities",
          org: "Personal project",
          location: "Antananarivo",
          period: "Jan 2026 → Apr 2026",
          points: [
            "Automated weather pipeline built with Python and Airflow",
            "Comparative climate analysis across cities",
            "Dashboard deployed on Vercel",
          ],
          tags: ["Python", "Airflow", "Vercel"],
        },
        {
          role: "Cloudflight Coding Contest — 3rd place",
          org: "Algorithmic competition",
          location: "Antananarivo",
          period: "Oct 2024",
          badge: "3rd",
          points: [
            "Algorithmic programming competition",
            "Solving complex problems under time pressure",
          ],
          tags: ["Algorithms", "Problem solving"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Project notebook",
      subtitle:
        "Four builds, from a government legacy stack to a data pipeline — swipe through to leaf through them.",
      prev: "Previous project",
      next: "Next project",
      goTo: "Go to project",
      counter: "of",
      preview: "Project preview",
      items: [
        {
          title: "Legacy application refactor",
          context: "Ministry of Finance",
          description:
            "Incremental migration of a 10+ year-old application to a modular Laravel + Inertia + VueJS base, with a fully rethought UI/UX and bug traceability.",
          tags: ["Laravel", "Inertia", "VueJS"],
          metric: { value: "10+ yrs", label: "of legacy code refactored" },
          highlights: [
            "Refactored a production application over a decade old, with no service interruption",
            "Split into maintainable modules to stop technical debt from piling up",
            "Full bug traceability: every issue tracked through to resolution",
          ],
        },
        {
          title: "Back-end API for a ride-hailing app",
          context: "TELIMANI MALI — Freelance",
          description:
            "Designed a Java/Quarkus API covering trips, roles and business rules, with Firebase authentication and cloud integration.",
          tags: ["Java", "Quarkus", "Firebase"],
          highlights: [
            "Complete business model: trips, roles and permissions",
            "Firebase authentication wired into the client's cloud setup",
            "Delivered fully remotely",
          ],
        },
        {
          title: "Weather & climate pipeline",
          context: "Personal project",
          description:
            "Automated weather data pipeline orchestrated with Airflow to compare the climate of several cities, surfaced through a dashboard deployed on Vercel.",
          tags: ["Python", "Airflow", "Vercel"],
          highlights: [
            "Airflow orchestration for reproducible data processing",
            "Comparative climate analysis across several cities",
            "Live dashboard deployed on Vercel",
          ],
        },
        {
          title: "Cloudflight Coding Contest",
          context: "Algorithmic competition",
          description:
            "Solved complex algorithmic problems under time pressure at the CCC, finishing 3rd overall.",
          tags: ["Algorithms"],
          metric: { value: "3rd", label: "place overall" },
          highlights: [
            "Algorithms and data structures under a time constraint",
            "3rd place out of all participants",
          ],
        },
      ],
    },
    cv: {
      eyebrow: "Curriculum Vitae",
      title: "Download my CV",
      subtitle:
        "The full, up-to-date version of my background in one click — PDF, ready to send.",
      cta: "Download the CV",
      meta: "PDF · Recently updated",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      subtitle:
        "A product idea, an application to refactor, a back-end mission? Get in touch — I reply fast.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      socialsTitle: "Elsewhere",
      note: "Based in Antananarivo, Madagascar — open to both remote and on-site work.",
      form: {
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Your message",
        submit: "Send message",
        sending: "Sending…",
        success: "Message sent! I'll get back to you soon.",
        error: "Sending failed. Please retry or email me directly.",
        required: "This field is required.",
        invalidEmail: "Invalid email address.",
        openMail: "Open in my mail app",
      },
    },
    education: {
      eyebrow: "Education",
      title: "Journey",
      subtitle: "Studies and early professional work, side by side.",
      items: [
        {
          degree: "BSc in Computer Engineering",
          school: "HEI — Haute École Informatique",
          period: "2023 → 2026",
          detail: "Software engineering, systems and networks.",
        },
        {
          degree: "High School Diploma — Science Stream",
          school: "Lycée Privé ACEEM, Ankadivoto",
          period: "2021 → 2023",
          detail: "Science and mathematics.",
        },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
      backToTop: "Back to top",
      localTime: "Local time",
      quickLinks: "Navigation",
    },
  },
};

export const sectionIds = {
  fr: {
    skills: "competences",
    experience: "experience",
    projects: "projets",
    contact: "contact",
  },
  en: {
    skills: "skills",
    experience: "experience",
    projects: "projects",
    contact: "contact",
  },
} as const;
