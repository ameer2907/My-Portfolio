import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./primitives";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Resume"
          title={
            <>
              Preview or download my <span className="gradient-text">full resume</span>
            </>
          }
          description="An ATS-friendly, single-page PDF covering skills, internships, projects, education and certifications."
        />

        <Reveal>
          <div className="glass-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">K. Ameer Malik Bahad — Resume</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Updated for 2026 graduation. Includes Python full-stack internship experience, six projects and ten
                certifications.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full">
                  <a href={resumeAsset.url} download="K-Ameer-Malik-Bahad-Resume.pdf">
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={resumeAsset.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Open in new tab
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40">
              <object
                data={resumeAsset.url}
                type="application/pdf"
                title="Resume preview for K. Ameer Malik Bahad"
                className="h-[480px] w-full"
              >
                <p className="p-6 text-sm text-muted-foreground">
                  Your browser cannot display PDFs inline.{" "}
                  <a className="text-primary underline" href={resumeAsset.url} target="_blank" rel="noopener noreferrer">
                    Open the resume in a new tab
                  </a>
                  .
                </p>
              </object>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
