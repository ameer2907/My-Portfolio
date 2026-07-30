import { GraduationCap, Target, Cpu, Puzzle } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./primitives";
import { education, profile } from "@/data/resume";

const pillars = [
  {
    icon: GraduationCap,
    title: "Who I am",
    body: "A final-year Computer Science Engineering student specialising in Data Science and Artificial Intelligence, with internship experience delivering full-stack web applications in a professional team.",
  },
  {
    icon: Target,
    title: "Career objective",
    body: "To join an engineering team as a Software Developer, Python Developer or Full Stack Developer where I can contribute to production code and grow through code review and collaboration.",
  },
  {
    icon: Cpu,
    title: "Technologies",
    body: "Python, Django, Flask and REST APIs on the backend; HTML5, CSS3, JavaScript and React.js on the frontend; MySQL and MongoDB for data, with Git and GitHub throughout.",
  },
  {
    icon: Puzzle,
    title: "Problem solving",
    body: "Every project starts from the problem statement — the data model, the user journey and the constraints — before a single line of framework code is written.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Engineering mindset, <span className="gradient-text">shipped work</span>
            </>
          }
          description={profile.summary}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="glass-card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="education" className="mt-16 scroll-mt-24">
          <Reveal>
            <h3 className="mb-6 text-center font-display text-2xl font-semibold">Education</h3>
          </Reveal>
          {education.map((e) => (
            <Reveal key={e.degree}>
              <article className="glass-card relative p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{e.degree}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="font-mono text-sm text-primary">{e.period}</p>
                    <p className="text-sm text-muted-foreground">{e.detail}</p>
                  </div>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">Relevant coursework</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <li key={c}>
                      <Tag>{c}</Tag>
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
