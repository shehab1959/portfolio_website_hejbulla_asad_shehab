import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";
import { Tag } from "../Tag";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Projects"
      intro="Technical and research projects, from data analysis to object detection."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/60">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-fg">{p.title}</h3>
                {p.status ? (
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">
                    {p.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-fg/90">
                {p.contributions.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {p.github || p.demo ? (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-fg transition hover:text-accent"
                    >
                      <Github size={15} aria-hidden="true" /> Source
                    </a>
                  ) : null}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-fg transition hover:text-accent"
                    >
                      <ExternalLink size={15} aria-hidden="true" /> Live demo
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
