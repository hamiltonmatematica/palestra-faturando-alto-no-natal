import React from 'react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

interface Speaker {
  name: string;
  role: string;
  image: string;
  colorTheme: string;
  instagram: string;
}

const speakers: Speaker[] = [
  {
    name: "Diego Suzano",
    role: "Empresário, Palestrante, Mentor, CEO Holding Terranova",
    image: "/diego-suzano.png",
    colorTheme: "red",
    instagram: "https://www.instagram.com/diegosuzano/"
  },
  {
    name: "Marya Lopes",
    role: "Especialista em comunicação persuasiva, neurovendas, PNL e influência digital",
    image: "/marya-lopes.png",
    colorTheme: "green",
    instagram: "https://www.instagram.com/maryalopeso/"
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
                  className={`w-32 h-32 md:w-40 md:h-40 aspect-square rounded-full object-cover border-4 border-white/30 shadow-md bg-gray-200 ${speaker.name === 'Marya Lopes' ? 'object-top' : ''}`}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=random&size=400`;
                  }}
                />

                <div className="text-center md:text-left text-white">
                  <h3 className="text-2xl font-bold font-display mb-2">{speaker.name}</h3>
                  <p className="text-white/90 font-medium leading-relaxed mb-4">
                    {speaker.role}
                  </p>
                  <a
                    href={speaker.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors duration-200"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    <span className="text-sm font-semibold">@{speaker.instagram.split('/').filter(Boolean).pop()}</span>
                  </a>
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