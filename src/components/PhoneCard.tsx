import React from 'react';
import { Phone } from '../data/phones';

interface PhoneCardProps {
  phone: Phone;
  onApply: (phone: Phone) => void;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone, onApply }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <img src={phone.image} alt={phone.name} className="w-full h-64 object-cover" />
        {phone.available && (
          <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            Available
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{phone.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{phone.brand}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Screen:</span>
            <span className="font-medium">{phone.specs.screen}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Camera:</span>
            <span className="font-medium">{phone.specs.camera}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Battery:</span>
            <span className="font-medium">{phone.specs.battery}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Storage:</span>
            <span className="font-medium">{phone.specs.storage}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">Weekly Payment</p>
              <p className="text-2xl font-bold text-green-600">KSh {phone.weeklyPayment}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Price</p>
              <p className="text-lg font-semibold text-gray-900">KSh {phone.price.toLocaleString()}</p>
            </div>
          </div>
          
          <button
            onClick={() => onApply(phone)}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
