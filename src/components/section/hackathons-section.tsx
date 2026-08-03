/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Trophy } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">{DATA.sections.hackathons.label}</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{DATA.sections.hackathons.heading}</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {DATA.sections.hackathons.text.replace("{count}", String(DATA.hackathons.length))}
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon, index) => {
            const isWinner = Boolean(hackathon.win);
            const reduceMotion = useReducedMotion();
            return (
            <motion.div
              key={hackathon.title + hackathon.dates}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
            >
              <TimelineItem className="w-full flex items-start justify-between gap-3 sm:gap-6">
                <TimelineConnectItem className="flex items-start justify-center">
                  {hackathon.image ? (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className={`size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none ${isWinner ? "ring-amber-400" : ""}`}
                    />
                  ) : (
                    <div className={`size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none ${isWinner ? "ring-amber-400" : ""}`} />
                  )}
                </TimelineConnectItem>
                <div className={`flex flex-1 flex-col justify-start gap-2 min-w-0 ${isWinner ? "rounded-xl border-2 border-amber-400/70 bg-amber-50/40 dark:bg-amber-500/5 shadow-[0_0_20px_-4px] shadow-amber-400/40 p-4 -m-1 transition-all duration-300 ease-out hover:shadow-[0_0_28px_-2px] hover:shadow-amber-400/60 hover:-translate-y-0.5" : "rounded-xl transition-all duration-300 ease-out hover:bg-muted/40 hover:ring-1 hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 p-2 -m-2"}`}>
                  {hackathon.dates && (
                    <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                  )}
                  {hackathon.title && (
                    <h3 className="font-semibold leading-none flex flex-wrap items-center gap-2">
                      <span>{hackathon.title}</span>
                      {isWinner && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2 py-0.5 text-xs font-semibold text-amber-950">
                          <Trophy className="h-3 w-3 shrink-0" /> {hackathon.win}
                        </span>
                      )}
                    </h3>
                  )}
                  {hackathon.location && (
                    <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                  )}
                  {hackathon.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                      {hackathon.description}
                    </p>
                  )}
                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {hackathon.links.map((link, idx) => (
                        <a
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                            {link.icon}
                            {link.title}
                          </Badge>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </TimelineItem>
            </motion.div>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}