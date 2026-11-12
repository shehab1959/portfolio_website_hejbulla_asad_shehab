import { Brain, Eye, HardHat, Leaf, Microscope, ScanLine } from "lucide-react";
import { interests, type Interest } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";
import { Tag } from "../Tag";

const icons: Record<Interest["icon"], typeof Brain> = {
  microscope: Microscope,
  scan: ScanLine,
  eye: Eye,
  brain: Brain,
  leaf: Leaf,
  hardhat: HardHat,
};

export function ResearchInterests() {
  return (
    <Section
      id="research"
      eyebrow="Focus Areas"
      title="Research Interests"
      intro="Areas I work in, drawn from my published and ongoing research."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/60">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
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
