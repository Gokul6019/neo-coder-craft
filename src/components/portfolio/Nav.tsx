import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm tracking-[0.2em] text-primary">
          &gt;_ gokul<span className="text-foreground">.dev</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                active === i.id && "text-primary",
              )}
            >
              {i.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-border p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/70 bg-background/95 px-5 pb-4 md:hidden"
        >
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 text-sm text-muted-foreground hover:text-primary"
            >
              {i.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
