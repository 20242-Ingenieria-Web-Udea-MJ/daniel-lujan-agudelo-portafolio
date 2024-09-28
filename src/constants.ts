export const PROJECTS: Project[] = [
  {
    name: "Vault",
    type: "private",
    description: {
      en: "Password manager mobile app with biometric authentication.",
      es: "Aplicación móvil de gestión de contraseñas con autenticación biométrica.",
    },
    dateRange: {
      en: "January - May 2024",
      es: "Enero - Mayo 2024",
    },
    tags: {
      en: ["Mobile", "Cross-Platform", "Biometric Authentication"],
      es: ["Móvil", "Multiplataforma", "Autenticación biométrica"],
    },
    stack: ["TypeScript", "React", "Tailwind", "Capacitor", "Firebase"],
    previewSrc: "https://portfolio.cloudstorage.lujn.dev/previews/vault.mov",
  },
  {
    name: "PortIQ",
    type: "private",
    description: {
      en: "Automated and recurrent migration of public data on imports and exports in Colombia. Report generation and data visualization application.",
      es: "Migración automatizada y recurrente de datos públicos de importaciones y exportaciones en Colombia. Aplicación web de generación de reportes y visualización de datos",
    },
    dateRange: {
      en: "September - November 2023",
      es: "Septiembre - Noviembre 2023",
    },
    tags: {
      en: [
        "Automation",
        "Report generation",
        "Data visualization",
        "Cookie Authentication",
        "Role-based authorization",
      ],
      es: [
        "Automatización",
        "Generación de reportes",
        "Visualización de datos",
        "Autenticación por cookies",
        "Autorización basada en roles",
      ],
    },
    stack: [
      "TypeScript",
      "NextJS",
      "Tailwind",
      "Express",
      "PostgreSQL",
      "Redis",
      "Python",
    ],
    previewSrc: "https://portfolio.cloudstorage.lujn.dev/previews/portiq.mov",
  },
  {
    name: "Census Income",
    type: "educative",
    description: {
      en: "Implementation of machine learning models & neural networks to predict census income using the UCI Census Income dataset.",
      es: "Implementación de modelos de aprendizaje automático y redes neuronales para predecir ingresos usando el conjunto de datos UCI Census Income.",
    },
    dateRange: {
      en: "May 2024",
      es: "Mayo 2024",
    },
    tags: {
      en: ["Machine learning", "Neural networks", "Data science", "AI"],
      es: [
        "Aprendizaje automático",
        "Redes neuronales",
        "Ciencia de datos",
        "IA",
      ],
    },
    stack: ["Python", "Scikit-learn", "NumPy", "FastAPI"],
    moreInfoSrc: "https://github.com/daniel-lujan/income-prediction",
  },
  {
    name: "Vitriina",
    type: "private",
    description: {
      en: "Business-scoped platform for exposing catalogs of products.",
      es: "Plataforma dirigida a negocios para exponer catálogos de productos.",
    },
    dateRange: {
      en: "January - July 2023",
      es: "Enero - Julio 2023",
    },
    stack: [
      "React",
      "Flask",
      "Firebase",
      "Firebase Cloud Storage",
      "Firebase Cloud Functions",
      "Redis",
      "MercadoPago",
    ],
    tags: {
      en: [
        "Online payments",
        "File storage",
        "Role-based authorization",
        "Rate-limiting",
        "SMTP Email notification",
        "2FA",
        "Session & device management",
      ],
      es: [
        "Pagos en línea",
        "Almacenamiento de archivos",
        "Autorización basada en roles",
        "Rate-limiting",
        "Notificación SMTP",
        "2FA",
        "Gestión de sesiones y dispositivos",
      ],
    },
    previewSrc: "https://portfolio.cloudstorage.lujn.dev/previews/vitriina.mov",
  },
  {
    name: "Wavee",
    type: "educative",
    description: {
      en: "Song identification application using audio fingerprints and hashing techniques. Based on Shazam's public research paper.",
      es: "Aplicación de identificación de canciones usando huellas digitales de audio y técnicas de hashing. Basada en un artículo de investigación publicado por Shazam.",
    },
    dateRange: {
      en: "May 2023",
      es: "Mayo 2023",
    },
    stack: ["React", "Flask", "NumPy"],
    tags: {
      en: [
        "Audio processing",
        "Hashing",
        "Indexing",
        "Data science",
        "Research",
      ],
      es: [
        "Procesamiento de audio",
        "Hashing",
        "Indexación",
        "Ciencia de datos",
        "Investigación",
      ],
    },
    previewSrc: "https://portfolio.cloudstorage.lujn.dev/previews/wavee.mov",
    moreInfoSrc: "https://github.com/daniel-lujan/Wavee-Frontend",
  },
];

