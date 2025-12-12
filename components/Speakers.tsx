import React from 'react';
import { Speaker } from '../types';

const speakers: Speaker[] = [
  {
    name: "Diego Suzano",
    role: "Empresário, Palestrante, Mentor, CEO Holding Terranova",
    image: "/diego-suzano.png", // Certifique-se de adicionar esta imagem na pasta public
    colorTheme: "red"
  },
  {
    name: "Marya Lopes",
    role: "Especialista em Comunicação e Posicionamento, Influencer",
    image: "/marya-lopes.png", // Certifique-se de adicionar esta imagem na pasta public
    colorTheme: "green"
  }
];

const Speakers: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-center text-brand-dark mb-12">
          Conheça seus mentores
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl transform transition hover:-translate-y-1 ${speaker.colorTheme === 'red' ? 'bg-brand-red' : 'bg-brand-green'
                }`}
            >
              {/* Decorative Ribbon/Shape */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

              <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 md:w-40 md:h-40 aspect-square rounded-full object-cover border-4 border-white/30 shadow-md bg-gray-200"
                  onError={(e) => {
                    // Fallback visual caso a imagem não seja encontrada na pasta public
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=random&size=400`;
                  }}
                />

                <div className="text-center md:text-left text-white">
                  <h3 className="text-2xl font-bold font-display mb-2">{speaker.name}</h3>
                  <p className="text-white/90 font-medium leading-relaxed">
                    {speaker.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-2 w-full bg-black/10 absolute bottom-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;