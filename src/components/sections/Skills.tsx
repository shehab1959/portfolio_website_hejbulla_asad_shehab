import { skillGroups } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Proficiency" title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 0.05} className="h-full">
            <section className="h-full rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-bg px-2.5 py-1.5 text-sm text-fg"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
