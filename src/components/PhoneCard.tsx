import React, { useState } from 'react';
import { Phone } from '../data/phones';

interface PhoneCardProps {
  phone: Phone;
  onApply: (phone: Phone) => void;
}

// Reusable spec item component
const SpecItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

export const PhoneCard: React.FC<PhoneCardProps> = React.memo(({ phone, onApply }) => {
  const [expanded, setExpanded] = useState(false);
  const { specs = {} } = phone;

  const specEntries = Object.entries(specs);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative">
        <img
          src={
            phone.name === 'Samsung A14'
              ? 'https://i.pinimg.com/1200x/eb/d7/d4/ebd7d41071f941578aaff6863e0ab27f.jpg'
              : phone.image
          }
          alt={`${phone.brand} ${phone.name}`}
          className="w-full h-64 sm:h-48 md:h-64 object-cover"
          loading="lazy"
        />
        {phone.available && (
          <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            Available
          </span>
        )}
      </div>

      {/* Details Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{phone.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{phone.brand}</p>

        {/* Specs with Read More */}
        {specEntries.length > 0 && (
          <div className="space-y-2 mb-4">
            {specEntries.slice(0, expanded ? specEntries.length : 2).map(([label, value]) => (
              <SpecItem key={label} label={label} value={value as string} />
            ))}
            {specEntries.length > 2 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-blue-600 font-semibold hover:underline"
              >
                {expanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        )}

        {/* Pricing & Action */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">Weekly Payment</p>
              <p className="text-2xl font-bold text-green-600">KSh {phone.weeklyPayment}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Price</p>
              <p className="text-lg font-semibold text-gray-900">
                KSh {phone.price.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            onClick={() => onApply(phone)}
            aria-label={`Apply for ${phone.name}`}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
});
