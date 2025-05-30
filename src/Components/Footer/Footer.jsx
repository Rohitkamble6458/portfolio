import React, { useState, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import SocialCard from "./SocialCard";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rohitkamble6458/",
      icon: CiLinkedin,
      label: "LinkedIn",
      color: "text-blue-600",
      bgColor: "from-blue-600/20 to-blue-800/20",
      hoverColor: "hover:text-blue-400"
    },
    {
      href: "https://github.com/Rohitkamble6458",
      icon: FaGithub,
      label: "GitHub",
      color: "text-white",
      bgColor: "from-gray-600/20 to-gray-800/20",
      hoverColor: "hover:text-gray-300"
    },
    {
      href: "https://www.hackerrank.com/profile/rohitkamble6451",
      icon: FaHackerrank,
      label: "HackerRank",
      color: "text-green-400",
      bgColor: "from-green-600/20 to-green-800/20",
      hoverColor: "hover:text-green-300"
    }
  ];

  return (
    <>
      <div
        id="Footer"
        className="relative flex flex-col md:flex-row justify-around text-white p-10 md:p-12 gap-8 overflow-hidden"
      >
        {/* Animated background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-50"></div>
        
        {/* Floating background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Geometric background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg animate-pulse"></div>
        </div>

        {/* Contact Section */}
        <div className={`relative z-10 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group">
            {/* Glowing background for title */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="relative">
              <h1 className="text-2xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Contact
                
                {/* Animated particles around title */}
                <div className="absolute -top-2 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-2 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              </h1>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-widthGrow"></div>
            </div>
          </div>

          <h3 className={`text-sm md:text-2xl font-normal mb-6 text-slate-300 transition-all duration-700 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            Feel free to reach out!
          </h3>

          {/* Enhanced Email Link */}
          <div className={`transition-all duration-700 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a
              href="mailto:rohitkamble6458@gmail.com"
              className="relative group inline-flex items-center gap-3 mt-4 p-4 rounded-xl transition-all duration-500 hover:scale-105 transform"
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
            >
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-xl border border-slate-600/30 group-hover:border-blue-500/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Icon with animation */}
              <div className="relative z-10 p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-all duration-300">
                <MdOutlineEmail 
                  size={24} 
                  className={`transition-all duration-300 ${
                    emailHovered ? 'text-blue-400 animate-pulse' : 'text-white'
                  }`}
                />
              </div>
              
              {/* Email text */}
              <span className="relative z-10 text-white group-hover:text-blue-300 transition-all duration-300 font-medium">
                rohitkamble6458@gmail.com
              </span>
              
              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              
              {/* Sparkle effect */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
            </a>
          </div>
        </div>

        {/* Social Links Section */}
        <div className={`relative z-10 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <div 
                key={social.label}
                className={`transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-90'
                }`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <EnhancedSocialCard
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  color={social.color}
                  bgColor={social.bgColor}
                  hoverColor={social.hoverColor}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom section */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-6 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 200}ms`,
                  height: `${12 + Math.random() * 12}px`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes widthGrow {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-widthGrow {
          animation: widthGrow 1.5s ease-out 0.8s both;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

// Enhanced Social Card Component
const EnhancedSocialCard = ({ href, icon: Icon, label, color, bgColor, hoverColor, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card container */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/30 group-hover:border-slate-500/50 backdrop-blur-sm transition-all duration-500">
        
        {/* Glowing background effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`}></div>
        
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative p-3 rounded-xl bg-gradient-to-br from-slate-600/30 to-slate-700/30 group-hover:scale-110 transition-all duration-300">
            <Icon 
              size={32} 
              className={`${color} ${hoverColor} transition-all duration-300 ${
                isHovered ? 'animate-pulse' : ''
              }`}
            />
            
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500"
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
      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        isHovered 
          ? 'opacity-100 translate-y-12 scale-100' 
          : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
      }`}>
        <div className="relative">
          {/* Tooltip background */}
          <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-slate-600/50 whitespace-nowrap font-medium shadow-xl">
            {label}
            
            {/* Tooltip arrow */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-slate-600/50 rotate-45"></div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-500/30 rounded-lg blur-md -z-10"></div>
        </div>
      </div>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 bg-white/10 rounded-full transform scale-0 ${
          isHovered ? 'animate-ping' : ''
        } transition-all duration-700`}></div>
      </div>
    </a>
  );
};

export default Footer;