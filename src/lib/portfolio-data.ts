/**
 * EDITABLE CONTENT
 * Everything shown on the portfolio lives here. Change text, links and
 * placeholders in this one file — no other file needs editing.
 */

export const profile = {
  name: "Gokul Raj V",
  tagline: "Aspiring Software Engineer & AI/ML Developer",
  terminalLine: "Building foundations in code, AI, and problem-solving.",
  role: "1st Year B.Tech Computer Science & Engineering Student",
  specialization: "Artificial Intelligence & Machine Learning",
  about:
    "I am a first-year B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at NIAT — Nextwave Innovation in Advanced Technology × SVYASA University, Bengaluru. I am building strong foundations in Python, problem solving, data structures, web development, automation, and AI/ML. My goal is to become a capable software and AI engineer who builds useful real-world products.",
  // Replace with your resume file (put it in /public and use "/resume.pdf")
  resumeUrl: "",
  links: {
    github: "https://github.com/Gokul6019",
    linkedin: "http://www.linkedin.com/in/gokul-raj-v-022405431",
    email: "ggokul6019@gmail.com",
  },
};

export const learningSkills = [
  { name: "Python", note: "Core language & scripting" },
  { name: "Artificial Intelligence", note: "Concepts & foundations" },
  { name: "Machine Learning", note: "Basics of models & data" },
  { name: "Data Structures & Algorithms", note: "Getting started" },
  { name: "Problem Solving", note: "Daily practice" },
  { name: "Web Development", note: "HTML, CSS, JavaScript" },
  { name: "Automation", note: "Small scripts & tooling" },
  { name: "Git & GitHub", note: "Version control workflow" },
];

export const strengths = [
  { name: "Curiosity and self-learning", note: "Learning independently every day" },
  { name: "Project building", note: "Turning ideas into working builds" },
  { name: "Technology exploration", note: "Trying new tools and stacks" },
  { name: "Startup and product thinking", note: "Thinking about real users" },
];

export const education = {
  institute: "NIAT — Nextwave Innovation in Advanced Technology",
  degree: "B.Tech Computer Science & Engineering",
  specialization: "Specialization: Artificial Intelligence & Machine Learning",
  campus: "NIAT × SVYASA University, Bengaluru",
  status: "Currently Pursuing — 1st Year",
};

export const timeline = [
  { year: "2026", label: "Joined NIAT" },
  { year: "2026", label: "Started B.Tech CSE – AI & ML" },
  { year: "2026", label: "Building Python and programming foundations" },
  { year: "2026", label: "Beginning Data Structures & Algorithms" },
  { year: "Future", label: "Building AI/ML projects" },
  { year: "Future", label: "Internships and industry experience" },
];

/** Certificates default to "In Progress" — only change once actually earned. */
export const certificates = [
  { title: "NIAT × IIT Kharagpur credential", status: "In Progress" },
  { title: "Certificate placeholder", status: "In Progress" },
];

export const projects = [
  {
    title: "Project Coming Soon",
    summary: "Placeholder for my first full project. Edit this card when it is ready.",
    details:
      "This card is a placeholder. Replace the title, description, tech stack and links in src/lib/portfolio-data.ts once the project is built.",
    tags: ["Placeholder", "Editable"],
    github: "",
    demo: "",
    accent: "neon" as const,
  },
  {
    title: "AI/ML Experiment",
    summary: "Placeholder for a future machine-learning project.",
    details:
      "Planned space for a machine-learning experiment — dataset, model, results and what I learned will go here.",
    tags: ["Python", "Machine Learning", "Planned"],
    github: "",
    demo: "",
    accent: "violet" as const,
  },
  {
    title: "Automation or Web Project",
    summary: "Placeholder for a future practical automation or web build.",
    details:
      "Planned space for a practical tool — an automation script or a web app solving a small real-world problem.",
    tags: ["Automation", "Web", "Planned"],
    github: "",
    demo: "",
    accent: "electric" as const,
  },
];

export const achievements = [
  { title: "Certificates", status: "In Progress", note: "Course and program certificates will appear here." },
  { title: "Hackathons", status: "Planned", note: "Placeholder for future hackathon participation." },
  { title: "Coding milestones", status: "In Progress", note: "Problem-solving streaks and practice milestones." },
  { title: "Internships", status: "Planned", note: "Placeholder for future internship experience." },
  { title: "Open-source contributions", status: "Planned", note: "Placeholder for future contributions." },
];
