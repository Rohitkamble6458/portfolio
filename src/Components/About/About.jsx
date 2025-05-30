import React, { useState, useEffect, useRef } from "react";
import ProjectStats from "../Projects/ProjectStats ";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState([0, 0, 0]);
  const aboutRef = useRef(null);

  // Skills data with progress percentages
  const skills = [
    {
      title: "Data Visualization Expert",
      description: "I specialize in transforming complex datasets into compelling visual stories using Power BI, Tableau, and Python libraries like Matplotlib and Seaborn. My expertise includes creating interactive dashboards, KPI tracking systems, and automated reporting solutions that drive data-driven decision making across organizations.",
      icon: "📊",
      progress: 95,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Database & Analytics Developer",
      description: "With advanced SQL skills and experience in MySQL, PostgreSQL, and MongoDB, I design efficient data pipelines and perform complex data analysis. I excel in data cleaning, ETL processes, statistical analysis, and creating scalable database solutions that support business intelligence initiatives.",
      icon: "🗄️",
      progress: 90,
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Python Data Scientist",
      description: "I leverage Python's powerful ecosystem including Pandas, NumPy, Scikit-learn, and Jupyter notebooks for advanced data analysis, machine learning, and predictive modeling. My work spans from exploratory data analysis to building automated data processing workflows and creating insightful business reports.",
      icon: "🐍",
      progress: 88,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateProgress();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Animate progress bars
  const animateProgress = () => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        let current = 0;
        const target = skill.progress;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setSkillProgress(prev => {
            const newProgress = [...prev];
            newProgress[index] = Math.floor(current);
            return newProgress;
          });
        }, 30);
      }, index * 300);
    });
  };

  return (
    <div
      id="About"
      ref={aboutRef}
      className="text-white bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-xl animate-float animation-delay-3000"></div>
      </div>

      {/* Floating data particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Title with enhanced animation */}
      <div className={`transition-all duration-1000 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 translate-x-[-50px]'}`}>
        <h2 className="text-2xl md:text-4xl font-bold text-left mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative">
          About Me
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-all duration-1000"></div>
        </h2>
      </div>

      {/* Skills Section - Now full width */}
      <div className="w-full">
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.bgGradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105`}></div>
              
              {/* Main skill card */}
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-102 hover:shadow-xl">
                
                <div className="flex gap-4">
                  {/* Animated icon */}
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      {skill.icon}
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse animation-delay-500 transition-all duration-500"></div>
                  </div>

                  <div className="flex-1">
                    {/* Skill title with gradient text */}
                    <h1 className={`text-xl md:text-2xl font-semibold leading-normal mb-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300`}>
                      {skill.title}
                    </h1>
                    
                    {/* Description */}
                    <p className="text-sm md:text-md leading-relaxed text-gray-300 group-hover:text-gray-200 transition-all duration-300 mb-4">
                      {skill.description}
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-400">Proficiency</span>
                        <span className={`text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skillProgress[index]}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden shadow-inner">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left transition-all duration-1000 shadow-lg relative overflow-hidden`}
                          style={{ 
                            width: `${skillProgress[index]}%`,
                            transitionDelay: `${index * 300 + 500}ms`
                          }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover sparkle effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-16 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse animation-delay-300 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(200%) skewX(12deg);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default About;