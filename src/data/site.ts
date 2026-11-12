/**
 * CENTRAL DATA FILE
 * -----------------
 * Everything shown on the website lives here. To update your portfolio,
 * edit this file only — no need to touch the components.
 *
 * Fields marked  TODO  need information that was not in your CV.
 */

export const siteConfig = {
  name: "Hejbulla Asad Shehab",
  shortName: "H. A. Shehab",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hejbulla-shehab.vercel.app",
  title: "Hejbulla Asad Shehab | CSE Student & AI/ML Researcher",
  description:
    "Portfolio of Hejbulla Asad Shehab, a Computer Science and Engineering student at Daffodil International University researching Machine Learning, Deep Learning and medical image analysis.",
  keywords: [
    "Hejbulla Asad Shehab",
    "Shehab",
    "AI researcher",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Medical Image Analysis",
    "Explainable AI",
    "Daffodil International University",
    "Bangladesh",
  ],
  cvPath: "/Hejbulla_Asad_Shehab_CV.pdf",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};

export const profile = {
  fullName: "Hejbulla Asad Shehab",
  headline: "CSE Student · AI/ML Researcher",
  tagline: "Machine Learning, Deep Learning and medical image analysis.",
  intro:
    "I am a Computer Science and Engineering student at Daffodil International University, building my career in Machine Learning and Artificial Intelligence. My research applies deep learning to medical imaging, agriculture and industrial safety.",
  availability: "Open to research collaborations",
  email: "hejbulla.shehab10@gmail.com",
  location: "Savar, Dhaka, Bangladesh",
  // Your CV lists a personal phone number. It is hidden on the website by default
  // so it is not exposed to spam. Set showPhone to true if you want it public.
  phone: "+8801648381569",
  showPhone: false,
  image: "/images/profile.webp",
  imageAlt: "Portrait of Hejbulla Asad Shehab",
};

export const aboutParagraphs = [
  "I am a Computer Science and Engineering student at Daffodil International University, Dhaka, currently in Level 4, Term 3 of my B.Sc. programme. My academic path is focused on Machine Learning and Artificial Intelligence, and I enjoy research and learning new things in this field.",
  "My research work centres on deep learning for medical image analysis, including lung cancer and Non-Hodgkin lymphoma classification from histopathological images, brain tumor classification from multi-slice MRI, and blood cell classification with explainable AI insights. I also work on applied vision problems such as Moringa leaf disease classification and safety equipment detection with YOLO architectures.",
  "I have authored research papers across international conferences, with one published and several accepted or under peer review. I contribute to academic writing, literature review, survey preparation and result analysis, and I am always ready to learn more and collaborate with the research and academic community.",
];

export const aboutHighlights = [
  { label: "Current programme", value: "B.Sc. in CSE" },
  { label: "University", value: "Daffodil International University" },
  { label: "Primary focus", value: "Medical AI · Computer Vision" },
  { label: "Career goal", value: "Machine Learning & AI research" },
];

export interface Social {
  key: "github" | "linkedin" | "scholar" | "researchgate" | "email";
  label: string;
  href: string;
}

export const socials: Social[] = [
  { key: "github", label: "GitHub", href: "https://github.com/shehab1959" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hejbulla-asad-shehab-07662b292/",
  },
  {
    key: "scholar",
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=_Z9PH5wAAAAJ&hl=en",
  },
  {
    key: "researchgate",
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Hejbulla-Shehab?ev=hdr_xprf",
  },
  { key: "email", label: "Email", href: "mailto:hejbulla.shehab10@gmail.com" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

/* ----------------------------- Education ----------------------------- */

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  result?: string;
  note?: string;
  current?: boolean;
}

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2023 – Present",
    note: "Level 4, Term 3",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Gazipur Cantonment College",
    location: "Gazipur, Bangladesh",
    period: "2021",
    result: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Bormi Union High School",
    location: "Bangladesh",
    period: "2019",
    result: "GPA 4.78 / 5.00",
  },
];

/* ------------------------- Research interests ------------------------- */

export interface Interest {
  title: string;
  description: string;
  icon: "microscope" | "scan" | "eye" | "brain" | "leaf" | "hardhat";
  tags: string[];
}

export const interests: Interest[] = [
  {
    title: "Medical Image Analysis",
    description:
      "Classifying diseases from histopathological images, multi-slice brain MRI and blood cell images using deep learning.",
    icon: "microscope",
    tags: ["Histopathology", "MRI", "Lung Cancer", "Lymphoma"],
  },
  {
    title: "Deep Learning & Computer Vision",
    description:
      "Comparing CNN architectures, hybrid Vision Transformer–CNN models and YOLO detectors on real image datasets.",
    icon: "scan",
    tags: ["CNN", "Vision Transformer", "YOLO"],
  },
  {
    title: "Explainable AI (XAI)",
    description:
      "Adding explainability insights to diagnostic models so that predictions are easier to interpret and trust.",
    icon: "eye",
    tags: ["Interpretability", "Diagnostics"],
  },
  {
    title: "Machine Learning & AI",
    description:
      "Building a strong foundation in classical machine learning and data analysis, with careful evaluation and result analysis.",
    icon: "brain",
    tags: ["K-NN", "Scikit-learn", "Data Analysis"],
  },
  {
    title: "Agricultural Vision",
    description:
      "Multi-class disease classification of Moringa leaves using CNN architectures and Vision Transformers.",
    icon: "leaf",
    tags: ["Plant Disease", "Classification"],
  },
  {
    title: "Industrial Safety Detection",
    description:
      "Automated detection of safety equipment on construction sites by comparing YOLO architectures.",
    icon: "hardhat",
    tags: ["Object Detection", "YOLO11"],
  },
];

