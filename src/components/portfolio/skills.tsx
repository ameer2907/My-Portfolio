import { Brain, Code2, Database, Layout, Server, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { marqueeTech, skillCategories } from "@/data/resume";

const icons = { Code2, Layout, Server, Database, Brain, Wrench } as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg opacity-70" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title={
            <>
              The stack I <span className="gradient-text">build with</span>
            </>
          }
          description="Languages, frameworks, databases and tooling drawn directly from my coursework, internships and shipped projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon as keyof typeof icons] ?? Code2;
            return (
              <Reveal key={cat.title} delay={i * 0.05}>
                <article className="glass-card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold">{cat.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {cat.skills.map((s) => (
                      <li key={s.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span>{s.name}</span>
                          <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                        </div>
                        <div
                          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
                          role="progressbar"
                          aria-label={`${s.name} proficiency`}
                          aria-valuenow={s.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="h-full rounded-full bg-gradient-accent transition-[width] duration-700"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="marquee-mask mt-16 overflow-hidden py-2" aria-hidden="true">
        <div className="marquee-track flex w-max gap-3">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="glass-panel whitespace-nowrap rounded-full px-5 py-2 font-mono text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
