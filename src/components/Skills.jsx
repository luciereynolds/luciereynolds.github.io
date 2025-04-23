export default function Skills() {
  const tech = [
    { name: "React", icon: "/assets/skills/react.png" },
    { name: "JavaScript", icon: "/assets/skills/javascript.png" },
    { name: "Node.js", icon: "/assets/skills/node-js.png" },
    { name: "MongoDB", icon: "/assets/skills/mongodb.png" },
    { name: "Express", icon: "/assets/skills/express.png" },
    { name: "HTML", icon: "/assets/skills/html.png" },
    { name: "CSS", icon: "/assets/skills/css.png" },
    { name: "Java", icon: "/assets/skills/java.png" },
    { name: "Git", icon: "/assets/skills/git.png" },
    { name: "Figma", icon: "/assets/skills/figma.png" },
    { name: "Bootstrap", icon: "/assets/skills/bootstrap.png" },
  ];

  return (
    <section id="skills" className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {tech.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center space-y-2">
            <img src={icon} alt={name} className="w-16 h-16" />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