/* ------------------------- Research experience ------------------------- */

export interface ResearchWork {
  domain: string;
  summary: string;
  contributions: string[];
  methods: string[];
}

export const researchWork: ResearchWork[] = [
  {
    domain: "Histopathological Image Classification",
    summary:
      "Deep learning approaches for classifying cancer types from histopathological images.",
    contributions: [
      "Multi-class lung cancer classification (DeepHist).",
      "Non-Hodgkin lymphoma classification from histopathological images.",
    ],
    methods: ["Deep Learning", "Image Classification"],
  },
  {
    domain: "Radiology and Hematology",
    summary:
      "Comparative studies of modern architectures for MRI and blood cell images.",
    contributions: [
      "Brain tumor classification from multi-slice MRI with a comparison of CNN architectures.",
      "Blood cell classification with hybrid Vision Transformer–CNN architectures and explainable AI insights.",
    ],
    methods: ["CNN", "Vision Transformer", "Explainable AI"],
  },
  {
    domain: "Applied Vision Research",
    summary:
      "Applying vision models to agriculture and construction-site safety.",
    contributions: [
      "Multi-class Moringa leaf disease classification with CNNs and a Vision Transformer.",
      "Systematic comparison of YOLO architectures for safety equipment detection.",
    ],
    methods: ["CNN", "Vision Transformer", "YOLO"],
  },
  {
    domain: "Research Practice",
    summary: "Hands-on experience across the full research workflow.",
    contributions: [
      "Advanced academic paper writing.",
      "Literature review and survey preparation.",
      "Data annotation, dataset analysis and result analysis.",
    ],
    methods: ["Literature Review", "Result Analysis", "Annotation"],
  },
];

/* ---------------------------- Publications ---------------------------- */

export type PubStatus = "Published" | "Accepted" | "Under Review";

export interface Publication {
  id: string;
  title: string;
  authors: string; // TODO: replace with the full author list for each paper
  venue: string;
  location?: string;
  year?: string; // TODO: add year where missing
  status: PubStatus;
  description: string;
  keywords: string[];
  links: { label: string; href: string }[]; // add "Read Paper" / "View DOI" links here
}

const scholar = socials.find((s) => s.key === "scholar")!.href;

/**
 * IMPORTANT: Your CV says "1 published and 5 accepted", but it also marks the last
 * paper as "Under Peer Review". Please confirm each status below. DeepHist is
 * marked Published because it is the first listed and its conference is the
 * earliest; change it if a different paper is the published one.
 */
export const publications: Publication[] = [
  {
    id: "deephist",
    title:
      "DeepHist: A Deep Learning Approach for Multi-Class Lung Cancer Classification from Histopathological Images",
    authors: "Hejbulla Asad Shehab, et al.",
    venue: "ICOIICS 2025",
    location: "Nepal",
    year: "2025",
    status: "Published",
    description:
      "A deep learning approach for multi-class lung cancer classification from histopathological images.",
    keywords: ["Lung Cancer", "Histopathology", "Deep Learning"],
    links: [{ label: "View on Google Scholar", href: scholar }],
  },
  {
    id: "hematology",
    title:
      "Enhancing Hematological Diagnostics: A Comparative Analysis of Hybrid Vision Transformer-CNN Architectures for Blood Cell Classification with Explainable AI Insights",
    authors: "Hejbulla Asad Shehab, et al.",
    venue: "ATIS 2025",
    location: "Australia",
    year: "2025",
    status: "Accepted",
    description:
      "A comparative analysis of hybrid Vision Transformer–CNN architectures for blood cell classification, with explainable AI insights.",
    keywords: ["Blood Cells", "Vision Transformer", "CNN", "XAI"],
    links: [{ label: "View on Google Scholar", href: scholar }],
  },
  {
    id: "brain-tumor",
    title:
      "Deep Learning-Based Brain Tumor Classification from Multi-Slice MRI: A Comparison of CNN Architectures",
    authors: "Hejbulla Asad Shehab, et al.",
    venue: "RTIP2R 2025",
    location: "Morocco",
    year: "2025",
    status: "Accepted",
    description:
      "A comparison of CNN architectures for brain tumor classification from multi-slice MRI.",
    keywords: ["Brain Tumor", "MRI", "CNN"],
    links: [{ label: "View on Google Scholar", href: scholar }],
  },
  {
    id: "lymphoma",
    title:
      "Non-Hodgkin Lymphoma Classification Based on Histopathological Image Using Deep Learning",
    authors: "Hejbulla Asad Shehab, et al.",
    venue: "RTIP2R 2025",
    location: "Morocco",
    year: "2025",
    status: "Accepted",
    description:
      "Deep learning classification of Non-Hodgkin lymphoma from histopathological images.",
    keywords: ["Lymphoma", "Histopathology", "Deep Learning"],
    links: [{ label: "View on Google Scholar", href: scholar }],
  },
  {
    id: "moringa",
    title:
      "Multi-Class Classification of Moringa Leaf Diseases Using CNN Architectures and Vision Transformer",
    authors: "Hejbulla Asad Shehab, et al.",
    venue: "IDAA 2025",
    year: "2025",
    status: "Accepted",
    description:
      "Multi-class classification of Moringa leaf diseases using CNN architectures and a Vision Transformer.",
    keywords: ["Moringa", "Plant Disease", "CNN", "Vision Transformer"],
    links: [{ label: "View on Google Scholar", href: scholar }],
  },
  {
    id: "yolo-safety",
    title:
      "A Systematic Comparison of YOLO Architectures for Automated Multi-Class Safety Equipment Detection on Construction Sites",
    authors: "Hejbulla Asad Shehab, et al.",
    venue: "AICEI",
    location: "Jordan",
    status: "Under Review",
    description:
      "A systematic comparison of YOLO architectures for automated multi-class safety equipment detection on construction sites.",
    keywords: ["YOLO", "Object Detection", "Construction Safety"],
    links: [{ label: "View on Google Scholar", href: scholar }],
  },
];

