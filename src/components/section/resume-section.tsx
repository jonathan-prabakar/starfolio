import { DATA } from "@/data/resume";
import { Download, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const url = DATA.sections.resume.url;
  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold">{DATA.sections.resume.heading}</h2>
        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-primary/30"
          >
            <ExternalLink className="size-3.5" /> Open
          </a>
          <a
            href={url}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-primary/30"
          >
            <Download className="size-3.5" /> Download
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm ring-2 ring-border/20">
        <object
          data={`${url}#view=FitH&toolbar=1`}
          type="application/pdf"
          className="h-[560px] w-full"
        >
          <iframe
            src={`${url}#view=FitH`}
            title="Resume"
            className="hidden h-[560px] w-full sm:block"
          />
          <div className="flex h-[280px] flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Your browser can&apos;t display the embedded PDF.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-primary/30"
              >
                <ExternalLink className="size-3.5" /> Open resume
              </a>
              <a
                href={url}
                download
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-primary/30"
              >
                <Download className="size-3.5" /> Download
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
}
