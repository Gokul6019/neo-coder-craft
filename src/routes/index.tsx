import { createFileRoute } from "@tanstack/react-router";
import { Backdrop } from "@/components/portfolio/Backdrop";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Achievements,
  Contact,
  Education,
  Footer,
  GitHubSection,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gokul Raj V — Aspiring Software Engineer & AI/ML Developer" },
      {
        name: "description",
        content:
          "Portfolio of Gokul Raj V, 1st year B.Tech CSE (AI & ML) student at NIAT × SVYASA University, Bengaluru — Python, AI/ML, DSA and web development.",
      },
      { property: "og:title", content: "Gokul Raj V — Software & AI/ML Portfolio" },
      {
        property: "og:description",
        content:
          "Futuristic developer portfolio of Gokul Raj V: skills, education at NIAT, projects and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Backdrop />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
