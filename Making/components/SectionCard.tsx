
import React, { useState } from 'react';

interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-800/70 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-teal-400">{icon}</span>
          <h2 className="text-xl font-bold text-gray-100">{title}</h2>
        </div>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionCard;
