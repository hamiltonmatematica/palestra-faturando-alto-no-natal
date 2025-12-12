import React from 'react';
import { SnowflakeIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden christmas-gradient">
      {/* Decorative Snowflakes */}
      <div className="absolute top-10 right-10 text-brand-red opacity-20 animate-pulse">
        <SnowflakeIcon className="w-16 h-16" />
      </div>
      <div className="absolute top-40 left-10 text-brand-green opacity-20">
        <SnowflakeIcon className="w-10 h-10" />
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-4 tracking-wide uppercase">
          Palestra Especial Presencial
        </span>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark mb-4 leading-tight">
          Faturando alto <br/>
          <span className="text-brand-red">no Natal</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 max-w-2xl mx-auto">
          Como começar <span className="text-brand-green font-bold">2026</span> com boas vendas e caixa.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10 text-sm md:text-base text-gray-500 font-semibold">
          <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Empresários</span>
          <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Profissionais Liberais</span>
          <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Autônomos</span>
          <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">Microempreendedores</span>
        </div>

        <button 
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 text-lg"
        >
          Garantir minha vaga agora
        </button>
      </div>
    </section>
  );
};

export default Hero;