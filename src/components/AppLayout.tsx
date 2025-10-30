import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { PhoneCard } from './PhoneCard';
import { ServiceCard } from './ServiceCard';
import { TestimonialCard } from './TestimonialCard';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { ApplyModal } from './ApplyModal';
import { phones, Phone } from '../data/phones';

const AppLayout: React.FC = () => {
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredPhones = filter === 'all' ? phones : phones.filter(p => p.brand === filter);

  const handleApply = (phone: Phone) => {
    setSelectedPhone(phone);
    setModalOpen(true);
  };

  const services = [
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: "Mkopa Phones / Lipa Pole Pole",
      description: "Get the latest smartphones with flexible weekly payments",
      features: ["No upfront payment", "Affordable weekly rates", "12+ phone models", "Quick approval"]
    },
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      title: "M-PESA Till Number Setup",
      description: "Start accepting payments with your own M-PESA till number",
      features: ["Fast registration", "Business account setup", "Low transaction fees", "Full support"]
    },
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: "SIM Card Registration",
      description: "Complete SIM registration with all required documentation",
      features: ["All networks supported", "ID verification", "Same-day service", "Secure process"]
    },
    {
      icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
      title: "SIM Card Replacement",
      description: "Lost or damaged SIM? Get a replacement quickly",
      features: ["Keep your number", "Fast processing", "All carriers", "Affordable rates"]
    }
  ];

  const testimonials = [
    { name: "John Kamau", location: "Nairobi", text: "Got my Samsung phone through Wesily. Weekly payments are so manageable!", rating: 5 },
    { name: "Mary Wanjiku", location: "Mombasa", text: "Best service for M-PESA till setup. Very professional!", rating: 5 },
    { name: "Peter Omondi", location: "Kisumu", text: "SIM registration was quick and easy. Highly recommend!", rating: 5 },
    { name: "Grace Akinyi", location: "Nakuru", text: "Affordable phones with great payment plans. Thank you Wesily!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Complete mobile solutions for all your needs</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
            ))}
          </div>
        </div>
      </section>

      <section id="phones" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Available Phones</h2>
          <p className="text-xl text-center text-gray-600 mb-8">Lipa pole pole - Pay weekly!</p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-lg font-semibold ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}>All</button>
            <button onClick={() => setFilter('Samsung')} className={`px-6 py-2 rounded-lg font-semibold ${filter === 'Samsung' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}>Samsung</button>
            <button onClick={() => setFilter('Tecno')} className={`px-6 py-2 rounded-lg font-semibold ${filter === 'Tecno' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}>Tecno</button>
            <button onClick={() => setFilter('Infinix')} className={`px-6 py-2 rounded-lg font-semibold ${filter === 'Infinix' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}>Infinix</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPhones.map(phone => (
              <PhoneCard key={phone.id} phone={phone} onApply={handleApply} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} {...t} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ApplyModal phone={selectedPhone} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default AppLayout;
