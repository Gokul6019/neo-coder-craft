import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Github, Mail, Terminal } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Reveal } from "./atoms";

const lines = [
  { prompt: "gokul@niat:~$", cmd: "whoami" },
  { prompt: "", out: "Gokul Raj V — B.Tech CSE (AI & ML), 1st Year" },
  { prompt: "gokul@niat:~$", cmd: "cat mission.txt" },
  { prompt: "", out: profile.terminalLine },
  { prompt: "gokul@niat:~$", cmd: "status --learning" },
  { prompt: "", out: "python · ai/ml · dsa · web · automation · git" },
];

function useTypedScript() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(lines.length);
      return;
    }
    if (step >= lines.length) return;
    const line = lines[step];
    const text = line.cmd ?? line.out ?? "";
    if (line.out) {
      const t = setTimeout(() => setStep((s) => s + 1), 380);
      return () => clearTimeout(t);
    }
    if (typed.length < text.length) {
      const t = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), 45);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setStep((s) => s + 1);
      setTyped("");
    }, 320);
    return () => clearTimeout(t);
  }, [step, typed]);

  return { step, typed };
}

export function Hero() {
  const { step, typed } = useTypedScript();

  return (
    <section id="top" className="relative px-5 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Available to learn & build
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-aurora aurora-shift">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-4 font-display text-lg text-foreground/90 md:text-2xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.role} · {profile.specialization}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="neon" size="lg">
                <a href="#projects">
                  View Projects <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outlineGlow" size="lg">
                <a href="#contact">
                  Connect With Me <Mail className="size-4" />
                </a>
              </Button>
              <Button asChild variant="ghostGlow" size="lg">
                <a
                  href={profile.resumeUrl || "#contact"}
                  {...(profile.resumeUrl ? { download: true } : {})}
                  aria-label={
                    profile.resumeUrl
                      ? "Download resume"
                      : "Resume coming soon — contact me instead"
                  }
                >
                  <Download className="size-4" />
                  {profile.resumeUrl ? "Download Resume" : "Resume — coming soon"}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="glass-panel scanlines relative overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/80" />
              <span className="size-2.5 rounded-full bg-chart-5/80" />
              <span className="size-2.5 rounded-full bg-signal/80" />
              <span className="ml-3 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Terminal className="size-3.5" /> gokul@niat — bash
              </span>
            </div>
            <div className="min-h-[19rem] space-y-2 p-5 font-mono text-[13px] leading-relaxed md:text-sm">
              {lines.slice(0, step).map((l, i) => (
                <p key={i} className={l.out ? "text-muted-foreground" : "text-foreground"}>
                  {l.prompt ? <span className="text-primary">{l.prompt} </span> : null}
                  {l.cmd ?? l.out}
                </p>
              ))}
              {step < lines.length ? (
                <p className="text-foreground">
                  <span className="text-primary">{lines[step].prompt} </span>
                  {typed}
                  <span className="caret-blink text-primary">▊</span>
                </p>
              ) : (
                <p className="text-foreground">
                  <span className="text-primary">gokul@niat:~$ </span>
                  <span className="caret-blink text-primary">▊</span>
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-border/70 px-5 py-3 font-mono text-[11px] text-muted-foreground">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 hover:text-primary"
              >
                <Github className="size-3.5" /> Gokul6019
              </a>
              <span aria-hidden>·</span>
              <span>uptime: learning, daily</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
