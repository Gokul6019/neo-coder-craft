import { useState } from "react";
import {
  Award,
  BrainCircuit,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  achievements,
  certificates,
  education,
  learningSkills,
  profile,
  projects,
  strengths,
  timeline,
} from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading, StatusChip, Tag } from "./atoms";

function Shell({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative scroll-mt-24 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <Shell id="about">
      <SectionHeading index="01 / about" title="Learning in public, building on purpose" />
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="glass-panel p-7 md:p-9">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {profile.about}
          </p>
        </Reveal>
        <Reveal delay={120} className="grid gap-4">
          {[
            { icon: GraduationCap, label: "Program", value: "B.Tech CSE — AI & ML" },
            { icon: BrainCircuit, label: "Focus", value: "Python, AI/ML, DSA" },
            { icon: Rocket, label: "Goal", value: "Software & AI engineer" },
          ].map((c) => (
            <div key={c.label} className="glass-panel flex items-center gap-4 p-5">
              <span className="grid size-10 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </span>
              <span>
                <span className="block font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {c.label}
                </span>
                <span className="text-sm font-medium">{c.value}</span>
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </Shell>
  );
}

export function Skills() {
  return (
    <Shell id="skills">
      <SectionHeading
        index="02 / skills"
        title="Skill matrix"
        subtitle="An honest snapshot: what I am actively learning, and the strengths that are growing alongside it."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-mono text-xs tracking-[0.25em] text-primary uppercase">
            Currently Learning
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {learningSkills.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 60} className="glass-panel group p-4">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Terminal className="size-4 text-primary" />
                  {s.name}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{s.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-mono text-xs tracking-[0.25em] text-accent uppercase">
            Growing Strengths
          </h3>
          <ul className="grid gap-3">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 60} className="glass-panel p-4">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="size-4 text-accent" />
                  {s.name}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">{s.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Shell>
  );
}

export function Education() {
  return (
    <Shell id="education">
      <SectionHeading index="03 / education" title="NIAT × SVYASA University, Bengaluru" />
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <Reveal className="glass-panel glow-ring-violet p-7 md:p-9">
          <span className="grid size-11 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
            <GraduationCap className="size-5" />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold">{education.institute}</h3>
          <p className="mt-2 text-sm text-foreground/90">{education.degree}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.specialization}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.campus}</p>
          <div className="mt-5">
            <StatusChip status={education.status} />
          </div>

          <h4 className="mt-8 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
            Certificates
          </h4>
          <ul className="mt-3 space-y-2">
            {certificates.map((c) => (
              <li
                key={c.title}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/70 bg-secondary/40 px-4 py-3 text-sm"
              >
                <span>{c.title}</span>
                <StatusChip status={c.status} />
              </li>
            ))}
          </ul>
        </Reveal>

        <ol className="relative border-l border-border/80 pl-6">
          {timeline.map((t, i) => (
            <Reveal as="li" key={`${t.year}-${t.label}`} delay={i * 80} className="mb-7 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 size-3 rounded-full border border-primary bg-background shadow-[0_0_14px_var(--neon)]" />
              <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                {t.year}
              </span>
              <p className="mt-1 text-sm text-foreground/90">{t.label}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Shell>
  );
}

export function Projects() {
  return (
    <Shell id="projects">
      <SectionHeading
        index="04 / projects"
        title="Project bays"
        subtitle="Placeholder slots, ready to be filled with real builds. Nothing here is claimed as finished."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="glass-panel flex flex-col overflow-hidden">
            <div
              className={`scanlines relative h-36 border-b border-border/70 ${
                p.accent === "neon"
                  ? "bg-primary/12"
                  : p.accent === "violet"
                    ? "bg-accent/12"
                    : "bg-electric/12"
              }`}
            >
              <div className="absolute inset-0 grid-backdrop opacity-60" />
              <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                visual placeholder
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outlineGlow" size="sm">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{p.title}</DialogTitle>
                      <DialogDescription>{p.details}</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  asChild={Boolean(p.github)}
                  variant="ghostGlow"
                  size="sm"
                  disabled={!p.github}
                >
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noreferrer noopener">
                      <Github className="size-4" /> Code
                    </a>
                  ) : (
                    <span>
                      <Github className="size-4" /> Code
                    </span>
                  )}
                </Button>
                <Button asChild={Boolean(p.demo)} variant="ghostGlow" size="sm" disabled={!p.demo}>
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noreferrer noopener">
                      Live Demo
                    </a>
                  ) : (
                    <span>Live Demo</span>
                  )}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function Achievements() {
  return (
    <Shell id="achievements">
      <SectionHeading
        index="05 / achievements"
        title="Milestone tracker"
        subtitle="Reserved slots for certificates, hackathons, internships and contributions as they actually happen."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 80} className="glass-panel p-6">
            <span className="grid size-10 place-items-center rounded-lg border border-signal/40 bg-signal/10 text-signal">
              <Award className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.note}</p>
            <div className="mt-4">
              <StatusChip status={a.status} />
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function GitHubSection() {
  const cells = Array.from({ length: 371 }, (_, i) => i);
  return (
    <Shell id="github">
      <SectionHeading
        index="06 / github"
        title="Commit console"
        subtitle="An illustrative contribution grid — not live GitHub data. Visit the profile for real activity."
      />
      <Reveal className="glass-panel p-6 md:p-8">
        <div className="overflow-x-auto">
          <div
            aria-hidden
            className="grid w-max grid-flow-col grid-rows-7 gap-[3px]"
          >
            {cells.map((i) => {
              const level = (Math.sin(i * 1.37) + 1) / 2;
              const cls =
                level > 0.82
                  ? "bg-primary"
                  : level > 0.62
                    ? "bg-primary/60"
                    : level > 0.4
                      ? "bg-primary/30"
                      : "bg-secondary/70";
              return <span key={i} className={`size-[10px] rounded-[2px] ${cls}`} />;
            })}
          </div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Illustrative visual only. Connect a GitHub integration later to show live contributions.
        </p>
        <div className="mt-6">
          <Button asChild variant="neon" size="lg">
            <a href={profile.links.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" /> View GitHub Profile
            </a>
          </Button>
        </div>
      </Reveal>
    </Shell>
  );
}

export function Contact() {
  type FieldErrors = { name?: string; email?: string; message?: string };
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: FieldErrors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    window.location.href = `mailto:${profile.links.email}?subject=${encodeURIComponent(
      `Portfolio message from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    setSent(true);
  };

  const field =
    "mt-1 w-full rounded-lg border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none";

  return (
    <Shell id="contact">
      <SectionHeading
        index="07 / contact"
        title="Open a channel"
        subtitle="Happy to connect about learning, projects and opportunities."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="grid content-start gap-4">
          <Button asChild variant="outlineGlow" size="lg" className="justify-start">
            <a href={profile.links.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outlineGlow" size="lg" className="justify-start">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="neon" size="lg" className="justify-start">
            <a href={`mailto:${profile.links.email}`}>
              <Mail className="size-4" /> Send Email
            </a>
          </Button>
          <p className="font-mono text-xs text-muted-foreground">{profile.links.email}</p>
        </Reveal>

        <Reveal delay={120} className="glass-panel p-6 md:p-8">
          <form onSubmit={onSubmit} noValidate className="grid gap-4">
            <div>
              <label htmlFor="name" className="font-mono text-xs tracking-wide text-muted-foreground">
                Name
              </label>
              <input id="name" name="name" className={field} placeholder="Your name" />
              {errors.name ? (
                <p className="mt-1 text-xs text-destructive">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs tracking-wide text-muted-foreground">
                Email
              </label>
              <input id="email" name="email" type="email" className={field} placeholder="you@example.com" />
              {errors.email ? (
                <p className="mt-1 text-xs text-destructive">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs tracking-wide text-muted-foreground">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className={field} placeholder="Say hello…" />
              {errors.message ? (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>
            <Button type="submit" variant="neon" size="lg">
              Send Message
            </Button>
            <p aria-live="polite" className="text-xs text-muted-foreground">
              {sent
                ? "Your email app should now be open with the message ready to send."
                : "This form opens your email app. Automatic email delivery can be configured later."}
            </p>
          </form>
        </Reveal>
      </div>
    </Shell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          Designed and built by {profile.name}
        </p>
        <nav aria-label="Footer" className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
