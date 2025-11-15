import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  onClick: () => void;
  gradientFrom?: string; // Tailwind color class, e.g., "green-500"
  gradientTo?: string;   // Tailwind color class, e.g., "green-600"
  borderColor?: string;  // Tailwind border color, e.g., "green-500"
  animationDelay?: number; // delay in seconds for fade-in stagger
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  onClick,
  gradientFrom = 'green-500',
  gradientTo = 'green-600',
  borderColor = 'green-500',
  animationDelay = 0,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 border-t-4 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
      style={{
        borderTopColor: `var(--tw-border-opacity, 1)`,
        animation: `fadeInUp 1s forwards`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} animate-float-slow`}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start feature-item">
            <svg
              className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        onClick={onClick}
        aria-label={`Learn more about ${title}`}
        className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 animate-float-slow`}
      >
        Learn More
      </button>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-float-slow {
            animation: floatY 6s ease-in-out infinite alternate;
          }

          @keyframes floatY {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          .feature-item:hover svg {
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
};
