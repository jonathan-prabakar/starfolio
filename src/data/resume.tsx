import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { SQL } from "@/components/ui/svgs/sql";
import { TailwindCSS } from "@/components/ui/svgs/tailwind";


export const DATA = {
  name: "Jonathan Gladwin Prabakar - CS + Statistics student",
  initials: "JP",
  url: "https://astrofolio.jonprabakar9.workers.dev/",
  location: "San Antonio, TX",
  locationLink: "https://www.google.com/maps/place/san_antonio+tx",
  description:
    "Welcome to my Personal Portfolio! I'm an innovative and persistent CS student, eager to learn and solve problems in a project-based environment.",
  summary:
    "Current 2nd year undergraduate student majoring in Computer Science. As part of my education, I am an USAA Ascent Scholar, PatientRAG Research Assistant, UTS Bold Careers Intern, and Dean's List recipient. :)",
  avatarUrl: "/photos/jonathan-headshot.png",
  ogImage: "/photos/jonathan-headshot.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    resume: { order: 1.5, enabled: true, heading: "Resume", url: "/resume.pdf" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: true,
      label: "Hackathons",
      heading: "I like building things",
      text: "As a 2nd year student, I have attended 3+ hackathons and am continuing to go to more. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a DM with a direct question at +1 (210) 702 0550 and I'll respond whenever I can.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "SQL", icon: SQL },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "jonathanprabakar@gmail.com",
    tel: "+1 512 000 0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jonathan-prabakar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jonathangladwinprabakar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jonathanprabakar@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "University of Texas at San Antonio",
      href: "https://utsa.edu",
      degree: "Bachelor of Science, Computer Science + Statistics",
      logoUrl: "https://www.google.com/s2/favicons?domain=utsa.edu&sz=128",
      start: "2025",
      end: "2028",
    },
  ],
  work: [
    {
      company: "CodePath",
      href: "https://www.codepath.org",
      badges: ["Founder"],
      location: "Remote",
      title: "Apprenticeship",
      logoUrl: "/photos/codepath_logo.jpeg",
      start: "Jun 2026",
      end: undefined,
      description:
        "Up-skilling in a 10-week applied AI engineering program focused on supervised, project-based development, Python, RAG, debugging, testing, and Git version control. Building software and AI projects while applying responsible AI and modern development practices.",
    },
    {
      company: "Cohort for AI Responsibility",
      href: "https://careonline.github.io",
      badges: [],
      location: "San Antonio, TX",
      title: "Undergraduate Research Assistant",
      logoUrl: "/photos/Screenshot 2026-08-03 at 7.30.21 AM.png",
      start: "Nov 2025",
      end: undefined,
      description:
        "Integrated RAG with Llama LLMs and clinical ICD-10 datasets to generate structured diagnostic queries for patients and physicians. Built a Streamlit frontend for intuitive interaction with RAG pipeline and LLMs.",
    },
    {
      company: "ServiceNow",
      href: "https://cloudflare.com",
      badges: [],
      location: "Remote",
      title: "Application Developer Intern",
      logoUrl: "/photos/f22b1014db13e380d6a102d5ca9619e4.jpg.avif",
      start: "Jan 2026",
      end: "May 2026",
      description:
        "Developed custom enterprise applications on the ServiceNow platform, automating business workflows with native JavaScript. Designed automated approval and routing processes, reducing manual overhead and improving cross-department systems efficiency.",
    },
    {
      company: "San Antonio Math Include",
      href: "https://datadoghq.com",
      badges: [],
      location: "San Antonio, TX",
      title: "Python Programming Instructor (ages 8-10)",
      logoUrl: "/photos/images.jpeg",
      start: "June 2023",
      end: "Aug 2023",
      description:
        "Tutored students in Python programming, applying coding to solve math problems, enhancing skills in algorithms, data structures, and computational logic.",
    },
    
  ],
  projects: [
    {
      title: "The Real SaaS — Direct Solution",
      href: "https://jonathanp567538.substack.com/p/the-real-saas",
      dates: "August 2026",
      active: true,
      description:
        "Featured Substack essay on why modern SaaS should produce outcomes, not workflows — arguing for customer-obsessed, service-based delivery over forcing tool adoption and data migration.",
      technologies: ["Substack", "Writing", "SaaS", "Product Strategy"],
      links: [
        {
          type: "Read",
          href: "https://jonathanp567538.substack.com/p/the-real-saas",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://substackcdn.com/image/fetch/$s_!-Ck-!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fjonathanp567538.substack.com%2Fapi%2Fv1%2Fpost_preview%2F210982090%2Ftwitter.jpg%3Fversion%3D4",
      video: "",
    },
    {
      title: "GrowFi",
      href: "https://teamgrowfi.netlify.app",
      dates: "September 2025",
      active: true,
      description:
        "HackRice 2025 winner (sponsored by Goldman Sachs). A gamified financial literacy app for underbanked users with merit-based rewards and secure Face ID verification.",
      technologies: ["React", "TypeScript", "Node.js", "Face ID", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://teamgrowfi.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Devpost",
          href: "https://devpost.com/software/growfi",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Shepherd",
      href: "https://www.shepherdtech.app",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Built a full-stack pastoral intelligence platform for 5+ churches with Next.js and PostgreSQL, integrated with Planning Center API.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "OpenRouter API",
        "Git",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.shepherdtech.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/android-chrome-192x192.png",
      video: "",
    },
    {
      title: "IntelliTunes",
      href: "https://applied-ai-system-project-hqihrarg7-jons-projects-47bdb2c8.vercel.app",
      dates: "July 2026 - Present",
      active: true,
      description:
        "IntelliTunes is a self-correcting music recommender agent. It recommends the top *k* songs from a small catalog that best match a user's stated taste profile (favorite genre, mood, target energy, danceability, and acoustic preference). Each recommendation comes with a plain-language explanation of why it was picked. It also has an evaluation harness that runs the agent over taste profiles and a score summary as well as a CI check.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "TailwindCSS",
        "FastAPI UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://applied-ai-system-project-hqihrarg7-jons-projects-47bdb2c8.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jonathan-prabakar/applied-ai-system-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

  ],
  hackathons: [
    {
      title: "CodeQuantum 2026",
      dates: "March 2026",
      location: "San Antonio, TX",
      description: "Built a Python backend using pandas for data processing and scikit-learn's Logistic Regression to train a binary classifier on historical lap time and race result data. We exposed the model through a Flask REST API with CORS support and connected it to a React frontend dashboard.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      win: undefined,
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/project-dg76x0bvnmjh",
        },
      ],
    },
    {
      title: "HackTX 2025",
      dates: "October 2025",
      location: "Austin, Texas",
      description: "Built Streamlit F1 dashboard, integrated AI commentary, optimized track simulation, and implemented predictive analytics for race outcomes.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: undefined,
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/real-time-race-strategy",
        },
      ],
    },
    {
      title: "HackRice 2025",
      dates: "September 2025",
      location: "Houston, TX",
      description: "Built a gamified financial literacy app for underbanked users with merit-based rewards and secure Face ID Verification.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      win: "Winner - sponsored by Goldman Sachs",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/growfi",
        },
      ],
    },
  ],
} as const;
