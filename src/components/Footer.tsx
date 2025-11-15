import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Wesily Momanyi</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for mobile solutions in Kenya.</p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/wesley.nyangena"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.003 0c2.291-1.552 3.298-1.23 3.298-1.23.653 1.649.24 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.218.694.824.576C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:underline">Home</button></li>
              <li><button onClick={() => scrollToSection('phones')} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:underline">Phones</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:underline">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:underline">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mkopa Phones</li>
              <li>Lipa Pole Pole</li>
              <li>M-PESA Till Setup</li>
              <li>SIM Registration</li>
              <li>SIM Replacement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tel: +254(0)794 170 324</li>
              <li>Email: <a href="mailto:wesily@example.com" className="hover:underline hover:text-green-400 transition-all duration-300">wesily@example.com</a></li>
              <li>Location: Nairobi, Kenya</li>
              <li>Hours: Mon-Sat, 8AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2022 - {currentYear} Wesily Momanyi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
