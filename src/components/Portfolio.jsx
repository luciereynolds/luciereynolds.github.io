import React from "react";

export default function Portfolio() {
  const projects = [
    {
      name: "Honours Project",
      description:
        "Computing Cadets is a web-based learning platform designed to encourage Scottish secondary school students to pursue computing studies. Developed as part of my honours project to evaluate its effectiveness in promoting computing education.",
      technologies: "MongoDB, Express, Node.js and React",
      link: "https://h-application.vercel.app/",
      image: "/assets/portfolio/ComputingCadets.png",
    },
    {
      name: "Hostel Application",
      description: 
      "This hostel application was created as part of a Front-End Web Development module during my time at University",
      technologies: "MongoDB, Express, Node.js and React",
      link: "https://github.com/luciereynolds/hostel-application",
      image: "/assets/portfolio/Hostels1.png",
    },
    {
      name: "Project 3",
      description: "Description",
      technologies: "Technology used.",
      link: "link-to-project",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 text-white-800 text-center">
      <h2 className="text-3xl font-bold mb-10">Portfolio</h2>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <p className="text-lg leading-relaxed">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            {/* Project Name, Description and Link */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
              <p className="text-white-400">{project.description}</p>
              <br />
              <p className="text-white-400 mb-4 italic">{project.technologies}</p>
              <br />
              <a
                href={project.link} target="_blank"
                className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300"
              >
                View Project
              </a>
            </div>
            {/* Image */}
            <div className="bg-white p-6 rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
