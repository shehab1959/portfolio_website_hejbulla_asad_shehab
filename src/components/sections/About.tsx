import { aboutHighlights, aboutParagraphs } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function About() {
  return (
    <Section id="about" eyebrow="Background" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-muted">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {aboutHighlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-surface p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {h.label}
                </dt>
                <dd className="mt-1.5 font-medium text-fg">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
