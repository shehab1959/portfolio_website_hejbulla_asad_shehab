import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { ResearchExperience } from "@/components/sections/ResearchExperience";
import { Publications } from "@/components/sections/Publications";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { siteConfig, socials, profile } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.image}`,
    email: `mailto:${profile.email}`,
    jobTitle: "Computer Science and Engineering Student and AI/ML Researcher",
    description: siteConfig.description,
    alumniOf: { "@type": "CollegeOrUniversity", name: "Daffodil International University" },
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Medical Image Analysis",
      "Explainable AI",
    ],
    sameAs: socials.filter((s) => s.key !== "email").map((s) => s.href),
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <ResearchInterests />
        <ResearchExperience />
        <Publications />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
