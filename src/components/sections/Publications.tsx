"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import { publications, type PubStatus } from "@/data/site";
import { Reveal } from "../Reveal";
import { Section } from "../Section";
import { Tag } from "../Tag";
import { cn } from "@/lib/utils";

type Filter = "All" | PubStatus;

const statusStyle: Record<PubStatus, string> = {
  Published: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  Accepted: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  "Under Review": "bg-amber-500/15 text-amber-700 dark:text-amber-300",
};

export function Publications() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", "Published", "Accepted", "Under Review"];
  const list = publications.filter((p) => filter === "All" || p.status === filter);
  const count = (f: Filter) =>
    f === "All" ? publications.length : publications.filter((p) => p.status === f).length;

  return (
    <Section
      id="publications"
      eyebrow="Research Output"
      title="Publications"
      intro="Status labels distinguish published papers from accepted papers and manuscripts under peer review."
    >
      <div role="group" aria-label="Filter publications by status" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition",
              filter === f
                ? "border-accent bg-accent text-accent-fg"
                : "border-border bg-surface text-muted hover:border-accent hover:text-accent",
            )}
          >
            {f} <span className="opacity-70">({count(f)})</span>
          </button>
        ))}
      </div>

      <ul className="mt-8 space-y-5">
        {list.map((p) => (
          <li key={p.id}>
            <Reveal>
              <article className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/60">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      statusStyle[p.status],
                    )}
                  >
                    {p.status}
                    {p.year ? ` · ${p.year}` : ""}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                    {p.location ? <MapPin size={12} aria-hidden="true" /> : null}
                    {p.venue}
                    {p.location ? `, ${p.location}` : ""}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-fg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.authors}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.keywords.map((k) => (
                    <Tag key={k}>{k}</Tag>
                  ))}
                </div>
                {p.links.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-fg transition hover:border-accent hover:text-accent"
                      >
                        {l.label} <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
