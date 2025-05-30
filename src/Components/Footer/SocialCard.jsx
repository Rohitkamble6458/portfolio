// components/SocialCard.jsx
import React from "react";

const SocialCard = ({ href, icon: Icon, label, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-20 h-20 flex mt-5 flex-col items-center justify-center rounded-xl shadow-md bg-[#0c0e19] hover:shadow-xl transition duration-300 text-center"
    >
      <Icon className={`text-4xl mb-2 ${color}`} />
      <span className="text-sm font-medium text-white">{label}</span>
    </a>
  );
};

export default SocialCard;
