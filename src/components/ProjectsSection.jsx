import { ExternalLink, Github } from "lucide-react";
import aghImage from "@/assets/Agh.png";
import vishwakarmaImage from "@/assets/vishwakarma.png";
import netflixImage from "@/assets/netflix.jpeg";

const projects = [
  {
    title: "App Growth Hub",
    desc: "A beautiful landing page app using React and Tailwind.",
    image: aghImage, 
    tech: ["React", "TailwindCSS", "framer motion"],
    live: "https://www.appgrowthhub.com/",
    code: "https://github.com/2G-Aryan/react-portfolio-abhishek",
  },
  {
    title: "Vishwakarma civil and stone work",
    desc: "Interactive interior designer website.",
    image: vishwakarmaImage,
    tech: ["Nextjs", "Tailwindcss", "Web3Forms"],
    live: "https://www.vishwakarmacivilandstonework.com/",
    code: "https://github.com/2G-Aryan/Vishwakarma",
  },
  {
    title: "Netflix Clone",
    desc: "Clone using HTML CSS",
    image: netflixImage,
    tech: ["Html","Css"],
    live: "https://netflix-vert-phi.vercel.app/",
    code: "https://github.com/2G-Aryan/Netflix-Clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-20 px-4 text-white relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden 
                       transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-fill transition-transform duration-500 group-hover:scale-105"
            />

            <div className="p-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-muted-foreground">{proj.desc}</p>

              <div className="flex gap-4 mt-2">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
