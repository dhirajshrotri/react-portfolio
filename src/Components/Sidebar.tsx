import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaBloggerB } from "react-icons/fa"; // LeetCode-like icon (FaCode is generic)

interface SidebarProps {
  menuOpen: boolean;
  closeMenu: () => void;
    darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ menuOpen, closeMenu, darkMode }) => {
  const items = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    {id: "certifications", label: "Certifications"},
    { id: "contact", label: "Contact Me" },
  ];

  // Replace these URLs with your actual profile links
  const socialLinks = {
    github: "https://github.com/dhirajshrotri",
    linkedin: "https://www.linkedin.com/in/dhiraj-shrotri",
    leetcode: "https://leetcode.com/dhirajshrotri",
    blog: "https://dev.to/dhiraj-shrotri"
  };

  return (
    <>
      {/* Sidebar for Desktop */}
      <nav className={`hidden md:flex w-64 flex-col px-8 py-6 h-screen justify-between ${ darkMode ? "bg-[#1F305E] text-white" : "bg-[#ffffff] text-red-400"}`}>
  {/* Top: Name */}
  <div>
    <h1 className="text-2xl font-bold text-red-400">Dhiraj Shrotri</h1>
  </div>

  {/* Center: Navigation */}
  <div className="flex-1 flex flex-col justify-center">
    <ul className="space-y-2 w-full">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="group flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-[#3F5185] transition-all duration-200"
          >
            <span className="w-1 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all mr-3"></span>
            <span className={`group-hover:text-blue-600 dark:group-hover:text-white font-medium tracking-wide ${ darkMode ? "text-white" : "text-red-400"}`}>
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Bottom: Social Links */}
 <div className="flex space-x-4 justify-center mt-6">
  <a
    href={socialLinks.github}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 rounded-full transition-colors ${
      darkMode ? "hover:bg-[#3F5185]" : "hover:bg-gray-100"
    }`}
  >
    <FaGithub
      className={`h-6 w-6 transition-colors ${
        darkMode ? "text-white hover:text-yellow-400" : "text-gray-700 hover:text-blue-600"
      }`}
    />
  </a>

  <a
    href={socialLinks.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 rounded-full transition-colors ${
      darkMode ? "hover:bg-[#3F5185]" : "hover:bg-gray-100"
    }`}
  >
    <FaLinkedin
      className={`h-6 w-6 transition-colors ${
        darkMode ? "text-white hover:text-yellow-400" : "text-gray-700 hover:text-blue-600"
      }`}
    />
  </a>

  <a
    href={socialLinks.leetcode}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 rounded-full transition-colors ${
      darkMode ? "hover:bg-[#3F5185]" : "hover:bg-gray-100"
    }`}
  >
    <FaCode
      className={`h-6 w-6 transition-colors ${
        darkMode ? "text-white hover:text-yellow-400" : "text-gray-700 hover:text-blue-600"
      }`}
    />
  </a>

  <a
    href={socialLinks.blog}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-2 rounded-full transition-colors ${
      darkMode ? "hover:bg-[#3F5185]" : "hover:bg-gray-100"
    }`}
  >
    <FaBloggerB
      className={`h-6 w-6 transition-colors ${
        darkMode ? "text-white hover:text-yellow-400" : "text-gray-700 hover:text-blue-600"
      }`}
    />
  </a>
</div>

</nav>


      {/* Sidebar Drawer for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r shadow-md transform transition-transform duration-300 ease-in-out
        ${darkMode ? "bg-[#1F305E] text-white" : "bg-[#FFEFD5] text-gray-800"}
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col justify-between h-full px-8 py-6">
          <div>
            <h1 className="text-2xl font-bold mb-8 text-red-400">Dhiraj Shrotri</h1>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaGithub className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaCode className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 opacity-40 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
