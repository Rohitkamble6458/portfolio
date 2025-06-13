import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact, FaJs, FaGithub, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiC, SiPython, SiPostgresql } from 'react-icons/si';

const SkillButton = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  const isPowerBI = skill === "POWER BI";

  return (
    <div className="relative group">
      <button
        className={`relative px-6 py-3 rounded-lg border-2 transition-all duration-500 text-sm md:text-base transform cursor-pointer overflow-hidden ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95'
        } ${
          isHovered && isPowerBI
            ? "border-green-400 text-green-300 bg-green-500/10 shadow-green-400/40"
            : isHovered
            ? "border-blue-400 text-blue-300 bg-blue-500/10 shadow-blue-400/40"
            : "border-gray-500 text-white"
        } hover:scale-110 hover:shadow-xl hover:-translate-y-1`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 opacity-0 transition-all duration-500 ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        } ${
          isPowerBI
            ? 'bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20'
            : 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20'
        }`}></div>
        
        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-lg transition-all duration-700 ${
          isHovered ? 'animate-pulse' : ''
        } ${
          isPowerBI
            ? 'bg-green-400/10'
            : 'bg-blue-400/10'
        }`}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-pulse opacity-0 transition-all duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              } ${
                isPowerBI ? 'bg-green-400/60' : 'bg-blue-400/60'
              }`}
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + Math.sin(i) * 40}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1.5 + Math.random()}s`
              }}
            />
          ))}
        </div>
        
        {/* Glow effect */}
        <div className={`absolute -inset-1 rounded-lg blur-sm opacity-0 transition-all duration-500 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        } ${
          isPowerBI
            ? 'bg-gradient-to-r from-green-400 to-emerald-400'
            : 'bg-gradient-to-r from-blue-400 to-purple-400'
        }`}></div>
        
        {/* Text content */}
        <span className="relative z-10 font-medium tracking-wide">
          {skill}
        </span>
        
        {/* Sparkle effects */}
        <div className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full opacity-0 transition-all duration-500 ${
          isHovered ? 'opacity-100 animate-ping' : 'opacity-0'
        } ${
          isPowerBI ? 'bg-green-300' : 'bg-blue-300'
        }`}></div>
        
        <div className={`absolute bottom-1 left-1 w-1 h-1 rounded-full opacity-0 transition-all duration-700 ${
          isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
        } ${
          isPowerBI ? 'bg-emerald-300' : 'bg-purple-300'
        }`} style={{ animationDelay: '200ms' }}></div>
      </button>
      
      {/* Enhanced tooltip on hover */}
      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        isHovered 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
      }`}>
        <div className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-lg ${
          isPowerBI
            ? 'bg-green-500/90 text-white border border-green-400/50'
            : 'bg-blue-500/90 text-white border border-blue-400/50'
        }`}>
          {skill}
          {/* Tooltip arrow */}
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
            isPowerBI ? 'bg-green-500/90 border-r border-b border-green-400/50' : 'bg-blue-500/90 border-r border-b border-blue-400/50'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ logo, company, position, date, responsibilities, index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`relative group flex flex-col gap-6 mt-6 rounded-2xl p-6 items-center transition-all duration-700 transform cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      } ${
        isHovered ? 'scale-105' : 'hover:scale-105'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-slate-950/60 backdrop-blur-xl rounded-2xl border border-slate-700/40 shadow-2xl shadow-blue-500/5 transition-all duration-500 group-hover:shadow-blue-500/15 group-hover:border-slate-600/60"></div>
      
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
      
      {/* Floating particles around the card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + Math.sin(i) * 60}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Logo section with enhanced animations */}
      <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
        <div className="relative">
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
          
          {/* Logo container */}
          <div className="relative p-3 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/30 group-hover:border-blue-500/40 transition-all duration-500">
            {logo}
            
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-10 text-white text-center w-full">
        {/* Position and company */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold leading-tight mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transform transition-all duration-500">
            {position}
          </h2>
          
          <div className="relative inline-block">
            <h3 className="text-xl font-semibold text-slate-300 group-hover:text-white transition-all duration-500">
              {company}
            </h3>
            
            {/* Animated underline */}
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-500 rounded-full"></div>
          </div>
          
          <p className="text-sm font-thin text-slate-400 mt-2 group-hover:text-slate-300 transition-all duration-500">
            {date}
          </p>
        </div>

        {/* Responsibilities list */}
        <div className="relative">
          {/* Background for list */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <ul className="relative text-sm p-4 space-y-2 rounded-xl">
            {responsibilities.map((item, idx) => (
              <li 
                key={idx} 
                className="relative flex items-start gap-3 text-left transform transition-all duration-500 hover:translate-x-2 hover:text-blue-300"
                style={{ 
                  animationDelay: `${(index * 100) + (idx * 50)}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateX(${isVisible ? 0 : -20}px)`
                }}
              >
                {/* Custom bullet point */}
                <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-all duration-300"></span>
                
                <span className="flex-1 leading-relaxed group-hover:text-slate-200 transition-all duration-300">
                  {item}
                </span>
                
                {/* Hover line effect */}
                <div className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500/50 to-transparent hover:w-full transition-all duration-400"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 200}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LogoCard = ({ logo, title, bgColor, index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`relative group transition-all duration-500 transform cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-90'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Main card container */}
      <div className={`relative p-4 ${bgColor} rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3`}>
        
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-current/20"></div>
        
        {/* Logo with enhanced effects */}
        <div className="relative z-10 transform transition-all duration-300 group-hover:scale-110">
          {logo}
          
          {/* Sparkle effects */}
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + Math.sin(i) * 40}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced tooltip */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        isHovered 
          ? 'opacity-100 translate-y-12 scale-100' 
          : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
      }`}>
        <div className="relative">
          {/* Tooltip background with glassmorphism */}
          <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-slate-600/50 whitespace-nowrap font-medium shadow-xl">
            {title}
            
            {/* Tooltip arrow */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 border-l border-t border-slate-600/50 rotate-45"></div>
          </div>
          
          {/* Glow effect for tooltip */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md -z-10"></div>
        </div>
      </div>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 bg-white/20 rounded-full transform scale-0 ${
          isHovered ? 'animate-ping' : ''
        } transition-all duration-700`}></div>
      </div>
    </div>
  );
};

// Experience Component
const Experience = () => {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Key skills data
  const skills = ["SQL", "PYTHON", "POWER BI", "ADVANCED EXCEL"];

  // Technology skills data
  const techSkills = [
    { logo: <FaHtml5 color="#E34F26" size={50} />, title: "HTML", bgColor: "bg-zinc-950" },
    { logo: <FaCss3 color="#1572B6" size={50} />, title: "CSS", bgColor: "bg-zinc-950" },
    { logo: <SiTailwindcss color="Blue" size={50} />, title: "TailwindCSS", bgColor: "bg-white" },
    { logo: <FaReact color="#61DAFB" size={50} />, title: "React", bgColor: "bg-zinc-950" },
    { logo: <FaJs color="#F7DF1E" size={50} />, title: "JavaScript", bgColor: "bg-zinc-950" },
    { logo: <FaGithub color="white" size={50} />, title: "GitHub", bgColor: "bg-black" },
    { logo: <SiMongodb color="#47A248" size={50} />, title: "MongoDB", bgColor: "bg-zinc-950" },
    { logo: <SiPostgresql color="white" size={50} />, title: "PostgreSQL", bgColor: "bg-blue-700" },
    { logo: <SiMysql color="yellow" size={50} />, title: "MySQL", bgColor: "bg-zinc-950" },
    { logo: <SiC color="white" size={50} />, title: "C Language", bgColor: "bg-blue-900" },
    { logo: <SiPython color="yellow" size={50} />, title: "Python", bgColor: "bg-blue-950" },
    { logo: <FaCloud color="white" size={50} />, title: "Cloud", bgColor: "bg-blue-700" }
  ];

  return (
    <div id="Key_skills" className="pb-10 md:pb-16 px-10 md:px-24 relative overflow-hidden">
      
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Key Skills Section */}
      <div className={`relative z-10 mb-12 transition-all duration-1000 transform ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Key Skills
          </span>
          
          {/* Animated underline */}
          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 delay-500"
               style={{ width: sectionVisible ? '100%' : '0%' }}></div>
          
          {/* Floating particles around title */}
          <div className="absolute -top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -bottom-2 -left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        </h1>
        
        <div className="flex flex-wrap gap-4 mt-8">
          {skills.map((skill, index) => (
            <SkillButton key={skill} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Section Title */}
      <div className={`relative z-10 transition-all duration-1000 transform ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-4 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technologies & Tools
          </span>
          
          {/* Animated underline */}
          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 delay-700"
               style={{ width: sectionVisible ? '100%' : '0%' }}></div>
          
          {/* Floating particles around title */}
          <div className="absolute -top-2 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -bottom-2 -left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        </h1>
      </div>

      {/* Technology Skills Section */}
      <div className="relative z-10 mt-8">
        <h2 className={`text-xl md:text-2xl text-slate-300 font-semibold mb-6 transition-all duration-700 delay-300 transform ${
          sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}>
          Technologies & Tools
        </h2>
        
        <div className="flex flex-wrap justify-start gap-6">
          {techSkills.map((skill, index) => (
            <LogoCard
              key={skill.title}
              logo={skill.logo}
              title={skill.title}
              bgColor={skill.bgColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { JobCard, LogoCard };
export default Experience;