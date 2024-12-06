interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: "Full Stack" | "Front End" | "Back End";
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pilates Studio Management System",
    description:
      "Complete management system for tracking teachers, rooms, students, and classes with advanced reporting features.",
    image: "project1.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
    stack: "Full Stack",
    github: "https://github.com/your-repo/pilates-system",
  },
  {
    id: 2,
    title: "Scheduling System",
    description:
      "Advanced scheduling application for managing professional appointments and room bookings.",
    image: "project1.jpg",
    tags: ["React", "Express", "MongoDB", "TailwindCSS"],
    stack: "Back End",
    github: "https://github.com/your-repo/scheduling-system",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and professional experiences.",
    image: "project1.jpg",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    stack: "Front End",
    github: "https://github.com/your-repo/portfolio",
  },
];

export default projects;
