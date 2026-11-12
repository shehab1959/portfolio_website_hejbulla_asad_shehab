import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import type { Social } from "@/data/site";

function ResearchGateIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="currentColor"
      >
        RG
      </text>
    </svg>
  );
}

export function SocialIcon({ name, size = 18 }: { name: Social["key"]; size?: number }) {
  switch (name) {
    case "github":
      return <Github size={size} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin size={size} aria-hidden="true" />;
    case "scholar":
      return <GraduationCap size={size} aria-hidden="true" />;
    case "researchgate":
      return <ResearchGateIcon size={size} />;
    default:
      return <Mail size={size} aria-hidden="true" />;
  }
}

export function SocialLinks({ items, className = "" }: { items: Social[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target={s.key === "email" ? undefined : "_blank"}
            rel={s.key === "email" ? undefined : "noopener noreferrer"}
            aria-label={s.label}
            title={s.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <SocialIcon name={s.key} />
          </a>
        </li>
      ))}
    </ul>
  );
}
