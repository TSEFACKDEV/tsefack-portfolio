import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Database,
  ExternalLink,
  GraduationCap,
  Layers,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { FrCta } from "@/components/fr/fr-cta";
import { FrFaq } from "@/components/fr/fr-faq";
import { FrHero } from "@/components/fr/fr-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  expertises,
  faqPillar,
  frContact,
  frProfile,
  frProjects,
  frTimeline,
} from "@/lib/content-fr";
import { siteDescriptionFr } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Développeur fullstack et ingénieur logiciel au Cameroun",
  description:
    "Calvin Klein Tsefack, développeur fullstack et ingénieur logiciel à Douala (Cameroun) : applications web et mobiles, API, DevOps et informatique. Projets, parcours, FAQ et contact.",
  alternates: {
    canonical: "/fr",
    languages: {
      fr: "/fr",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "fr_FR",
    url: "/fr",
    title: "Développeur fullstack et ingénieur logiciel au Cameroun",
    description: siteDescriptionFr,
  },
};

const iconMap = {
  layers: Layers,
  server: Server,
  terminal: Terminal,
  compass: Compass,
  database: Database,
  shield: ShieldCheck,
} as const;

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${frProfile.siteUrl}/fr`,
      url: `${frProfile.siteUrl}/fr`,
      name: "Développeur fullstack et ingénieur logiciel au Cameroun",
      description:
        "Portfolio et présentation de Calvin Klein Tsefack, développeur fullstack et ingénieur logiciel basé à Douala, Cameroun.",
      inLanguage: "fr-CM",
      isPartOf: { "@id": `${frProfile.siteUrl}/#website` },
      about: { "@id": `${frProfile.siteUrl}/#person` },
      primaryImageOfPage: `${frProfile.siteUrl}/opengraph-image`,
    },
    {
      "@type": "FAQPage",
      "@id": `${frProfile.siteUrl}/fr#faq`,
      inLanguage: "fr-CM",
      mainEntity: faqPillar.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${frProfile.siteUrl}/fr#breadcrumb`,
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
      ],
    },
  ],
};

