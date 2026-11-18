import { profile } from "@/lib/content";

export const frProfile = {
  role: "Développeur fullstack & ingénieur logiciel",
  location: "Douala, Cameroun",
  availability: "Ouvert aux stages, missions et collaborations",
  summary:
    "Développeur fullstack et ingénieur logiciel basé à Douala. Je conçois des applications web, mobiles et des API robustes avec TypeScript, React, Next.js, C#/.NET et PostgreSQL.",
  email: profile.email,
  phone: profile.phone,
  phoneHref: profile.phoneHref,
  linkedin: profile.linkedin,
  github: profile.github,
  siteUrl: profile.siteUrl,
} as const;

export const frNavigation = [
  { id: "expertise", label: "Expertises", index: "01" },
  { id: "projets", label: "Projets", index: "02" },
  { id: "parcours", label: "Parcours", index: "03" },
  { id: "faq", label: "FAQ", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
] as const;

export type Expertise = {
  title: string;
  icon: "layers" | "server" | "terminal" | "compass" | "database" | "shield";
  description: string;
  points: string[];
};

export const expertises: Expertise[] = [
  {
    title: "Développement fullstack",
    icon: "layers",
    description:
      "Des interfaces claires et des API solides, du prototype à la mise en production.",
    points: [
      "React, Next.js, React Native, Tailwind CSS",
      "Node.js, Express, ASP.NET Core, FastAPI",
      "PostgreSQL, MongoDB, Prisma, EF Core",
    ],
  },
  {
    title: "DevOps & infrastructure",
    icon: "terminal",
    description:
      "Automatiser les livraisons, conteneuriser les services et garder la production observable.",
    points: [
      "Docker, Linux (Ubuntu, openEuler), VPS",
      "CI/CD avec GitHub Actions",
      "MQTT, Socket.IO, supervision et logs",
    ],
  },
  {
    title: "Ingénierie logicielle",
    icon: "compass",
    description:
      "Une architecture lisible, testée et documentée — pensée pour durer et être reprise par une équipe.",
    points: [
      "Architecture, UML, découpage en modules",
      "Tests, revue de code, documentation technique",
      "Accessibilité web et performance",
    ],
  },
];

export type FrProject = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  live?: string;
};

export const frProjects: FrProject[] = [
  {
    slug: "faucon",
    title: "Faucon",
    tag: "Télémétrie de flotte · en production",
    description:
      "Plateforme de suivi de flotte en temps réel : firmware ESP32-C3, pipeline MQTT et Socket.IO, tour de contrôle Next.js et application mobile Expo. Déployée et utilisée en conditions réelles.",
    stack: ["ESP32-C3", "MQTT", "Socket.IO", "Next.js", "Expo"],
    live: "https://faucon.169.58.69.36.sslip.io/",
  },
  {
    slug: "locatcam",
    title: "LocatCam",
    tag: "Plateforme de logement étudiant",
    description:
      "API ASP.NET Core avec EF Core, authentification JWT et conteneurisation Docker, accompagnée d'une application mobile pour trouver un logement à Douala.",
    stack: ["C#", "ASP.NET Core", "EF Core", "Docker", "Flutter"],
  },
  {
    slug: "nkaplingua",
    title: "NkapLingua",
    tag: "Accessibilité financière · SAFINUM 2026",
    description:
      "Extension navigateur qui rend les interfaces financières lisibles en fulfuldé, ewondo et douala, avec un mode strict qui protège les codes PIN, OTP et les soldes.",
    stack: ["Extensions", "TypeScript", "Python", "Accessibilité"],
  },
  {
    slug: "buyandsale",
    title: "BuyAndSale",
    tag: "E-commerce",
    description:
      "Plateforme de commerce en ligne pensée pour le marché camerounais : catalogue, panier, gestion des commandes et espace d'administration.",
    stack: ["MERN", "React", "Node.js", "MongoDB"],
  },
];

