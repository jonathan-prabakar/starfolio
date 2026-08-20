import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative transition-all duration-300 ease-out hover:ring-1 hover:ring-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" aria-hidden />
          <img
            src="/pfp2.jpg"
            alt={DATA.name}
            className="relative size-24 rounded-full border-2 border-primary/30 object-cover shadow-lg ring-4 ring-primary/10 sm:size-32"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {DATA.sections.contact.heading}
          </h2>
          <p className="max-w-lg text-balance text-muted-foreground">
            {DATA.sections.contact.text}
          </p>
        </div>
        <a
          href="mailto:jonathanprabakar@gmail.com"
          className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:ring-2 hover:ring-primary/30"
        >
          <Mail className="size-4" />
          Contact Me
        </a>
      </div>
