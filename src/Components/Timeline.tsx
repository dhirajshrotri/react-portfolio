import React from "react";

interface Role {
  title: string;
  period: string;
  description: string;
}

interface ExperienceItem {
  company: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "TruWeather Solutions",
    roles: [
      {
        title: "Software Engineer",
        period: "Dec 2022 – Present",
        description:
          "Leading the development of weather visualization and route recommendation tools using React, TypeScript, and Python microservices.",
      },
      {
        title: "Fullstack Developer (Intern)",
        period: "May 2021 – May 2022",
        description:
          "Built real-time weather dashboards and data visualization interfaces with React and Mapbox GL.",
      },
    ],
  },
  {
    company: "SS&C Intralinks",
    roles: [
      {
        title: "Software Engineer (Intern)",
        period: "June 2022 – Dec 2022",
        description:
          "Worked on modernizing internal UI components and improving app performance across Intralinks’ document management platform.",
      },
    ],
  },
  {
    company: "Cloudnaut Technologies",
    roles: [
      {
        title: "Full Stack Developer",
        period: "Sept 2018 – Jan 2021",
        description:
          "Developed a video interview platform using AWS Chime SDK and built scalable backend APIs using Node.js and AWS services.",
      },
    ],
  },
];

interface TimelineProps {
  darkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ darkMode}) => {
  return (
    <div className="relative border-l-2 border-gray-200 ml-4 mt-6 space-y-10">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative pl-6">
          {/* Dot */}
          <span className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow" />

          {/* Company */}
          <h3 className="text-xl font-semibold text-red-400 mb-4">
            {exp.company}
          </h3>

          {/* Roles */}
          <div className="space-y-5">
            {exp.roles.map((role, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h4 className={`text-base font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                    {role.title}
                  </h4>
                  <p className={`text-base font-medium ${darkMode ? 'text-white' : 'text-gray-500'}`}>{role.period}</p>
                </div>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} mt-1 text-sm leading-relaxed`}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
