import { Award, GraduationCap, Milestone, Rocket, Briefcase } from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./primitives";
import { certifications, highlights, stats, timeline } from "@/data/resume";

const typeIcon = {
  Education: GraduationCap,
  Internship: Briefcase,
  Projects: Rocket,
  Milestone: Milestone,
} as const;

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              From coursework to <span className="gradient-text">shipped software</span>
            </>
          }
          description="Education, internships and project milestones in order."
        />

        <ol className="relative mx-auto max-w-3xl border-l border-border pl-6 sm:pl-10">
          {timeline.map((t, i) => {
            const Icon = typeIcon[t.type as keyof typeof typeIcon] ?? Milestone;
            return (
              <Reveal as="li" key={`${t.year}-${t.title}`} delay={i * 0.05} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.05rem] grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-primary sm:-left-[3.3rem]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="glass-card p-5">
                  <p className="font-mono text-xs text-primary">{t.year} · {t.type}</p>
                  <h3 className="mt-1.5 text-base font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Ten credentials in <span className="gradient-text">data, cloud & security</span>
            </>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <article className="glass-card flex h-full items-start gap-3 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-snug">{c}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section aria-label="Key statistics" className="relative py-16">
      <div className="section-shell">
        <div className="glass-card grid gap-6 p-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center">
              <p className="font-display text-3xl font-bold gradient-text">
                <Counter value={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Highlights() {
  return (
    <section id="highlights" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Highlights"
          title={
            <>
              What the last two years <span className="gradient-text">produced</span>
            </>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05}>
              <article className="glass-card h-full p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{h.label}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed">{h.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
