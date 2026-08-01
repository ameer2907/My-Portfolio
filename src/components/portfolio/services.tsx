import {
  Boxes,
  Code2,
  Feather,
  FolderGit2,
  GraduationCap,
  Layers,
  Layout,
  Lightbulb,
  Plug,
  Quote,
  Rocket,
  Server,
  Shuffle,
  Smartphone,
  Sparkles,
  Users,
  Briefcase,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { services, whyHireMe } from "@/data/resume";

const icons = {
  Code2,
  Layers,
  Feather,
  Plug,
  Layout,
  Smartphone,
  Server,
  Boxes,
  GraduationCap,
  Lightbulb,
  Briefcase,
  FolderGit2,
  Sparkles,
  Rocket,
  Users,
  Shuffle,
} as const;

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg opacity-60" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I can <span className="gradient-text">build for you</span>
            </>
          }
          description="Capabilities grounded in my internship work, coursework and deployed projects."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons] ?? Code2;
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <article className="glass-card h-full p-6 transition-transform hover:-translate-y-1">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Hire Me"
          title={
            <>
              A fresher who already <span className="gradient-text">ships</span>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireMe.map((w, i) => {
            const Icon = icons[w.icon as keyof typeof icons] ?? Sparkles;
            return (
              <Reveal key={w.title} delay={i * 0.04}>
                <article className="glass-card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Testimonials <span className="gradient-text">Coming Soon</span>
            </>
          }
        />
        <Reveal>
          <article className="glass-card mx-auto flex max-w-2xl flex-col items-center border-dashed p-8 text-center">
            <Quote className="h-6 w-6 text-primary/50" aria-hidden="true" />
            <p className="mt-4 text-sm text-muted-foreground">
              Recommendations from mentors and internship supervisors will be added here once available.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
