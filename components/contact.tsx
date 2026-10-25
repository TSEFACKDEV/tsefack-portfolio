import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { ContactForm } from "./contact-form";
import { CopyEmail } from "./copy-email";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#071626] text-white shadow-[0_40px_100px_-50px_rgba(4,14,26,0.9)]">
            <div aria-hidden="true" className="absolute inset-0 cover-grid opacity-50" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(66,129,196,0.28),transparent_65%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(216,184,120,0.12),transparent_65%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 right-4 select-none font-serif text-[16rem] italic leading-none text-white/[0.025] sm:text-[22rem]"
            >
              05
            </div>

            <div className="relative grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-7 sm:p-10 lg:p-12 xl:p-14">
                <div className="flex items-center gap-3">
                  <span className="label text-[9px] text-[#d8b878]">05</span>
                  <span aria-hidden="true" className="h-px w-8 bg-white/20" />
                  <span className="label text-[9px] text-white/45">Contact</span>
                </div>

                <h2 className="mt-7 max-w-md font-serif text-[clamp(2.7rem,4.8vw,4.2rem)] leading-[0.94] tracking-[-0.02em] text-white">
                  Let&rsquo;s build something{" "}
                  <span className="italic text-[#d8b878]">with intent</span>.
                </h2>

                <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/55">
                  Available for internships, freelance work and ambitious
                  collaborations. I reply within a day — usually sooner.
                </p>

                <div className="mt-8">
                  <p className="label text-[7.5px] text-white/35">
                    Direct line
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-underline inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-white sm:text-[16px]"
                    >
                      <Mail
                        className="h-4 w-4 text-[#d8b878]"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      {profile.email}
                    </a>
                    <CopyEmail />
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="label text-[7.5px] text-white/35">Phone</p>
                    <a
                      href={`tel:${profile.phoneHref}`}
                      className="mt-2 inline-flex items-center gap-2 text-[11.5px] text-white/70 transition-colors hover:text-white"
                    >
                      <Phone
                        className="h-3.5 w-3.5 text-white/35"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      {profile.phone}
                    </a>
                    <p className="mt-1 pl-[22px] font-mono text-[9px] text-white/30">
                      alt. {profile.phoneAlt}
                    </p>
                  </div>
                  <div>
                    <p className="label text-[7.5px] text-white/35">Based in</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-[11.5px] text-white/70">
                      <MapPin
                        className="h-3.5 w-3.5 text-white/35"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      {profile.location} · {profile.timezone}
                    </p>
                    <p className="mt-1 pl-[22px] font-mono text-[9px] text-white/30">
                      Open to remote
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-6">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-[10.5px] text-white/70 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    LinkedIn
                    <ArrowUpRight
                      className="h-3 w-3 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-[10.5px] text-white/70 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    GitHub
                    <ArrowUpRight
                      className="h-3 w-3 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                  <span className="ml-auto hidden items-center gap-2 lg:inline-flex">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#7fcaa8]" />
                    <span className="label text-[7.5px] text-white/40">
                      Available
                    </span>
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.02] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12 xl:p-14">
                <div className="mb-6 flex items-center justify-between">
                  <p className="label text-[7.5px] text-white/35">
                    Start a conversation
                  </p>
                  <span className="font-serif text-[15px] italic text-[#d8b878]/70">
                    Straight to the inbox
                  </span>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
