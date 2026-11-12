import { Award, Mic2, Presentation } from "lucide-react";
import { achievements, type Achievement } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

const icons: Record<Achievement["type"], typeof Award> = {
  Certification: Award,
  Volunteering: Mic2,
  Conference: Presentation,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements & Certifications"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = icons[a.type];
          return (
            <li key={a.title}>
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <article className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/60">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {a.type}
                      {a.year ? ` · ${a.year}` : ""}
                    </p>
                    <h3 className="mt-1 font-semibold text-fg">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted">{a.issuer}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
