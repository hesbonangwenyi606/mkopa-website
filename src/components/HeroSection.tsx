import React from 'react';

export const HeroSection: React.FC = () => {
  const scrollToPhones = () => {
    document.getElementById('phones')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-24">
      <div className="absolute inset-0 opacity-20">
        <img src="https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812937519_84aefd55.webp" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Trusted Mobile Solutions Partner</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">Mkopa Phones | M-PESA Till Setup | SIM Services</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToPhones} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
            Browse Phones
          </button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