/* ------------------------------ Projects ------------------------------ */

export interface Project {
  title: string;
  status?: string;
  description: string;
  tech: string[];
  contributions: string[];
  github?: string; // TODO: add the repository URL for each project
  demo?: string; // TODO: add a live demo URL if you have one
}

export const projects: Project[] = [
  {
    title: "Safety Equipment Detection",
    status: "Ongoing",
    description:
      "An object detection project for identifying safety equipment, built with YOLO11.",
    tech: ["Python", "YOLO11", "Object Detection"],
    contributions: [
      "Working with the YOLO11 architecture for safety equipment detection.",
      "Currently in progress (ongoing).",
    ],
  },
  {
    title: "Online Healthcare Management System",
    description:
      "A user-friendly online system for managing healthcare information.",
    tech: ["MySQL", "HTML", "CSS"],
    contributions: [
      "Designed the database with MySQL.",
      "Built the user interface with HTML and CSS.",
    ],
  },
  {
    title: "Data Analysis Projects",
    description:
      "Analysis and visualization of primary datasets and online datasets from Kaggle to support research work.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Kaggle"],
    contributions: [
      "Worked with many primary and online datasets.",
      "Created visualizations to support research findings.",
    ],
    github: "https://github.com/shehab1959",
  },
];

/* ------------------------------- Skills ------------------------------- */

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", items: ["Python", "C", "Java"] },
  {
    title: "Machine Learning & Deep Learning",
    items: ["K-NN", "CNN", "Vision Transformers", "Data Annotation"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    title: "Computer Vision",
    items: ["CNN architectures", "YOLO (YOLO11)", "Image classification"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Kaggle",
      "Google Colab",
      "Jupyter Notebook",
      "Git & GitHub",
      "MySQL",
    ],
  },
  { title: "Web Development", items: ["HTML", "CSS", "Tailwind CSS"] },
  {
    title: "Research & Analytical Skills",
    items: [
      "Academic paper writing",
      "Literature review",
      "Survey preparation",
      "Result analysis",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication & public speaking",
      "Team collaboration",
      "Leadership",
      "Critical thinking & problem solving",
    ],
  },
];

/* ---------------------- Achievements & certificates ---------------------- */

export interface Achievement {
  title: string;
  issuer: string;
  year?: string;
  type: "Certification" | "Volunteering" | "Conference";
}

export const achievements: Achievement[] = [
  {
    title: "ML for Research Bootcamp",
    issuer: "CPC, Daffodil International University",
    year: "2024",
    type: "Certification",
  },
  {
    title: "Data Science & Machine Learning",
    issuer: "Skill Jobs",
    type: "Certification",
  },
  {
    title: "Volunteer, National Data Analytics Competition (NDAC)",
    issuer: "DIU NLP & ML",
    year: "2025",
    type: "Volunteering",
  },
  {
    title: "Papers at international conferences",
    issuer: "ICOIICS (Nepal), ATIS (Australia), RTIP2R (Morocco), IDAA",
    year: "2025",
    type: "Conference",
  },
];

/* ------------------------------ Reference ------------------------------ */

export const reference = {
  name: "Md Sadekur Rahman",
  role: "Assistant Professor & Convener, Division of Research",
  department:
    "Department of Computer Science & Engineering, Daffodil International University",
  email: "sadekur.cse@daffodilvarsity.edu.bd",
};
