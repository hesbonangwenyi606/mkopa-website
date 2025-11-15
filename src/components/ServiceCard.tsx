import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  onClick: () => void;
  animationDelay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  onClick,
  animationDelay = 0,
}) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br from-green-500 to-green-600 animate-float-slow">
        {icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="mr-2 text-green-500 mt-0.5">✔️</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        onClick={onClick}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 animate-float-slow"
      >
        Learn More
      </button>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in-up {
            opacity: 0;
            animation: fadeInUp 1s forwards;
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-float-slow {
            animation: floatY 6s ease-in-out infinite alternate;
          }

          @keyframes floatY {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};
