import React, { useState } from "react";

const CertificateCard = ({ image, title, description, verifyLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xs 2xl:max-w-sm h-auto overflow-visible rounded-xl shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 break-inside-avoid mx-auto group relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-lg group-hover:rounded-xl transition-all duration-500">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-52 md:h-56 lg:h-52 xl:h-48 2xl:h-52 object-contain transform transition-all duration-700 hover:scale-110 hover:rotate-1 rounded-md bg-gradient-to-br from-white to-gray-100 shadow-inner"
          />
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Floating badge */}
          <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
            Verified
          </div>
        </div>
        <div className="p-3 relative">
          <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs 2xl:text-sm font-medium text-center text-white break-words transform transition-all duration-500 group-hover:translate-y-[-2px] group-hover:text-blue-200">
            {title}
          </p>
          {/* Animated underline */}
          <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-6 rounded-2xl shadow-2xl max-w-[90%] max-h-[90%] overflow-auto scrollbar-hide border border-slate-600/50 animate-slideUp transform"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <div className="animate-fadeInUp">
              <img
                src={image}
                alt={title}
                className="w-full max-h-[600px] object-contain rounded-xl mb-4 shadow-lg animate-zoomIn"
              />
              <h2 className="text-xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-slideRight">
                {title}
              </h2>
              <p className="text-gray-300 mb-4 text-sm text-center leading-relaxed animate-slideLeft">
                {description}
              </p>
              <div className="flex justify-center animate-bounceIn">
                <a
                  href={verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform active:scale-95"
                >
                  Verify Certificate ✓
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
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
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }
        
        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out;
        }
        
        .animate-slideRight {
          animation: slideRight 0.5s ease-out 0.2s both;
        }
        
        .animate-slideLeft {
          animation: slideLeft 0.5s ease-out 0.3s both;
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out 0.4s both;
        }
      `}</style>
    </>
  );
};

export default CertificateCard;