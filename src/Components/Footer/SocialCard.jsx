// components/SocialCard.jsx
import React from "react";

const SocialCard = ({ href, icon: Icon, label, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105`}
    >
      <Icon className={`${color} w-5 h-5`} />
      <span className={`${color} font-medium`}>{label}</span>
    </a>
  );
};

export default SocialCard;