export const frTimeline = [
  {
    year: "2026",
    title: "Phase nationale — Huawei ICT Competition",
    detail:
      "Qualifié pour la phase nationale, parcours Computing : écosystème openEuler, openGauss et architecture Kunpeng.",
  },
  {
    year: "2026",
    title: "Faucon — plateforme de télémétrie en production",
    detail:
      "Conception du firmware, du pipeline temps réel et des interfaces web et mobiles de suivi de flotte.",
  },
  {
    year: "2025",
    title: "Stage en conception logicielle — Maisoft",
    detail:
      "Travail en équipe agile, gestion de projet avec Trello, Git/GitHub et rédaction d'un rapport technique complet.",
  },
  {
    year: "2022 — aujourd'hui",
    title: "Diplôme d'ingénieur en génie logiciel — ENSPD",
    detail:
      "École nationale supérieure polytechnique de Douala, niveau 5 (année finale). Major de promotion en génie logiciel 3, 2024–2025.",
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqPillar: FaqItem[] = [
  {
    question: "Qui est Calvin Klein Tsefack ?",
    answer:
      "Calvin Klein Tsefack est un développeur fullstack et ingénieur logiciel camerounais basé à Douala. Il est en dernière année de génie logiciel à l'École nationale supérieure polytechnique de Douala (ENSPD) et a été major de sa promotion en 2024–2025. Il conçoit des applications web, mobiles et des API, et travaille aussi sur l'infrastructure et le déploiement (DevOps).",
  },
  {
    question: "Quelles technologies maîtrise-t-il ?",
    answer:
      "TypeScript, JavaScript, React, Next.js, React Native, Node.js, Express, C# avec ASP.NET Core et EF Core, Python, Rust, PostgreSQL, MongoDB, Prisma, Docker, Linux et GitHub Actions. Il travaille également avec MQTT et Socket.IO pour les applications temps réel.",
  },
  {
    question: "Travaille-t-il avec des entreprises au Cameroun et à l'étranger ?",
    answer:
      "Oui. Il collabore avec des entreprises, des écoles et des équipes produit au Cameroun, et travaille à distance avec des équipes francophones et anglophones. Le fuseau horaire du Cameroun (GMT+1) facilite la collaboration avec l'Europe et l'Afrique de l'Ouest.",
  },
  {
    question: "Comment le contacter pour un projet ou un stage ?",
    answer:
      "Par e-mail à tsefackcalvinklein@gmail.com, par téléphone au +237 653 360 437, ou via LinkedIn. Le portfolio présente aussi une sélection de projets et un CV téléchargeable.",
  },
  {
    question: "Qu'est-ce que l'informatique au Cameroun aujourd'hui ?",
    answer:
      "L'informatique camerounaise se structure autour d'écoles d'ingénieurs comme l'ENSPD et l'ENSPY, de startups à Douala et Yaoundé, de projets publics de digitalisation et d'entreprises qui internalisent leurs équipes techniques. Les besoins portent surtout sur le développement web et mobile, les API, la data, la cybersécurité et l'exploitation d'infrastructures.",
  },
];

export const faqFullstack: FaqItem[] = [
  {
    question: "Qu'est-ce qu'un développeur fullstack ?",
    answer:
      "Un développeur fullstack intervient sur toute la chaîne d'une application : l'interface utilisateur (frontend), la logique serveur et les API (backend), la base de données et souvent le déploiement. Cela réduit les allers-retours entre équipes et donne une vision cohérente du produit.",
  },
  {
    question: "Pourquoi choisir un développeur fullstack au Cameroun ?",
    answer:
      "Un développeur basé au Cameroun offre un excellent rapport qualité-prix, travaille en français et en anglais, et partage le fuseau GMT+1 avec une grande partie de l'Europe et de l'Afrique. La proximité culturelle et la connaissance du marché local sont des atouts pour les produits destinés à l'Afrique centrale.",
  },
  {
    question: "Quels types de projets accepte-t-il ?",
    answer:
      "Des sites et applications web sur mesure, des API et backends, des applications mobiles React Native ou Flutter, des tableaux de bord temps réel, des refontes de performance et d'accessibilité, ainsi que la mise en production et l'automatisation des déploiements.",
  },
  {
    question: "Comment se déroule une collaboration ?",
    answer:
      "Elle commence par un échange sur les objectifs et le périmètre, suivi d'une proposition technique et d'un découpage en étapes livrables. Le suivi se fait avec Git/GitHub, des points réguliers et une démonstration à chaque jalon. Le code, la documentation et les accès restent la propriété du client.",
  },
  {
    question: "Peut-il travailler sur une base de code existante ?",
    answer:
      "Oui. Il reprend volontiers un projet existant : audit rapide, correction des points bloquants, ajout de tests, puis évolution progressive sans réécriture inutile. La priorité est de stabiliser avant d'ajouter de nouvelles fonctionnalités.",
  },
];

export const faqDevops: FaqItem[] = [
  {
    question: "Que fait un profil DevOps au Cameroun ?",
    answer:
      "Il relie le développement et l'exploitation : automatisation des tests et des déploiements (CI/CD), conteneurisation avec Docker, configuration de serveurs Linux ou de plateformes cloud, supervision, sauvegardes et sécurisation des accès. L'objectif est de livrer plus souvent, avec moins de risques.",
  },
  {
    question: "Faut-il un gros budget pour mettre en place du DevOps ?",
    answer:
      "Non. Une petite équipe peut commencer avec GitHub Actions, Docker et un VPS correctement configuré. L'essentiel est d'automatiser les tâches répétitives, de versionner la configuration et de mettre en place des sauvegardes et des alertes simples avant d'investir dans des outils plus lourds.",
  },
  {
    question: "Quelle expérience a-t-il de l'infrastructure ?",
    answer:
      "Il a déployé Faucon, une plateforme de télémétrie temps réel (firmware ESP32-C3, broker MQTT, Socket.IO, Next.js, Expo), conteneurisé l'API LocatCam avec Docker, et mis en ligne plusieurs applications Next.js. Il travaille sur Linux (Ubuntu, openEuler) et utilise Git/GitHub Actions au quotidien.",
  },
  {
    question: "Peut-il intervenir sur un serveur existant ?",
    answer:
      "Oui : audit de la configuration, mise à jour et durcissement de base, mise en place de sauvegardes, de journaux et de déploiements automatisés, puis documentation de l'installation pour que l'équipe reste autonome.",
  },
  {
    question: "Travaille-t-il avec le cloud ou uniquement des serveurs physiques ?",
    answer:
      "Les deux. Il déploie sur Vercel et sur des VPS Linux, et connaît l'écosystème Huawei (openEuler, openGauss, Kunpeng) ainsi que Docker. Le choix dépend surtout du budget, des contraintes de souveraineté des données et des besoins de montée en charge.",
  },
];

export const frContact = {
  heading: "Un projet web, mobile ou une infrastructure à fiabiliser ?",
  body: "Décrivez le contexte et l'objectif : je réponds avec une approche claire, un périmètre réaliste et les prochaines étapes.",
  cta: "Écrire un e-mail",
} as const;
