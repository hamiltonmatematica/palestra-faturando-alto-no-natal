import React from 'react';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Hero />
      <EventDetails />
      <Speakers />
      
      {/* Value Proposition Section */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6">Por que participar?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-gold mb-3">Vendas de Natal</h3>
              <p className="text-gray-300">Descubra estratégias práticas para maximizar seu faturamento na data mais importante do varejo.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-gold mb-3">Planejamento 2026</h3>
              <p className="text-gray-300">Não espere janeiro chegar. Comece o ano novo com caixa positivo e um plano de ação definido.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-brand-gold mb-3">Networking</h3>
              <p className="text-gray-300">Conecte-se com outros empresários, profissionais liberais e líderes de Montes Claros.</p>
            </div>
          </div>
        </div>
      </section>

      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;