import React, { useEffect, useState } from 'react';

export const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPhones = () => {
    document.getElementById('phones')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      >
        <img
          src="https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812937519_84aefd55.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
          Your Trusted Mobile Solutions Partner
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 opacity-0 animate-fade-in-up delay-300">
          Mkopa Phones | M-PESA Till Setup | SIM Services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-500">
          <button
            onClick={scrollToPhones}
            className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
          >
            Browse Phones
          </button>
          <button
            onClick={scrollToServices}
            className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Fade-in Animation Styles */}
      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 1s forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};
