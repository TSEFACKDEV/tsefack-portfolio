import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../brand-icons";

type FrCtaProps = {
  heading: string;
  body: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
};

export function FrCta({
  heading,
  body,
  email,
  phone,
  phoneHref,
  linkedin,
  github,
}: FrCtaProps) {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-paper opacity-20 [mask-image:radial-gradient(circle_at_70%_50%,black,transparent_70%)]" />
      </div>

      <div className="shell relative">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <span className="label text-accent">Contact</span>
              <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[0.98] tracking-[-0.015em] text-ink">
                {heading}
              </h2>
              <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-muted">
                {body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[12px] font-semibold text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                  Écrire un e-mail
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-5 py-3 text-[12px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Download className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                  Télécharger le CV
                </a>
              </div>
            </div>

            <div className="space-y-4 text-[12.5px] text-muted">
              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Phone className="h-3.5 w-3.5 text-accent" strokeWidth={1.7} aria-hidden="true" />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Mail className="h-3.5 w-3.5 text-accent" strokeWidth={1.7} aria-hidden="true" />
                {email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.7} aria-hidden="true" />
                Douala, Cameroun · GMT+1
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
