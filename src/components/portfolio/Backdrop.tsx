import { useEffect, useRef } from "react";

/** Fixed background: grid, aurora blobs, particles and a mouse-following glow. */
export function Backdrop() {
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;
    if (glow && !reduced) {
      let raf = 0;
      const onMove = (e: MouseEvent) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          glow.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
          glow.style.opacity = "1";
        });
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
      };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
      r: Math.random() * 1.6 + 0.4,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > 1) d.vx *= -1;
        if (d.y < 0 || d.y > 1) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125, 232, 255, 0.35)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-primary/12 blur-[130px] float-slow" />
      <div className="absolute top-1/3 -right-40 size-[36rem] rounded-full bg-accent/12 blur-[140px] float-slow" />
      <div className="absolute bottom-0 left-1/3 size-[30rem] rounded-full bg-electric/10 blur-[130px]" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-70" />
      <div
        ref={glowRef}
        className="absolute top-0 left-0 size-[600px] rounded-full bg-primary/8 opacity-0 blur-[110px] transition-opacity duration-500"
      />
    </div>
  );
}
