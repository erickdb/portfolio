import React from "react";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary/30 backdrop-blur-md border-t border-white/10 mt-20">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8`}>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          {/* Foto Profile */}
          <div className="w-20 h-20 rounded-full border-2 border-secondary overflow-hidden flex-shrink-0">
            <img 
              src={logo}
              alt="Erick Darmawan Boeniarto" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Teks Profile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-white text-[18px] font-bold leading-tight">
              Erick Darmawan Boeniarto
            </p>
            <p className="text-secondary text-[14px] mt-1">
              Fullstack Web Developer
            </p>
            <p className="text-secondary text-[14px] mt-1 flex items-center gap-2">
              <FaEnvelope/>
              <span>erickdarmawanboeniarto130803@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="flex gap-6">
            <a 
                href="https://github.com/erickdb" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                className="text-secondary hover:text-white transition-colors duration-300 text-[24px]"
            >
                <FaGithub />
            </a>
            <a 
                href="https://www.linkedin.com/in/erick-darmawan-623855275/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="text-secondary hover:text-white transition-colors duration-300 text-[24px]"
            >
                <FaLinkedin />
            </a>
            <a 
                href="https://www.instagram.com/erick.db13/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
                className="text-secondary hover:text-white transition-colors duration-300 text-[24px]"
            >
                <FaInstagram />
            </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-secondary text-[14px]">
            Built with React, Tailwind
          </p>
          <p className="text-white/30 text-[12px] mt-1 italic">
            © 2026 | Latest update: Mei 2026.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;