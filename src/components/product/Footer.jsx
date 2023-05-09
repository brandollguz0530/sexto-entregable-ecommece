import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black py-[60px] px-4 hover:bg-orange-600">
      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/brandoll-guzman-872137266/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-white mx-2 hover:text-gray-500 transition duration-300 transform hover:scale-110 focus:scale-110 mr-6" size={35} />
        </a>
        <a href="https://github.com/brandollguz0530" target="_blank" rel="noreferrer">
          <FaGithub className="text-white mx-2 hover:text-gray-500 transition duration-300 transform hover:scale-110 focus:scale-110 " size={35} />
        </a>
      </div>
      <p className="text-center text-white mt-8 font-bold">© created by Brandoll Guzman</p>
    </footer>
  );
}

export default Footer;
