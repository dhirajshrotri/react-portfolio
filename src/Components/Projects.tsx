import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      name: "Looper",
      description:
        "A route creation app for cyclists and runners. Uses Dijkstra's algorithm with OpenStreetMap data to generate a loop of specified distance from a start point.",
      skills: ["React", "Leaflet", "OpenStreetMap", "Dijkstra's Algorithm"],
      demo: "https://looper.thisdotdev.com",
      github: "https://github.com/dhirajshrotri/looper",
    },
    {
      name: "Wellness Logger",
      description:
        "An app to track workouts in the gym. Built with ReactNative on the frontend and GoLang REST API + Firebase datastore on the backend.",
      skills: ["ReactNative", "Firebase", "GoLang", "TypeScript"],
      demo: "",
      github: "https://github.com/dhirajshrotri/wellnesslogger",
    },
    {
      name: "Card Game (iOS)",
      description:
        "A Swift-based iOS app created by following Stanford’s CS139p course on iOS development.",
      skills: ["Swift", "UIKit", "MVVM"],
      demo: "",
      github: "https://github.com/dhirajshrotri/card-game",
    },
  ];

  return (
    <div
      className="
        w-full md:w-3/4
        flex flex-col overflow-x-auto snap-x snap-mandatory
        md:overflow-visible md:snap-none
        scrollbar-hide
      "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {projects.map((project) => (
        <div
          key={project.name}
          className={`m-2
            snap-center flex-shrink-0
            min-w-[85%] mx-4
            md:min-w-0 md:mx-0
            p-5 rounded-2xl shadow-md border transition-colors duration-300
            ${
              darkMode
                ? "bg-[#273C75] border-[#3F5185] hover:bg-[#344C93]"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 text-red-400">
            {project.name}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm md:text-base hidden md:block">{project.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className={`
                  px-3 py-1 text-xs rounded-full font-medium
                  ${
                    darkMode
                      ? "bg-[#3F5185] text-gray-200"
                      : "bg-gray-200 text-gray-800"
                  }
                `}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <FaLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
