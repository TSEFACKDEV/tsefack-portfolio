import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Check,
  GitBranch,
  Radio,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { FrCta } from "@/components/fr/fr-cta";
import { FrFaq } from "@/components/fr/fr-faq";
import { FrHero } from "@/components/fr/fr-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqDevops, frContact, frProfile } from "@/lib/content-fr";

const title = "DevOps au Cameroun — Docker, CI/CD et Linux";

export const metadata: Metadata = {
  title: { absolute: `${title} | Calvin Klein Tsefack` },
  description:
    "DevOps au Cameroun : automatisation CI/CD avec GitHub Actions, Docker, serveurs Linux et VPS, pipelines temps réel MQTT et Socket.IO, supervision et sauvegardes. Basé à Douala, disponible à distance.",
  keywords: [
    "DevOps Cameroun",
    "DevOps Douala",
    "ingénieur DevOps Cameroun",
    "CI/CD Cameroun",
    "Docker Cameroun",
    "administration Linux Cameroun",
    "déploiement VPS",
    "MQTT temps réel",
    "Calvin Klein Tsefack",
  ],
  alternates: {
    canonical: "/fr/devops-cameroun",
    languages: {
      fr: "/fr/devops-cameroun",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "fr_FR",
    url: "/fr/devops-cameroun",
    title,
    description:
      "Automatisation, conteneurisation et exploitation de services au Cameroun. CI/CD, Docker, Linux, temps réel.",
  },
};

const services = [
  {
    icon: GitBranch,
    title: "CI/CD & automatisation",
    description:
      "Des livraisons reproductibles : tests, build et déploiement déclenchés par Git, avec GitHub Actions.",
    points: ["Pipelines GitHub Actions", "Environnements de préproduction", "Déploiements réversibles"],
  },
  {
    icon: Boxes,
    title: "Docker & conteneurisation",
    description:
      "Des services isolés et reproductibles, du poste de développement au serveur de production.",
    points: ["Images Docker", "Docker Compose", "Variables et secrets"],
  },
  {
    icon: Server,
    title: "Serveurs Linux & VPS",
    description:
      "Installation, configuration et durcissement de serveurs Ubuntu ou openEuler.",
    points: ["Nginx et reverse proxy", "Certificats TLS", "Accès SSH et pare-feu"],
  },
  {
    icon: Radio,
    title: "Temps réel & IoT",
    description:
      "Des pipelines de données temps réel, du capteur à l'interface de supervision.",
    points: ["Broker MQTT", "Socket.IO", "Firmware ESP32"],
  },
  {
    icon: ShieldCheck,
    title: "Supervision & sauvegardes",
    description:
      "Savoir ce qui se passe en production et pouvoir revenir en arrière sans panique.",
    points: ["Journaux et alertes", "Sauvegardes de bases", "Procédures de restauration"],
  },
  {
    icon: Terminal,
    title: "Outillage & scripting",
    description:
      "Des scripts et des outils internes pour supprimer les tâches manuelles répétitives.",
    points: ["Bash et Python", "Outils en Rust", "Documentation d'exploitation"],
  },
];

const realisations = [
  {
    title: "Faucon — télémétrie de flotte en production",
    text: "Firmware ESP32-C3, broker MQTT, passerelle Socket.IO, tour de contrôle Next.js et application Expo. Le pipeline relie le matériel, le serveur et les utilisateurs en temps réel.",
    href: "/work/faucon",
    live: "https://faucon.169.58.69.36.sslip.io/",
    tags: ["MQTT", "Socket.IO", "ESP32", "Next.js", "Expo"],
  },
  {
    title: "LocatCam — API conteneurisée",
    text: "API ASP.NET Core avec EF Core et authentification JWT, conteneurisée avec Docker pour un déploiement reproductible et des environnements cohérents.",
    href: "/work/locatcam",
    tags: ["Docker", "ASP.NET Core", "EF Core", "JWT"],
  },
  {
    title: "Portfolio — Next.js avec studio de contenu",
    text: "Site Next.js rendu côté serveur, revalidation incrémentale, génération du sitemap et de l'image Open Graph, publication de projets depuis un studio protégé.",
    href: "/work",
    tags: ["Next.js", "Vercel", "ISR", "SEO"],
  },
  {
    title: "DataPipe — outil ETL en Rust",
    text: "Outil en ligne de commande pour transformer des fichiers CSV et JSON, avec validation de schéma, configuration TOML et suite de tests.",
    href: "https://github.com/TSEFACKDEV/DATAPIPE",
    tags: ["Rust", "CLI", "Tests", "ETL"],
  },
];

const principles = [
  {
    title: "Reproductible",
    text: "Tout ce qui est nécessaire pour reconstruire l'environnement est versionné : Dockerfile, configuration, scripts et variables documentées.",
  },
  {
    title: "Observable",
    text: "Des journaux exploitables, des alertes sur les erreurs critiques et un moyen simple de vérifier que le service répond.",
  },
  {
    title: "Réversible",
    text: "Des déploiements qui peuvent être annulés et des sauvegardes testées, pas seulement planifiées.",
  },
  {
    title: "Documenté",
    text: "Une procédure d'exploitation claire pour que l'équipe interne puisse intervenir sans dépendre d'une seule personne.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${frProfile.siteUrl}/fr/devops-cameroun`,
      url: `${frProfile.siteUrl}/fr/devops-cameroun`,
      name: title,
      description:
        "Services DevOps au Cameroun : CI/CD, Docker, serveurs Linux, pipelines temps réel et supervision.",
      inLanguage: "fr-CM",
      isPartOf: { "@id": `${frProfile.siteUrl}/#website` },
      about: { "@id": `${frProfile.siteUrl}/#person` },
    },
    {
      "@type": "Service",
      "@id": `${frProfile.siteUrl}/fr/devops-cameroun#service`,
      name: "DevOps et infrastructure",
      serviceType: "CI/CD, conteneurisation, exploitation de serveurs et temps réel",
      provider: { "@id": `${frProfile.siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "Cameroun" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${frProfile.siteUrl}/fr/devops-cameroun`,
        servicePhone: frProfile.phone,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${frProfile.siteUrl}/fr/devops-cameroun#faq`,
      inLanguage: "fr-CM",
      mainEntity: faqDevops.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${frProfile.siteUrl}/fr/devops-cameroun#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: frProfile.siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Version française",
          item: `${frProfile.siteUrl}/fr`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DevOps au Cameroun",
          item: `${frProfile.siteUrl}/fr/devops-cameroun`,
        },
      ],
    },
  ],
};

