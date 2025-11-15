import React, { useState, useEffect, useRef } from 'react';
import { Phone } from '../data/phones';

interface ApplyModalProps {
  phone: Phone | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ phone, isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', idNumber: '', location: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const confettiColors = ['#F43F5E', '#FACC15', '#22D3EE', '#10B981', '#3B82F6', '#8B5CF6'];
  const confettiCount = 50;

  // Close modal on outside click
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  if (!isOpen || !phone) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);

    setTimeout(() => {
      setSubmitted(false);
      setShowConfetti(false);
      onClose();
      setFormData({ name: '', phone: '', idNumber: '', location: '' });
    }, 3000);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-2xl max-w-md w-full p-8 relative transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            {/* Phone Image with zoom & shadow */}
            {phone && (
              <img
                src={phone.image}
                alt={phone.name}
                className="w-32 h-32 object-cover rounded-xl mx-auto mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-300/50"
              />
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for {phone.name}</h2>
            <p className="text-gray-600 mb-6">Weekly Payment: KSh {phone.weeklyPayment}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="ID Number"
                required
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Location"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </>
        ) : (
          // Success overlay with colorful confetti
          <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center rounded-2xl transition-all duration-500 animate-success-overlay overflow-hidden">
            {/* Confetti */}
            {showConfetti &&
              Array.from({ length: confettiCount }).map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-confetti"
                  style={{
                    backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                    left: `${Math.random() * 100}%`,
                    top: '-10%',
                    width: `${4 + Math.random() * 4}px`,
                    height: `${4 + Math.random() * 4}px`,
                    animationDuration: `${1 + Math.random() * 1.5}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 scale-90 opacity-0">
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 text-center">We'll contact you shortly.</p>
          </div>
        )}

        {/* Animations */}
        <style>
          {`
            .animate-success-overlay {
              animation: successOverlay 0.5s forwards;
            }
            @keyframes successOverlay {
              0% { opacity: 0; transform: scale(0.9); }
              100% { opacity: 1; transform: scale(1); }
            }

            .animate-confetti {
              animation-name: confettiFall;
              animation-timing-function: ease-out;
            }
            @keyframes confettiFall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(150px) rotate(360deg); opacity: 0; }
            }
          `}
        </style>
      </div>
    </div>
  );
};
