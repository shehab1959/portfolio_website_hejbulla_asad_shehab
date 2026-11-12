import { Mail, MapPin, Phone } from "lucide-react";
import { profile, reference, socials } from "@/data/site";
import { ContactForm } from "../ContactForm";
import { Reveal } from "../Reveal";
import { Section } from "../Section";
import { SocialIcon } from "../SocialIcon";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Collaborate"
      intro="I am happy to hear about research collaborations, academic opportunities and new ideas."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition hover:border-accent"
              >
                <Mail size={18} className="text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-muted">Email</span>
                  <span className="text-fg">{profile.email}</span>
                </span>
              </a>
            </li>
            {profile.showPhone ? (
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition hover:border-accent"
                >
                  <Phone size={18} className="text-accent" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted">Phone</span>
                    <span className="text-fg">{profile.phone}</span>
                  </span>
                </a>
              </li>
            ) : null}
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
              <MapPin size={18} className="text-accent" aria-hidden="true" />
              <span>
                <span className="block text-xs text-muted">Location</span>
                <span className="text-fg">{profile.location}</span>
              </span>
            </li>
            {socials
              .filter((s) => s.key !== "email")
              .map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition hover:border-accent"
                  >
                    <span className="text-accent">
                      <SocialIcon name={s.key} />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">Profile</span>
                      <span className="text-fg">{s.label}</span>
                    </span>
                  </a>
                </li>
              ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-sm">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              Academic reference
            </p>
            <p className="mt-2 font-medium text-fg">{reference.name}</p>
            <p className="text-muted">{reference.role}</p>
            <p className="text-muted">{reference.department}</p>
            <a
              href={`mailto:${reference.email}`}
              className="mt-1 inline-block text-accent hover:underline"
            >
              {reference.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-fg">Send a message</h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
