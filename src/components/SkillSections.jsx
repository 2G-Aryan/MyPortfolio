import { useState } from "react";

const skillsData = {
  All: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 80 },
     { name: "Bootstrap", level: 90 },
  ],
  Frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 30 },
    { name: "Express.js", level: 25 },
    { name: "MongoDB", level: 50 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "VSCode", level: 90 },
    { name: "Figma", level: 75 },
  ],
};

const categories = ["All", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [selected, setSelected] = useState("Frontend");

  return (
    <section id="skill" className="relative py-20 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My <span className="text-primary">Skills</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full text-sm transition-all ${
              selected === cat
                ? "bg-primary text-white"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData[selected].map((skill, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center mb-2 text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
