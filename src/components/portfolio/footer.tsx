import { useEffect, useState } from "react";
import { ArrowUp, Download, Github, Globe, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marqueeTech, profile } from "@/data/resume";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <Button
      size="icon"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-glow"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </Button>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="section-shell grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <a href="#hero" className="focus-ring flex items-center gap-2 rounded-xl">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-accent font-display text-sm font-bold text-primary-foreground">
              AM
            </span>
            <span className="font-display text-sm font-semibold">{profile.shortName}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Software Engineer · Python Full Stack Developer based in Chennai, India.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { href: profile.github, label: "GitHub profile", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn profile", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email me", Icon: Mail },
              { href: profile.website, label: "Portfolio website", Icon: Globe },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="focus-ring rounded text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {marqueeTech.slice(0, 12).map((t) => (
              <li key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold">Resume</h2>
          <p className="mt-4 text-sm text-muted-foreground">Get the latest single-page PDF.</p>
          <Button asChild size="sm" className="mt-4 rounded-full">
            <a href={resumeAsset.url} download="K-Ameer-Malik-Bahad-Resume.pdf">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="section-shell mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#hero" className="focus-ring inline-flex items-center gap-2 rounded-full text-xs text-muted-foreground hover:text-foreground">
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" /> Back to top
        </a>
      </div>
    </footer>
  );
}
