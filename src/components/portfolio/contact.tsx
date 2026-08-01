import { useState, type FormEvent } from "react";
import { Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./primitives";
import { profile } from "@/data/resume";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast.success("Opening your email client…", { description: "Your message is pre-filled and ready to send." });
    setSending(false);
  };

  const channels = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, label: "Location", value: profile.location },
    { Icon: Github, label: "GitHub", value: "github.com/ameer2907", href: profile.github },
    { Icon: Linkedin, label: "LinkedIn", value: "ameer-malik-bahad07", href: profile.linkedin },
    { Icon: Globe, label: "Portfolio", value: "ameer-malik.netlify.app", href: profile.website },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg opacity-70" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build <span className="gradient-text">something together</span>
            </>
          }
          description="Available for entry-level Software Developer, Python Developer and Full Stack Developer roles."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-card grid gap-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" name="subject" required placeholder="Opportunity, project or question" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" name="message" required rows={6} placeholder="Tell me a little about the role or project…" />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="mt-2 justify-self-start rounded-full">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card h-full p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Direct channels</h3>
              <ul className="mt-5 space-y-3">
                {channels.map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="focus-ring flex items-center gap-3 rounded-xl border border-border/70 p-3 transition-colors hover:border-primary/40 hover:bg-secondary/50"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">{label}</span>
                          <span className="block text-sm font-medium">{value}</span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-xl border border-border/70 p-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">{label}</span>
                          <span className="block text-sm font-medium">{value}</span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Languages: {profile.languages.join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
