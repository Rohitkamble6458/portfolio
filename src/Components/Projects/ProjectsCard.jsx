import React, { useState, useEffect, useRef } from "react";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ProjectCard = ({
  title,
  main,
  demoLink,
  sourceCodeLink,
  bannerImg,
  projectImages = [],
  projectCaptions = [],
  projectDetails = "",
  powerBiEmbedUrl = "",
  badgeText = "",
  badgeIcon = null,
  badgeBgColor = "#facc15",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const allImages = projectImages.length > 0 ? projectImages : [bannerImg];
  const allCaptions = projectImages.length > 0 
    ? projectCaptions.length > 0 
      ? projectCaptions 
      : new Array(projectImages.length).fill("")
    : [""];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`p-4 sm:p-5 pb-0 mb-0 flex flex-col w-96 sm:w-80 md:w-96 lg:w-80 xl:w-96 h-[520px] sm:h-[540px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-xl shadow-slate-900 rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex-shrink-0 relative overflow-hidden group ${
          isVisible 
            ? 'animate-slideInUp opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>

        <h3 className={`px-3 sm:px-4 text-xl sm:text-xl lg:text-2xl font-bold leading-tight mb-3 sm:mb-4 line-clamp-2 relative z-10 text-white transition-all duration-500 group-hover:translate-y-[-2px] group-hover:text-blue-200 ${
          isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-8'
        }`}>
          {title}
          {/* Animated underline from certificate card */}
          <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
        </h3>

        <div
          className={`overflow-hidden rounded-lg cursor-pointer mb-2 sm:mb-3 relative z-10 group-hover:rounded-xl transition-all duration-500 ${
            isVisible ? 'animate-zoomInBounce' : 'opacity-0 scale-95'
          }`}
          onClick={openModal}
        >
          <img
            className="h-40 sm:h-44 lg:h-48 w-full object-cover transform transition-all duration-700 hover:scale-110 hover:rotate-1 rounded-md bg-gradient-to-br from-white to-gray-100 shadow-inner"
            src={bannerImg}
            alt={title}
          />
          {/* Animated overlay from certificate card */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Floating badge from certificate card */}
          <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-lg">
            View Project
          </div>
        </div>

        <p className={`px-3 sm:px-4 text-sm sm:text-sm lg:text-base leading-relaxed py-2 sm:py-3 flex-grow overflow-hidden line-clamp-5 cursor-pointer relative z-10 text-gray-300 transition-all duration-500 ${
          isVisible ? 'animate-fadeInLeft' : 'opacity-0 translate-x-8'
        }`} onClick={openModal}>
          {main}
        </p>

        {/* Badge in card view */}
        {(badgeIcon || badgeText) && (
          <div className={`flex justify-between items-center px-3 sm:px-4 mb-3 relative z-10 transition-all duration-500 ${
            isVisible ? 'animate-bounceInScale' : 'opacity-0 scale-0'
          }`}>
            {badgeText && (
              <span
                className="text-black text-xs font-semibold px-2 py-1 rounded-full transform hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: badgeBgColor }}
              >
                {badgeText}
              </span>
            )}
            {badgeIcon && (
              <img src={badgeIcon} alt="Badge Icon" className="h-8 w-8 animate-pulse" />
            )}
          </div>
        )}

        <div className={`mt-auto p-3 sm:p-4 flex gap-3 sm:gap-4 relative z-10 transition-all duration-500 ${
          isVisible ? 'animate-slideInBottom' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-white py-2 px-2 sm:px-3 text-xs sm:text-sm lg:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            Demo
          </a>
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-white py-2 px-2 sm:px-3 text-xs sm:text-sm lg:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            Source Code
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-auto scrollbar-hide border border-slate-600/50 animate-slideUp transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="animate-fadeInUp">
              <div className="flex justify-between items-center border-b border-gray-700 p-3 sm:p-4 lg:p-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pr-4 animate-slideRight">
                  {title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700 transition-colors flex-shrink-0 hover:rotate-90 transform duration-300"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-3 sm:p-4 lg:p-6 lg:border-r border-gray-700">
                  {/* Badge in modal */}
                  {(badgeIcon || badgeText) && (
                    <div className="flex items-center justify-between gap-2 mb-4 animate-bounceIn">
                      {badgeText && (
                        <span
                          className="text-black text-xs sm:text-sm font-semibold px-2 py-1 rounded-full"
                          style={{ backgroundColor: badgeBgColor }}
                        >
                          {badgeText}
                        </span>
                      )}
                      {badgeIcon && (
                        <img
                          src={badgeIcon}
                          alt="Badge Icon"
                          className="h-12 w-12"
                        />
                      )}
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white animate-slideRight">
                    {title}
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed animate-slideLeft">
                    {main}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-bounceIn">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-center text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform active:scale-95"
                    >
                      View Demo ✓
                    </a>
                    <a
                      href={sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-center text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transform active:scale-95"
                    >
                      View Source Code ✓
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white animate-slideRight">
                    Project Images
                  </h3>
                  <div className="relative animate-zoomIn">
                    <img
                      src={allImages[currentImageIndex]}
                      alt={`${title} - Photo ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-96 object-contain rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-inner transition-transform duration-300 hover:scale-105"
                    />
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all hover:scale-110 transform duration-200"
                        >
                          <ChevronLeftIcon />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all hover:scale-110 transform duration-200"
                        >
                          <ChevronRightIcon />
                        </button>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded text-white text-xs sm:text-sm">
                          {currentImageIndex + 1} / {allImages.length}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Image Caption */}
                  {allCaptions[currentImageIndex] && (
                    <div className="mt-3 p-3 bg-gray-800 rounded-lg animate-fadeInUp">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                        {allCaptions[currentImageIndex]}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-3 sm:p-4 lg:p-6 border-t border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white animate-slideLeft">
                  Project Details
                </h3>
                <div className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line animate-fadeInUp">
                  {projectDetails || main}
                </div>

                {powerBiEmbedUrl && (
                  <div className="mt-4 sm:mt-6 animate-slideInBottom">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
                      Live Power BI Dashboard
                    </h3>
                    <div className="w-full aspect-video">
                      <iframe
                        title="Power BI Dashboard"
                        width="100%"
                        height="100%"
                        src={powerBiEmbedUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Particle Animation */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #60a5fa, #a855f7);
          border-radius: 50%;
          opacity: 0;
          animation: float 6s infinite ease-in-out;
        }
        .particle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .particle-2 {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        .particle-3 {
          bottom: 30%;
          left: 70%;
          animation-delay: 4s;
        }

        /* Certificate Card Animations */
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

        /* Existing Animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomInBounce {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceInScale {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          60% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            opacity: 0;
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Animation Classes */
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

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out 0.2s forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out 0.4s forwards;
        }

        .animate-zoomInBounce {
          animation: zoomInBounce 0.8s ease-out 0.3s forwards;
        }

        .animate-bounceInScale {
          animation: bounceInScale 0.6s ease-out 0.5s forwards;
        }

        .animate-slideInBottom {
          animation: slideInBottom 0.6s ease-out 0.6s forwards;
        }

        .animate-modalSlideIn {
          animation: modalSlideIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default ProjectCard;