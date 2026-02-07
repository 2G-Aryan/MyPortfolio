import { Code, Monitor, Palette, FolderCog } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="relative py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto text-white">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer 
          </h3>
          <p className="text-muted-foreground">
            Successfully completed a  Front-end development certification focused on real-world project
 building.
 Gained hands-on experience with HTML, CSS, JavaScript, and front-end libraries.
 
          </p>
          <p className="text-muted-foreground">
           Built multiple minor and major front-end projects, showcasing practical knowledge of responsive
 design, dynamic UI interactions, and modern development practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition">
              Get In Touch
            </a>
            <a href="https://drive.google.com/file/d/1IS1r30wYEQcCjEop6XqqwfogA3FPPZx-/view?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition">
              Download CV
            </a>
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              icon: <Monitor className="h-6 w-6 text-primary" />,
              title: "Web Development",
              desc: "Creating responsive websites and web apps using modern frameworks.",
            },
            {
              icon: <Palette className="h-6 w-6 text-primary" />,
              title: "UI/UX Design",
              desc: "Designing intuitive user interfaces and seamless experiences.",
            },
            {
              icon: <FolderCog className="h-6 w-6 text-primary" />,
              title: "AI Tools",
              desc: "Leveraging AI-powered tools to enhance development workflows, automate tasks, and build smarter websites.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};