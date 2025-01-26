import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import social icons
import { styles } from "../styles";
import { navLinks } from "../constants"; // Assuming you already have your nav links defined in constants

const Footer = () => {
  return (
    <footer className="w-full bg-[#101010] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between sm:flex-row">
        {/* Left Side: Social Media Links */}
        <div className="flex gap-8 mb-6 sm:mb-0 justify-center">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#915EFF] text-[28px] transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#915EFF] text-[28px] transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex flex-col sm:flex-row gap-4 text-white font-medium text-xs sm:text-sm justify-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="cursor-pointer hover:text-[#915EFF] transition duration-300 transform hover:scale-105"
            >
              <Link to={`#${nav.id}`} smooth="true" duration={500}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom: Copyright */}
      <div className="flex justify-center items-center mt-6 text-white text-xs opacity-80">
        <p>
          &copy; {new Date().getFullYear()} Palash Hawee. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
