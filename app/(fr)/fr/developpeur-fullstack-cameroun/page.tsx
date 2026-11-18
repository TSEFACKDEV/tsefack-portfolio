import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Gauge,
  Globe2,
  Layers,
  Server,
  Smartphone,
} from "lucide-react";
import { FrCta } from "@/components/fr/fr-cta";
import { FrFaq } from "@/components/fr/fr-faq";
import { FrHero } from "@/components/fr/fr-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqFullstack, frContact, frProfile } from "@/lib/content-fr";

const title = "Développeur fullstack au Cameroun — TypeScript, React, Next.js";

export const metadata: Metadata = {
  title: { absolute: `${title} | Calvin Klein Tsefack` },
  description:
    "Développeur fullstack au Cameroun : sites et applications web, API, backends C#/.NET et Node.js, applications mobiles. TypeScript, React, Next.js, PostgreSQL, Docker. Basé à Douala, disponible à distance.",
  keywords: [
    "développeur fullstack Cameroun",
    "développeur fullstack Douala",
    "développeur web Cameroun",
    "développeur React Cameroun",
    "développeur Next.js",
    "développeur TypeScript",
    "développeur .NET Cameroun",
    "création site web Cameroun",
    "Calvin Klein Tsefack",
  ],
  alternates: {
    canonical: "/fr/developpeur-fullstack-cameroun",
    languages: {
      fr: "/fr/developpeur-fullstack-cameroun",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "fr_FR",
    url: "/fr/developpeur-fullstack-cameroun",
    title,
    description:
      "Sites, applications web et mobiles, API et backends robustes. Développeur fullstack basé à Douala, Cameroun.",
  },
};

const services = [
  {
    icon: Globe2,
    title: "Sites & applications web",
    description:
      "Des interfaces rapides et accessibles avec React, Next.js et Tailwind CSS, pensées pour le référencement et la conversion.",
    points: ["Sites vitrines et portfolios", "Plateformes métier", "Tableaux de bord"],
  },
  {
    icon: Server,
    title: "API & backends",
    description:
      "Des API claires, documentées et testées avec Node.js, Express, ASP.NET Core ou FastAPI.",
    points: ["API REST et temps réel", "Authentification JWT", "PostgreSQL, MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    description:
      "Des applications mobiles multiplateformes avec React Native ou Flutter, connectées à vos services.",
    points: ["iOS et Android", "Notifications et temps réel", "Publication et mises à jour"],
  },
  {
    icon: Gauge,
    title: "Performance & accessibilité",
    description:
      "Reprise d'un produit existant : audit, corrections ciblées et amélioration mesurable des performances.",
    points: ["Audit Core Web Vitals", "Accessibilité WCAG", "Refonte progressive"],
  },
];

const stack = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "ASP.NET Core", "FastAPI", "Socket.IO", "MQTT"],
  },
  {
    group: "Données",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "EF Core", "openGauss"],
  },
  {
    group: "Livraison",
    items: ["Docker", "GitHub Actions", "Vercel", "VPS Linux", "Git / GitHub", "Tests"],
  },
];

const steps = [
  {
    step: "01",
    title: "Cadrage",
    text: "Comprendre les objectifs, les utilisateurs et les contraintes. Définir un périmètre réaliste et les critères de réussite.",
  },
  {
    step: "02",
    title: "Architecture",
    text: "Choisir la stack, modéliser les données et découper le produit en modules livrables. Documenter les décisions.",
  },
  {
    step: "03",
    title: "Construction",
    text: "Développer par étapes avec des démonstrations régulières, des tests sur les parcours critiques et du code relu.",
  },
  {
    step: "04",
    title: "Mise en production",
    text: "Déployer, surveiller, corriger. Transmettre la documentation et les accès pour que l'équipe reste autonome.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun`,
      url: `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun`,
      name: title,
      description:
        "Services de développement fullstack au Cameroun : applications web, API, backends et applications mobiles.",
      inLanguage: "fr-CM",
      isPartOf: { "@id": `${frProfile.siteUrl}/#website` },
      about: { "@id": `${frProfile.siteUrl}/#person` },
    },
    {
      "@type": "Service",
      "@id": `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun#service`,
      name: "Développement fullstack",
      serviceType: "Développement web, mobile et API",
      provider: { "@id": `${frProfile.siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "Cameroun" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun`,
        servicePhone: frProfile.phone,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun#faq`,
      inLanguage: "fr-CM",
      mainEntity: faqFullstack.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun#breadcrumb`,
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
          name: "Développeur fullstack au Cameroun",
          item: `${frProfile.siteUrl}/fr/developpeur-fullstack-cameroun`,
        },
      ],
    },
  ],
};

