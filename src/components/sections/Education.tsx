import { GraduationCap } from "lucide-react";
import { education } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <ol className="relative space-y-6 border-l border-border pl-8">
        {education.map((e, i) => (
          <li key={e.degree} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[2.6rem] top-5 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-bg",
                e.current ? "border-accent" : "border-border",
              )}
            >
              {e.current ? <span className="h-2 w-2 rounded-full bg-accent" /> : null}
            </span>
            <Reveal delay={i * 0.06}>
              <article className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/60">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="mt-1 text-accent" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{e.degree}</h3>
                      <p className="mt-0.5 text-muted">
                        {e.institution} · {e.location}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                    {e.period}
                  </span>
                </div>
                {e.result || e.note ? (
                  <p className="mt-4 text-sm font-medium text-fg">
                    {[e.result, e.note].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
