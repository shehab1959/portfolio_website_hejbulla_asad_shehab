import { FlaskConical } from "lucide-react";
import { researchWork } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";
import { Tag } from "../Tag";

export function ResearchExperience() {
  return (
    <Section
      id="experience"
      eyebrow="Academic Activities"
      title="Research Experience"
      intro="Research domains I have contributed to, and the practices I use across the research workflow."
      className="pt-0! sm:pt-0!"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {researchWork.map((w, i) => (
          <Reveal key={w.domain} delay={(i % 2) * 0.07} className="h-full">
            <article className="h-full rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/60">
              <div className="flex items-center gap-3">
                <FlaskConical size={18} className="text-accent" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-fg">{w.domain}</h3>
              </div>
              <p className="mt-3 text-sm text-muted">{w.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-fg/90">
                {w.contributions.map((c) => (
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
                {w.methods.map((m) => (
                  <Tag key={m}>{m}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