export default function FullstackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <FrHero
        eyebrow="Développement fullstack · Cameroun"
        meta="Douala · missions sur site et à distance"
        title={
          <>
            Développeur fullstack{" "}
            <span className="italic text-accent">au Cameroun</span>.
          </>
        }
        lead={
          <>
            Je conçois des produits numériques complets : une interface claire, un
            backend fiable et un déploiement maîtrisé. De la première maquette à la
            mise en production, avec TypeScript, React, Next.js et C#/.NET.
          </>
        }
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
        >
          Discuter d&apos;un projet
          <ArrowDownRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </a>
        <Link
          href="/fr/devops-cameroun"
          className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Voir l&apos;offre DevOps
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
            eyebrow="Ce que je livre"
            title={
              <>
                Du frontend au <span className="italic text-accent">serveur</span>.
              </>
            }
            description="Une seule personne pour couvrir toute la chaîne, ou un renfort sur la partie qui bloque."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-bg text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[17px] font-semibold leading-tight tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
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

      <section id="stack" className="py-24 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="label text-accent">02</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.015em] text-ink">
              Une stack <span className="italic text-accent">éprouvée</span>.
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
              TypeScript de bout en bout quand c&apos;est possible, C#/.NET quand le
              contexte l&apos;exige, et des outils simples qui tiennent en
              production. Pas de dépendance à la mode : des choix justifiés.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="chip">MERN</span>
              <span className="chip">PERN</span>
              <span className="chip">.NET</span>
              <span className="chip">JAMstack</span>
              <span className="chip">Temps réel</span>
            </div>
            <Link
              href="/work/faucon"
              hrefLang="en"
              className="group mt-8 inline-flex items-center gap-2 text-[11.5px] font-semibold text-ink transition-colors hover:text-accent"
            >
              <Layers className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} aria-hidden="true" />
              Voir une architecture complète : Faucon
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {stack.map((group) => (
                <div key={group.group} className="rounded-2xl border border-line bg-surface p-5">
                  <p className="label text-[8px] text-accent">{group.group}</p>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-[12.5px] text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="methode" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Méthode"
            title={
              <>
                Quatre étapes, <span className="italic text-accent">zéro surprise</span>.
              </>
            }
            description="Un cadre simple pour garder le produit, le budget et le calendrier sous contrôle."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="relative h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                    {item.step}
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

      <section id="pourquoi" className="py-24 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="label text-accent">04</span>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.015em] text-ink">
              Pourquoi un développeur fullstack <span className="italic text-accent">au Cameroun</span> ?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[14px] leading-[1.85] text-muted">
            <p>
              Un développeur fullstack basé à Douala comprend le contexte local :
              les moyens de paiement mobile, la qualité variable de la connexion,
              les habitudes des utilisateurs et les contraintes des entreprises
              camerounaises. Cette connaissance évite beaucoup d&apos;allers-retours
              lors de la conception.
            </p>
            <p>
              Le travail se fait en français et en anglais, sur site à Douala ou à
              distance avec des équipes en Europe, en Afrique de l&apos;Ouest et en
              Afrique centrale. Le fuseau GMT+1 facilite les réunions, et la
              documentation est livrée en fin de mission pour que l&apos;équipe
              interne puisse reprendre le code.
            </p>
            <p>
              Côté budget, un profil fullstack réduit le nombre d&apos;intervenants
              et les coûts de coordination. Les projets démarrent par un périmètre
              clair, avec des livraisons régulières et vérifiables. Pour
              l&apos;infrastructure, de la conteneurisation à la supervision, voir
              la page{" "}
              <Link
                href="/fr/devops-cameroun"
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
              >
                DevOps au Cameroun
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
                Avant de <span className="italic text-accent">commencer</span>.
              </>
            }
            description="Collaboration, technologies et attentes concrètes."
          />
          <Reveal>
            <FrFaq items={faqFullstack} />
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
