import React from 'react';
import { ServiceCard } from './ServiceCard';
import { FaMobileAlt, FaSimCard, FaMoneyCheckAlt } from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <FaMobileAlt className="w-6 h-6 text-white" />,
    title: 'Phone Sales',
    description: 'Affordable smartphones with flexible payment plans.',
    features: ['Flexible weekly payments', 'Warranty included', 'Latest models'],
  },
  {
    icon: <FaSimCard className="w-6 h-6 text-white" />,
    title: 'SIM & Network Services',
    description: 'Get your SIM card and activate services quickly.',
    features: ['M-PESA setup', 'Network activation', 'SIM replacement'],
  },
  {
    icon: <FaMoneyCheckAlt className="w-6 h-6 text-white" />,
    title: 'Financial Services',
    description: 'Seamless integration with mobile money solutions.',
    features: ['M-PESA integration', 'Easy repayments', 'Secure transactions'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">
          We provide end-to-end mobile solutions tailored for your needs.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            onClick={() => alert(`Learn more about ${service.title}`)}
            gradientFrom="green-500"
            gradientTo="green-600"
            borderColor="green-500"
            animationDelay={index * 0.3} // Stagger fade-in
          />
        ))}
      </div>
    </section>
  );
};
