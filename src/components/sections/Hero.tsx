import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile, publications, siteConfig, socials } from "@/data/site";
import { Reveal } from "../Reveal";
import { SocialLinks } from "../SocialIcon";

export function Hero() {
  const total = publications.length;
  const published = publications.filter((p) => p.status === "Published").length;
  const accepted = publications.filter((p) => p.status === "Accepted").length;

  const stats = [
    { value: total, label: "Research papers" },
    { value: published, label: "Published" },
    { value: accepted, label: "Accepted" },
  ];

  return (
    <section id="home" aria-label="Introduction" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 font-mono text-sm text-accent">Hello, I am</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl text-fg/90 sm:text-2xl">{profile.headline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition hover:opacity-90"
              >
                <Download size={16} aria-hidden="true" /> Download CV
              </a>
              <a
                href="#publications"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                <ArrowDown size={16} aria-hidden="true" /> View Research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                <Mail size={16} aria-hidden="true" /> Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <SocialLinks items={socials} className="mt-8" />
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs text-muted">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-fg">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-border"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-border bg-surface">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
