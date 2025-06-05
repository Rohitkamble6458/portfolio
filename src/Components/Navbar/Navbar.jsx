import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#Home', icon: '🏠' },
    { name: 'About', href: '#About', icon: '👤' },
    { name: 'Key skills', href: '#Key_skills', icon: '🚀' },
    { name: 'Projects', href: '#Projects', icon: '💼' },
    { name: 'Certificates', href: '#Certificates', icon: '🏆' },
    { name: 'Contact', href: '#Footer', icon: '📧' }
  ];

  const toggleMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = (sectionName) => {
    setActiveSection(sectionName);
    if (menu) {
      setMenu(false);
      setShowMenu(true);
    }
  };

  return (
    <>
      {/* Animated background particles */}
      <div className="fixed top-0 left-0 w-full h-20 pointer-events-none z-40">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.sin(i) * 20}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <nav className={`flex flex-wrap justify-between md:items-center text-white px-6 md:px-20 fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'py-3 bg-black/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-slate-700/50' 
          : 'py-6 bg-black/30 backdrop-blur-sm'
      }`}>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-all duration-1000 pointer-events-none"></div>
        
        {/* Portfolio brand with enhanced animations */}
        <a href="#Home" onClick={() => handleLinkClick('Home')} className="relative group z-10">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
            
            <span className={`relative text-3xl md:text-4xl font-bold tracking-wide cursor-pointer transition-all duration-700 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transform ${
              scrolled ? 'text-2xl md:text-3xl' : ''
            }`}>
              Rohit Kamble
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              
              {/* Floating particles around brand */}
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              <div className="absolute -bottom-1 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse animation-delay-300 transition-all duration-500"></div>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center justify-center gap-2 relative">
          {/* Background glow for nav items */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {navItems.map((item, index) => (
            <a 
              key={item.name}
              href={item.href} 
              onClick={() => handleLinkClick(item.name)}
              className="relative group flex items-center gap-2"
            >
              <li className={`relative px-4 py-3 text-lg font-semibold cursor-pointer transition-all duration-500 hover:scale-105 transform rounded-xl ${
                activeSection === item.name 
                  ? 'text-blue-400 bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
                  : 'hover:text-blue-300'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                
                {/* Icon left side */}
                <span
                  className={`text-sm transform transition-all duration-300 ${
                    activeSection === item.name
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}
                >
                  {item.icon}
                </span>
                
                {/* Text */}
                <span className="relative">
                  {item.name}
                </span>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-400 rounded-full"></div>
                
                {/* Hover sparkles */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              </li>
            </a>
          ))}
        </ul>

        {/* Mobile Menu Toggle with enhanced animations */}
        <div className="md:hidden relative z-10">
          {showMenu ? (
            <div 
              className="relative group cursor-pointer p-2 rounded-xl transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20"
              onClick={toggleMenu}
            >
              <RiMenu2Line size={28} className="transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ) : (
            <div 
              className="relative group cursor-pointer p-2 rounded-xl transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20"
              onClick={toggleMenu}
            >
              <RiCloseLine size={28} className="transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${
          menu ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[-20px] scale-95 pointer-events-none'
        } md:hidden absolute top-full left-6 right-6 mt-4 transition-all duration-500 transform`}>
          
          {/* Mobile menu background with glassmorphism */}
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-blue-500/10 overflow-hidden">
            
            {/* Animated background particles in mobile menu */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            <ul className="relative p-6 space-y-2">
              {navItems.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  onClick={() => handleLinkClick(item.name)}
                  className="block"
                >
                  <li className={`group relative flex items-center gap-3 p-4 text-xl font-semibold cursor-pointer transition-all duration-500 rounded-xl hover:scale-105 transform ${
                    menu ? 'animate-slideInMobile' : ''
                  } ${
                    activeSection === item.name 
                      ? 'text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                      : 'hover:text-blue-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Mobile item background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                    
                    {/* Icon left side */}
                    <span
                      className={`text-2xl transform transition-all duration-300 ${
                        activeSection === item.name
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                      }`}
                    >
                      {item.icon}
                    </span>

                    {/* Text */}
                    <span className="relative">
                      {item.name}
                    </span>
                    
                    {/* Mobile item border effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-400 rounded-full"></div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  </li>
                </a>
              ))}
            </ul>
            
            {/* Bottom decorative element for mobile menu */}
            <div className="flex justify-center pb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-4 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
                    style={{ 
                      animationDelay: `${i * 200}ms`,
                      height: `${8 + Math.random() * 8}px`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInMobile {
          animation: slideInMobile 0.5s ease-out both;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        /* Custom scrollbar for mobile menu if needed */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;
