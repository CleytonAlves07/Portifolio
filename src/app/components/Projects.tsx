import Image from "next/image";
import { FaGithub } from "react-icons/fa";

// Definição da interface para os projetos
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: "Full Stack" | "Front End" | "Back End";
  github: string;
}

// Mapeamento de cores fixas para as tecnologias
const colorMap: { [key: string]: string } = {
  React: "bg-blue-100 text-blue-800",
  Nodejs: "bg-green-100 text-green-800",
  PostgreSQL: "bg-purple-100 text-purple-800",
  TailwindCSS: "bg-teal-100 text-teal-800",
  Express: "bg-gray-100 text-gray-800",
  MongoDB: "bg-red-100 text-red-800",
  TypeScript: "bg-yellow-100 text-yellow-800",
  Nextjs: "bg-pink-100 text-pink-800",
};

const Projects = ({ projects }: { projects: Project[] }) => (
  <section id="projects" className="bg-gray-100 py-12 w-screen">
    <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Projetos</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={`/images/${project.image}`}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  project.stack === "Full Stack"
                    ? "bg-green-100 text-green-700"
                    : project.stack === "Front End"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {project.stack}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    colorMap[tag] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-teal-600 hover:text-teal-800 text-sm font-bold transition-colors"
              >
                <FaGithub className="mr-2" /> Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
