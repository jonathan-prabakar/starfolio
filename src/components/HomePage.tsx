import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import ResumeSection from "@/components/section/resume-section";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const BLUR_FADE_DELAY = 0.04;

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-primary via-primary/70 to-primary"
    />
  );
}

function SectionDots({ sections }: { sections: string[] }) {
  return (
    <nav className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          className="pointer-events-auto size-2.5 rounded-full bg-muted-foreground/30 ring-1 ring-border transition-all duration-200 hover:scale-150 hover:bg-primary"
        />
      ))}
    </nav>
  );
}

function SectionReveal({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const sectionComponents: Record<string, React.ReactNode> = {
  about: (
    <SectionReveal>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{DATA.sections.about.heading}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
    </SectionReveal>
  ),
  resume: (
    <SectionReveal>
      <section id="resume">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <ResumeSection />
        </BlurFade>
      </section>
    </SectionReveal>
  ),
  work: (
    <SectionReveal>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{DATA.sections.work.heading}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
    </SectionReveal>
  ),
  education: (
    <SectionReveal>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{DATA.sections.education.heading}</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 justify-between group rounded-lg transition-all duration-300 ease-out hover:bg-muted/40 hover:ring-1 hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 p-2 -m-2"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        <span className="truncate">{education.school}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none pl-0 sm:pl-3">
                    <span className="whitespace-nowrap">{education.start} - {education.end}</span>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  ),
  skills: (
    <SectionReveal>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{DATA.sections.skills.heading}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 transition-all duration-300 ease-out hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  ),
  projects: (
    <SectionReveal>
      <section id="projects">
        <ProjectsSection />
      </section>
    </SectionReveal>
  ),
  hackathons: (
    <SectionReveal>
      <section id="hackathons">
        <HackathonsSection />
      </section>
    </SectionReveal>
  ),
  photos: (
    <SectionReveal>
      <PhotosSection />
    </SectionReveal>
  ),
  contact: (
    <SectionReveal>
      <section id="contact">
        <ContactSection />
      </section>
    </SectionReveal>
  ),
};

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <ScrollProgress />
      <SectionDots sections={["hero", ...orderedSections]} />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl bg-gradient-to-b from-foreground via-foreground to-zinc-400 dark:to-zinc-500 bg-clip-text text-transparent drop-shadow-sm"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2} className="mt-2">
                <a
                  href="mailto:jonathanprabakar@gmail.com"
                  className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:ring-2 hover:ring-primary/30"
                >
                  <Mail className="size-4" />
                  Contact Me
                </a>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="relative w-fit">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-full bg-[conic-gradient(from_180deg,theme(colors.primary/25%),transparent,theme(colors.zinc.400/25%),transparent)] blur-2xl motion-safe:animate-pulse"
                />
                <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      {orderedSections.map((key) => (
        <React.Fragment key={key}>
          {sectionComponents[key]}
        </React.Fragment>
      ))}
    </main>
  );
}