export default function FrHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <FrHero
        eyebrow={frProfile.availability}
        meta={`${frProfile.location} · GMT+1`}
        title={
          <>
            Développeur fullstack et ingénieur logiciel{" "}
            <span className="italic text-accent">au Cameroun</span>.
          </>
        }
        lead={
          <>
            Je suis <strong className="font-semibold text-ink">Calvin Klein Tsefack</strong>,
            développeur fullstack et ingénieur logiciel basé à Douala. Je conçois et
            déploie des applications web, mobiles et des API robustes pour des
            entreprises et des équipes au Cameroun et à l&apos;international.
          </>
        }
      >
        <a
          href="#projets"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
        >
          Voir les projets
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
          Services fullstack
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
        <span className="inline-flex items-center gap-2 text-[11px] text-muted">
          <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.7} aria-hidden="true" />
          Douala · Cameroun
        </span>
      </FrHero>

      <section id="expertise" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Expertises"
            title={
              <>
                Trois façons de <span className="italic text-accent">construire</span>.
              </>
            }
            description="Du schéma d'architecture à la mise en production, avec la même exigence de clarté et de fiabilité."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {expertises.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-bg text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-[17px] font-semibold leading-tight tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-line pt-4">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-[11.5px] leading-snug text-muted">
                          <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fr/developpeur-fullstack-cameroun"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[11px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Développeur fullstack au Cameroun
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
            </Link>
            <Link
              href="/fr/devops-cameroun"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[11px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              DevOps et infrastructure au Cameroun
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="projets" className="py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Projets sélectionnés"
            title={
              <>
                Des produits livrés, <span className="italic text-accent">pas des promesses</span>.
              </>
            }
            description="Plateformes commerciales, projets académiques et constructions personnelles — conçus, développés et déployés depuis Douala."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {frProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <article className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="label text-[8px] text-faint">{project.tag}</p>
                      <h3 className="mt-2 font-serif text-[26px] leading-none tracking-tight text-ink">
                        {project.title}
                      </h3>
                    </div>
                    <span className="label mt-1 shrink-0 text-[8px] text-faint">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-4 text-[13px] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5">
                    <Link
                      href={`/work/${project.slug}`}
                      hrefLang="en"
                      className="group/link inline-flex items-center gap-2 text-[11px] font-semibold text-ink transition-colors hover:text-accent"
                    >
                      Étude de cas
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </Link>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] text-faint transition-colors hover:text-accent"
                      >
                        <ExternalLink className="h-3 w-3" strokeWidth={1.7} aria-hidden="true" />
                        Application live
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="parcours" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Parcours"
            title={
              <>
                Une trajectoire <span className="italic text-accent">d&apos;ingénieur</span>.
              </>
            }
            description="Formation, distinctions et projets, avec un fil conducteur : construire des logiciels utiles et durables."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-[11px] text-muted">
                  <GraduationCap className="h-3.5 w-3.5 text-accent" strokeWidth={1.7} aria-hidden="true" />
                  ENSPD, niveau 5
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-[11px] text-muted">
                  <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.7} aria-hidden="true" />
                  Major de promotion 2024–2025
                </span>
              </div>
              <p className="mt-6 text-[14px] leading-relaxed text-muted">
                Élève ingénieur en génie logiciel à l&apos;École nationale supérieure
                polytechnique de Douala, je termine ma cinquième année. Mon travail
                combine architecture logicielle, développement produit et
                exploitation : de la base de données jusqu&apos;au serveur en
                production.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                En 2026, je me suis qualifié pour la phase nationale du Huawei ICT
                Competition, parcours Computing, où j&apos;approfondis
                l&apos;écosystème openEuler, openGauss et l&apos;architecture
                Kunpeng. J&apos;ai aussi représenté mon école avec Team ARTEMIS 237
                au challenge SAFINUM avec NkapLingua.
              </p>
            </Reveal>

            <div className="relative border-l border-line pl-6">
              <ol className="space-y-8">
                {frTimeline.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <li className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-bg"
                      />
                      <p className="label text-[8px] text-accent">{item.year}</p>
                      <h3 className="mt-2 text-[14.5px] font-semibold leading-snug tracking-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="informatique" className="py-24 sm:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="label text-accent">04</span>
              <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-ink">
                L&apos;informatique au Cameroun, <span className="italic text-accent">vue du terrain</span>.
              </h2>
              <p className="mt-5 text-[13.5px] leading-relaxed text-muted">
                Un aperçu du secteur, de la formation d&apos;ingénieur aux produits
                déployés à Douala et Yaoundé.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="space-y-5 text-[14px] leading-[1.85] text-muted">
              <p>
                L&apos;informatique camerounaise s&apos;est structurée autour de
                quelques pôles solides : les écoles d&apos;ingénieurs de Douala et de
                Yaoundé, les startups du numérique, les directions informatiques
                d&apos;entreprises et les projets publics de digitalisation. Le
                secteur ne manque pas de talents ; il manque surtout de produits
                bien conçus, déployés et maintenus dans la durée.
              </p>
              <p>
                La formation d&apos;ingénieur à l&apos;ENSPD couvre l&apos;algorithmique,
                les bases de données, l&apos;architecture logicielle et la gestion de
                projet. Sur le terrain, cette base se confronte à d&apos;autres
                réalités : connectivité variable, matériel modeste, besoins métier
                très concrets. C&apos;est là que le métier devient intéressant — un
                logiciel qui fonctionne vraiment, sur le réseau disponible, avec les
                utilisateurs réels.
              </p>
              <p>
                Les besoins les plus visibles concernent le développement web et
                mobile, les API de paiement mobile, la gestion des données, la
                cybersécurité et l&apos;exploitation d&apos;infrastructures. Les
                entreprises cherchent des profils capables de couvrir plusieurs
                couches : une interface claire, un backend fiable, un déploiement
                automatisé. C&apos;est précisément le rôle d&apos;un développeur
                fullstack, et c&apos;est le positionnement que j&apos;ai choisi.
              </p>
              <p>
                Travailler depuis Douala n&apos;est plus une limite. Avec Git, GitHub
                Actions, Docker et des plateformes comme Vercel ou un VPS Linux, une
                équipe peut livrer depuis n&apos;importe où. Le fuseau GMT+1 facilite
                la collaboration avec l&apos;Europe et l&apos;Afrique de
                l&apos;Ouest, et le bilinguisme français-anglais ouvre les marchés
                d&apos;Afrique centrale et anglophone.
              </p>
              <p>
                Ce portfolio en est une démonstration : un site Next.js, un studio de
                contenu pour publier les projets, des études de cas détaillées et une
                plateforme de télémétrie en production. D&apos;autres projets sont
                disponibles sur{" "}
                <a
                  href={frProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-line bg-bg-soft/40 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading
            index="05"
            eyebrow="Questions fréquentes"
            title={
              <>
                Ce que l&apos;on me demande <span className="italic text-accent">le plus souvent</span>.
              </>
            }
            description="Profil, technologies, collaboration et informatique au Cameroun."
          />
          <Reveal>
            <FrFaq items={faqPillar} />
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
