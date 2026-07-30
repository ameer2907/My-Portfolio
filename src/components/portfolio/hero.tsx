import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Globe, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/resume";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import profilePhoto from "@/assets/profile-photo-new.jpg";

const roles = ["Software Engineer", "Python Full Stack Developer", "Django & Flask Developer", "React.js Frontend Developer"];

function Typing() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(roles[0]);
      return;
    }
    const current = roles[index % roles.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => i + 1);
          return;
        }
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 35 : 70,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, reduce]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="animate-caret" aria-hidden="true">
        |
      </span>
    </span>
  );
}

const floatingTech = [
  { label: "Py", top: "12%", left: "6%", delay: "0s" },
  { label: "Dj", top: "68%", left: "3%", delay: "1.2s" },
  { label: "JS", top: "18%", left: "90%", delay: "0.6s" },
  { label: "{ }", top: "74%", left: "88%", delay: "1.8s" },
  { label: "SQL", top: "44%", left: "94%", delay: "2.4s" },
];

export default function Hero() {
  const socials = [
    { href: profile.github, label: "GitHub profile", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn profile", Icon: Linkedin },
    { href: `mailto:${profile.email}`, label: "Send an email", Icon: Mail },
    { href: profile.website, label: "Personal website", Icon: Globe },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        {floatingTech.map((t) => (
          <span
            key={t.label}
            className="glass-panel absolute grid h-12 w-12 animate-float-soft place-items-center rounded-2xl font-mono text-xs text-muted-foreground"
            style={{ top: t.top, left: t.left, animationDelay: t.delay }}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to entry-level Software Developer roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            K. Ameer
            <br />
            <span className="gradient-text">Malik Bahad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-lg text-foreground/90 sm:text-xl"
          >
            <Typing />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full shadow-glow">
              <a href={resumeAsset.url} download="K-Ameer-Malik-Bahad-Resume.pdf">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href="#contact">
                <Send className="h-4 w-4" /> Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring glass-panel grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            ))}
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass-card overflow-hidden p-3">
            <img
              src={profilePhoto}
              alt="Portrait of K. Ameer Malik Bahad"
              width={640}
              height={800}
              loading="eager"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
            <div className="flex items-center justify-between px-2 py-3">
              <div>
                <p className="font-display text-sm font-semibold">B.Tech CSE — Data Science & AI</p>
                <p className="text-xs text-muted-foreground">Class of 2026 · CGPA 7.58</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary">Available</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-shell mt-16">
        <a
          href="#about"
          className="focus-ring mx-auto flex w-fit items-center gap-2 rounded-full text-xs text-muted-foreground"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" /> Scroll to explore
        </a>
      </div>
    </section>
  );
}
