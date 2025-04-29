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
    <section
      id="portfolio"
      className="py-10 px-4 sm:px-6 text-white-800 text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {project.description}
            </p>
            <p className="text-sm sm:text-base text-gray-500 italic mb-4">
              {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 border border-black text-black hover:bg-black hover:text-white rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
