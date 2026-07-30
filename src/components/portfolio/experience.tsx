import { Briefcase, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./primitives";
import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Internship Experience"
          title={
            <>
              Real teams, <span className="gradient-text">real deployments</span>
            </>
          }
          description="Five months of onsite and applied internship experience across full-stack development and machine learning."
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.06}>
              <article className="glass-card p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="font-mono text-sm text-primary">{exp.period}</p>
                    <p className="text-xs text-muted-foreground">{exp.meta}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
