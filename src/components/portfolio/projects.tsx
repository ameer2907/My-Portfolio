import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal, SectionHeading, Tag } from "./primitives";
import { projectFilters, projects, type Project } from "@/data/resume";
import { cn } from "@/lib/utils";

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="glass-card group flex h-full flex-col overflow-hidden hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-accent/10">
        <div className="absolute inset-0 grid place-items-center bg-gradient-accent opacity-10 transition-opacity duration-300 group-hover:opacity-20" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-4xl font-bold text-foreground/15">{p.name.slice(0, 2).toUpperCase()}</span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
          {p.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 font-mono text-[11px] text-primary-foreground">
          {p.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug">{p.name}</h3>
          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{p.duration}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Problem</dt>
            <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Solution</dt>
            <dd className="mt-1 text-muted-foreground">{p.solution}</dd>
          </div>
        </dl>

        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-muted-foreground">
          <span className="text-xs uppercase tracking-[0.14em]">Challenges · </span>
          {p.challenges}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-2 pt-2">
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
          {p.demo && (
            <Button asChild size="sm" className="rounded-full">
              <a href={p.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProject() {
  const p = projects.find((x) => x.featured) ?? projects[0];
  return (
    <section id="featured" className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Project"
          title={
            <>
              My strongest <span className="gradient-text">engineering build</span>
            </>
          }
        />
        <Reveal>
          <article className="glass-card grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-accent/10">
              <div className="absolute inset-0 bg-gradient-accent opacity-10" />
              <div className="grid aspect-[4/3] place-items-center">
                <span className="px-6 text-center font-display text-2xl font-bold text-foreground/25">
                  {p.name}
                </span>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                <Star className="h-3.5 w-3.5" aria-hidden="true" /> {p.duration} · {p.status}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <h4 className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">Architecture</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Arduino sensor layer → Python data pipeline (Pandas/NumPy) → machine learning models (Random Forest, LSTM)
                → route optimisation output for collection planning.
              </p>

              <h4 className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">Key features</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">Technology stack</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex gap-2">
                <Button asChild className="rounded-full">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Code
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#projects">All projects</a>
                </Button>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchFilter = filter === "All" || p.tags.includes(filter);
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchFilter && matchQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg opacity-60" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Six builds, <span className="gradient-text">five deployed live</span>
            </>
          }
          description="Each project below documents the problem, the approach and the technologies used."
        />

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "focus-ring rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === f
                    ? "border-transparent bg-gradient-accent text-primary-foreground"
                    : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="rounded-full pl-9"
            />
          </div>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">No projects match that search.</p>
        )}
      </div>
    </section>
  );
}
