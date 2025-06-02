import React, { useState, useEffect, useRef } from "react";
import sql from "../../assets/sql-b-icon.png";
import powerBi from "../../assets/power-bi-icon.png";
import excel from "../../assets/excel.svg";
import python from "../../assets/python.svg";

const ProjectStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);

  const stats = [
    {
      label: "Excel Projects",
      count: 1,
      icon: excel,
      color: "from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/25",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      label: "PowerBI Projects",
      count: 4,
      icon: powerBi,
      color: "from-yellow-500 to-orange-600",
      shadowColor: "shadow-yellow-500/25",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      label: "SQL Projects",
      count: 2,
      icon: sql,
      color: "from-orange-500 to-red-600",
      shadowColor: "shadow-orange-500/25",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      label: "Python Projects",
      count: 3,
      icon: python,
      color: "from-purple-500 to-indigo-600",
      shadowColor: "shadow-purple-500/25",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    },
  ];

  // Intersection Observer to trigger animations when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animate counters with staggered timing
  const animateCounters = () => {
    stats.forEach((stat, index) => {
      setTimeout(() => {
        let current = 0;
        const increment = stat.count / 30; // Divide by 30 for smooth animation
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.count) {
            current = stat.count;
            clearInterval(timer);
          }
          setAnimatedCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 50);
      }, index * 200); // Stagger each counter by 200ms
    });
  };

  return (
    <div className="w-full flex justify-center items-center py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-full blur-2xl animate-float animation-delay-2000"></div>
      </div>

      <div 
        ref={statsRef}
        className={`relative backdrop-blur-sm bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl shadow-2xl border border-slate-700/50 px-8 py-8 transition-all duration-1000 ${
          isVisible ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Title with animation */}
        <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Project Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`group relative min-w-[180px] transition-all duration-700 ${
                isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105`}></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group-hover:shadow-blue-500/10">
                
                {/* Icon container with animations */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500 scale-110`}></div>
                    
                    {/* Icon background */}
                    <div className={`relative bg-gradient-to-r ${item.color} p-3 rounded-xl shadow-lg ${item.shadowColor} transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <img 
                        src={item.icon} 
                        alt={item.label} 
                        className="w-12 h-12 object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300" 
                      />
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500`}></div>
                    <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse animation-delay-500 transition-all duration-500`}></div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    {/* Animated counter */}
                    <div className="relative">
                      <p className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent transform group-hover:scale-110 transition-all duration-500 tabular-nums`}>
                        {animatedCounts[index]}
                      </p>
                      {/* Counter glow effect */}
                      <div className={`absolute inset-0 text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500`}>
                        {animatedCounts[index]}
                      </div>
                    </div>
                    
                    {/* Label with hover effect */}
                    <p className="text-lg font-semibold text-gray-300 group-hover:text-white transition-all duration-300 mt-1">
                      {item.label}
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-3 h-1 bg-slate-600 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transform origin-left transition-all duration-1000 ${
                          isVisible ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 200 + 500}ms`,
                          width: `${(item.count / Math.max(...stats.map(s => s.count))) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Hover overlay with sparkle effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse animation-delay-300 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`flex justify-center mt-8 ${isVisible ? 'animate-fadeInUp animation-delay-1000' : 'opacity-0'}`}>
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse`}
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out both;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out 0.3s both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ProjectStats;