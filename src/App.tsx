import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`flex justify-center items-center h-screen w-screen ${
        darkMode ? "bg-[#1F305E] text-white" : "bg-[#ffffff] text-gray-800"
      } relative`}
    >
      <div className="flex h-full w-full max-w-[1280px] mx-auto">
        {/* Sidebar (collapsible on mobile) */}
        <Sidebar
          menuOpen={menuOpen}
          closeMenu={closeMenu}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Mobile Hamburger */}
        <button
          className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-md shadow"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${darkMode ? "white" : "black"}`}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Right Content Area */}
        <div
          className="flex-1 overflow-y-scroll scroll-smooth snap-y snap-mandatory px-6 md:px-10 lg:px-16
                     max-w-[1028px] mx-auto scrollbar-hide"
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 absolute bottom-6 right-6 mt-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-[#3F5185] transition-colors duration-200"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Section id="about" title="About Me">
            <article>
              <p>
                Hi, I'm{" "}
                <strong className="text-red-400">Dhiraj Shrotri</strong>. I am
                based out of{" "}
                <strong className="text-red-400">Albany, NY</strong>. I am a
                Fullstack Developer with 6 years of experience and a strong
                focus in{" "}
                <strong className="text-red-400">
                  React, TypeScript, NodeJs, AWS
                </strong>{" "}
                and <strong className="text-red-400">Docker</strong>.
              </p>
              <br />
              <p>
                I am currently leading the frontend team at{" "}
                <strong className="text-red-400">
                  TruWeather Solutions Inc.
                </strong>{" "}
                At my current job, I work on creating real-time weather
                dashboards and data interfaces using{" "}
                <strong className="text-red-400">React, Leaflet</strong> and{" "}
                <strong className="text-red-400">Web Assembly</strong>. I also
                work on creating data pipelines to collect, parse and store
                sensor data using{" "}
                <strong className="text-red-400">
                  AWS Lambda, SQS, DynamoDB
                </strong>{" "}
                and <strong className="text-red-400">Redis</strong>. Prior to my
                current job, I have worked at{" "}
                <strong className="text-red-400">SS&amp;C Intralinks</strong>{" "}
                and{" "}
                <strong className="text-red-400">
                  Cloudnaut Technologies.
                </strong>
              </p>
              <br />
              <p>
                Outside of work, I enjoy running, hiking and cooking. I recently
                ran a marathon and am currently working towards hiking the
                Catskill 3500ers and Adirondacks 46ers.
              </p>
              <br />
              <p>
                You can find more about me on my{" "}
                <a
                  href="https://github.com/dhirajshrotri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/dhirajshrotri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                . I can be reached at{" "}
                <a href="mailto:dhiraj.shrotri@gmail.com">
                  dhiraj.shrotri@gmail.com
                </a>
                .
              </p>
            </article>
          </Section>

          <Section id="experience" title="Experience">
            <Timeline darkMode={darkMode} />
          </Section>

          <Section id="projects" title="Projects">
            <Projects darkMode={darkMode} />
          </Section>

          <Section id="certifications" title="Certifications">
            <Certifications />
          </Section>

          <Section id="contact" title="Contact Me">
            <ContactForm />
          </Section>
        </div>
        {/* ===== Scroll Down Indicator ===== */}
<div
  className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-40 
  animate-bounce transition-colors duration-300 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
  <span className="text-sm font-medium mb-1">Scroll</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</div>
      </div>
    </div>
  );
};

export default App;