export default function DevopsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <FrHero
        eyebrow="DevOps · Cameroun"
        meta="Douala · missions sur site et à distance"
        title={
          <>
            DevOps et infrastructure{" "}
            <span className="italic text-accent">au Cameroun</span>.
          </>
        }
        lead={
          <>
            Déployer plus souvent, avec moins de risques. Je mets en place des
            pipelines CI/CD, des environnements Docker et des serveurs Linux
            fiables — du capteur IoT à la base de données.
          </>
        }
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
        >
          Fiabiliser mon infrastructure
          <ArrowDownRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </a>
        <Link
          href="/fr/developpeur-fullstack-cameroun"
          className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Voir l&apos;offre fullstack
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </FrHero>

      <section id="services" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Prestations"
            title={
              <>
                De l&apos;automatisation à la <span className="italic text-accent">supervision</span>.
              </>
            }
            description="Une intervention ciblée ou un accompagnement complet, selon l'état de votre infrastructure."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <article className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-bg text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[16px] font-semibold leading-tight tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-line pt-4">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-[11.5px] leading-snug text-muted">
                          <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Réalisations"
            title={
              <>
                Des systèmes <span className="italic text-accent">en marche</span>.
              </>
            }
            description="Des exemples concrets de pipelines, de conteneurs et de services déployés."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {realisations.map((item, index) => {
              const external = item.href.startsWith("http");
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[16.5px] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{item.text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  {external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      hrefLang="en"
                      className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7"
                    >
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="principes" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Principes"
            title={
              <>
                Simple, solide, <span className="italic text-accent">documenté</span>.
              </>
            }
            description="Quatre règles que j'applique à chaque infrastructure, même la plus petite."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contexte" className="py-24 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="label text-accent">04</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.015em] text-ink">
              Le DevOps <span className="italic text-accent">au Cameroun</span>, concrètement.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[14px] leading-[1.85] text-muted">
            <p>
              Au Cameroun, beaucoup d&apos;équipes déploient encore à la main : copie
              de fichiers, redémarrage de service, configuration modifiée directement
              sur le serveur. Cela fonctionne jusqu&apos;au jour où une mise à jour
              casse la production sans possibilité de retour arrière.
            </p>
            <p>
              Le passage au DevOps ne demande pas une plateforme complexe. Il commence
              par trois gestes : versionner la configuration, automatiser le
              déploiement et sauvegarder les données. Ensuite viennent les tests
              automatiques, la supervision et les alertes. Chaque étape réduit un
              risque réel.
            </p>
            <p>
              Pour les produits temps réel — télémétrie, IoT, messagerie —, la
              difficulté se déplace vers le pipeline : broker MQTT, gestion de la
              reconnexion, files d&apos;attente et persistance des messages. Le projet
              Faucon m&apos;a confronté à ces contraintes sur du matériel réel, avec
              des coupures réseau et des capteurs à faible puissance.
            </p>
            <p>
              Les missions se font depuis Douala, à distance ou sur site, en français
              et en anglais. Pour la partie applicative, voir la page{" "}
              <Link
                href="/fr/developpeur-fullstack-cameroun"
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
              >
                développeur fullstack au Cameroun
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="05"
            eyebrow="Questions fréquentes"
            title={
              <>
                Infrastructure : <span className="italic text-accent">les bases</span>.
              </>
            }
            description="Budget, expérience, serveurs existants et cloud."
          />
          <Reveal>
            <FrFaq items={faqDevops} />
          </Reveal>
        </div>
      </section>

      <FrCta
        heading={frContact.heading}
        body={frContact.body}
        email={frProfile.email}
        phone={frProfile.phone}
        phoneHref={frProfile.phoneHref}
        linkedin={frProfile.linkedin}
        github={frProfile.github}
      />
    </>
  );
}
