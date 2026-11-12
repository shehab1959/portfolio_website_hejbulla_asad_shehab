import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? <p className="mt-4 max-w-2xl text-muted">{intro}</p> : null}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
