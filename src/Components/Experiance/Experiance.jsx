import React, { useState, useEffect } from 'react';

// Skill button component (with animation + glow)
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
        {/* Glow effect */}
        <div className={`absolute -inset-1 rounded-lg blur-sm opacity-0 transition-all duration-500 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        } ${
          isPowerBI
            ? 'bg-gradient-to-r from-green-400 to-emerald-400'
            : 'bg-gradient-to-r from-blue-400 to-purple-400'
        }`}></div>

        {/* Text */}
        <span className="relative z-10 font-medium tracking-wide">
          {skill}
        </span>
      </button>
    </div>
  );
};

// Key Skills Section (with left alignment, no underline)
const KeySkills = () => {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = ["SQL", "PYTHON", "POWER BI", "ADVANCED EXCEL"];

  return (
    <div 
      id="Key_skills" 
      className="px-4 sm:px-6 lg:px-12 xl:px-24 pt-8 sm:pt-12 lg:pt-16 xl:pt-24 pb-8 text-white relative overflow-hidden"
    >
      <div className={`relative z-10 mb-12 transition-all duration-1000 transform ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Key Skills
          </span>
        </h1>

        {/* Skill buttons aligned left */}
        <div className="flex flex-wrap gap-4 mt-8 justify-start">
          {skills.map((skill, index) => (
            <SkillButton key={skill} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeySkills;
