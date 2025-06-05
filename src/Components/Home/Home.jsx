import React from "react";
import { Download, Code, Sparkles, ArrowRight } from "lucide-react";
import TextChange from "../TextChange";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import SocialCard from "../Footer/SocialCard";
import ProjectStats from "../Projects/ProjectStats ";
import Avatar from "../../Assets/Profile_photo.jpg";

const Home = () => {
  const downloadResume = (e) => {
    e.preventDefault();
    
    try {
      // Method 1: Direct download using fetch (recommended)
      const resumePath = "/Resume/Resume.pdf"; // Remove 'public' from path
      
      
      fetch(resumePath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Resume file not found');
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "RohitKamble_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error downloading resume:', error);
          // Fallback: try direct link method
          window.open(resumePath, '_blank');
        });
    } catch (error) {
      console.error('Download failed:', error);
      alert('Sorry, unable to download resume. Please try again later.');
    }
  };

  // Alternative method - simpler approach
  const downloadResumeSimple = (e) => {
    e.preventDefault();
    const resumePath = "/Resume/Resume.pdf";
    
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "RohitKamble_Resume.pdf";
    link.target = "_blank"; // Fallback to open in new tab if download fails
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <div
        id="Home"
        className="relative text-white flex flex-col md:flex-row w-full min-h-screen justify-between items-center pt-28 md:pt-10 px-5 md:px-20 overflow-hidden"
      >
        {/* Left content */}
        <div className="w-full md:w-2/4 md:pt-10 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Animated greeting badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6 animate-slideInLeft">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </div>

          {/* Main heading with enhanced animation */}
          <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter mb-6 animate-slideInUp">
            <TextChange />
          </h1>

          {/* Enhanced description */}
          <p className="text-sm md:text-2xl tracking-tight mb-8 leading-relaxed animate-slideInUp animation-delay-300 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            A passionate and detail-oriented software developer skilled in
            front-end development, web systems, and software design, eager to
            apply knowledge and contribute to impactful projects.
          </p>

          {/* Avatar section - visible only on mobile, positioned between heading and description */}
          <div className="md:hidden relative animate-slideInUp animation-delay-400 mb-6 flex justify-center">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150 animate-pulse-slow"></div>

            {/* Code floating elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg animate-float animation-delay-1000">
              <Code className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg animate-float animation-delay-2000">
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            {/* Avatar with enhanced styling - smaller on mobile */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                className="relative z-10 transform group-hover:scale-105 transition-all duration-500 hover:rotate-2 rounded-full shadow-2xl w-48 h-48 object-cover"
                src={Avatar}
                alt="Developer Avatar"
              />
            </div>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slideInUp animation-delay-600 justify-center md:justify-start">
            <a href="#Footer">
              <button className="group relative overflow-hidden text-white py-3 px-6 text-sm md:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>

            {/* Fixed Resume download button */}
            <button
              onClick={downloadResume}
              className="group relative overflow-hidden text-white py-3 px-6 text-sm md:text-lg font-semibold rounded-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/25 transform active:scale-95 flex items-center gap-2 border border-slate-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Enhanced social cards */}
          <div className="flex flex-wrap gap-3 animate-slideInUp animation-delay-900 justify-center md:justify-start">
            <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-3">
              <SocialCard
                href="https://www.linkedin.com/in/rohitkamble6458/"
                icon={CiLinkedin}
                label="LinkedIn"
                color="text-blue-400"
              />
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:-rotate-3">
              <SocialCard
                href="https://github.com/Rohitkamble6458"
                icon={FaGithub}
                label="GitHub"
                color="text-white"
              />
            </div>
            <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-3">
              <SocialCard
                href="https://www.hackerrank.com/profile/rohitkamble6451"
                icon={FaHackerrank}
                label="HackerRank"
                color="text-green-400"
              />
            </div>
          </div>
        </div>

        {/* Right content - Enhanced avatar (Desktop only) */}
        <div className="hidden md:block relative animate-slideInRight">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150 animate-pulse-slow"></div>

          {/* Code floating elements */}
          <div className="absolute -top-10 -left-10 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg animate-float animation-delay-1000">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg animate-float animation-delay-2000">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          {/* Avatar with enhanced styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              className="relative z-10 transform group-hover:scale-105 transition-all duration-500 hover:rotate-2 rounded-full shadow-2xl"
              src={Avatar}
              alt="Developer Avatar"
            />
          </div>
        </div>
      </div>

      {/* Enhanced ProjectStats with animation */}
      <div className="animate-slideInUp animation-delay-1200">
        <ProjectStats />
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </>
  );
};

export default Home;