export const LOGOS: { [key: string]: string } = {
  TypeScript: "/typescript.svg",
  React: "/react.svg",
  NextJS: "/nextjs.svg",
  Tailwind: "/tailwind.svg",
  Capacitor: "/capacitor.svg",
  Firebase: "/firebase.svg",
  Express: "/express.svg",
  PostgreSQL: "/postgresql.svg",
  Redis: "/redis.svg",
  Python: "/python.svg",
  MongoDB: "/mongo.svg",
  Flask: "/flask.svg",
  "Firebase Cloud Storage": "/firebase-cloud-storage.png",
  "Firebase Cloud Functions": "/firebase-cloud-function.svg",
  MercadoPago: "/mercadopago.svg",
  JavaScript: "/javascript.svg",
  Java: "/java.svg",
  CSS: "/css.svg",
  HTML: "/html.svg",
  FastAPI: "/fastapi.svg",
  Astro: "/astro.svg",
  OracleDB: "/oracle.svg",
  NodeJS: "/nodejs.svg",
  Docker: "/docker.svg",
  Git: "/git.svg",
  Heroku: "/heroku.svg",
  Vercel: "/vercel.svg",
  Vite: "/vite.svg",
  GitHub: "/github.svg",
  "GitHub Actions": "/github-actions.svg",
  Prisma: "/prisma.svg",
  Postman: "/postman.svg",
  Insomnia: "/insomnia.svg",
  "Scikit-learn": "/scikitlearn.svg",
  NumPy: "/numpy.svg",
  Cloudflare: "/cloudflare.svg",
};

export const SKILLS: { [key in SkillCategories]: string[] } = {
  Languages: ["TypeScript", "Python", "JavaScript", "CSS", "HTML", "Java"],
  Frameworks: [
    "NextJS",
    "React",
    "Flask",
    "FastAPI",
    "Express",
    "Astro",
    "Tailwind",
  ],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "OracleDB"],
  Platforms: [
    "NodeJS",
    "Heroku",
    "Vercel",
    "Firebase",
    "Capacitor",
    "GitHub",
    "Cloudflare",
  ],
  Tools: [
    "Docker",
    "Git",
    "Vite",
    "GitHub Actions",
    "Prisma",
    "Postman",
    "Insomnia",
  ],
};

export const CONTACT_EMAIL = "daniellujanagudelo@gmail.com";

export const CV_SRC: { [key in SupportedLocale]: string } = {
  es: "https://portfolio.cloudstorage.lujn.dev/CV.pdf",
  en: "https://portfolio.cloudstorage.lujn.dev/CV-en.pdf",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/daniel-lujan",
  linkedin: "https://www.linkedin.com/in/daniel-lujan-agudelo",
};

export const CERTS = {
  githubFoundations:
    "https://www.credly.com/badges/8a27a381-b1e9-4ac5-9252-7f9e6677e664/public_url",
  sena: "https://portfolio.cloudstorage.lujn.dev/certificates%2Ftech_sena.pdf",
};
