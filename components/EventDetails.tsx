import React from 'react';
import { CalendarIcon, MapPinIcon } from './Icons';

const EventDetails: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-8 rounded-xl shadow-sm">
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-green/10 rounded-lg text-brand-green">
              <CalendarIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Data e Hora</p>
              <h3 className="text-2xl font-bold text-brand-dark">16/12 <span className="text-lg font-normal text-gray-600">Terça-feira</span></h3>
              <p className="text-brand-red font-semibold">às 19h</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-200"></div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-green/10 rounded-lg text-brand-green">
              <MapPinIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Local</p>
              <h3 className="text-2xl font-bold text-brand-dark">Auditório CDL</h3>
              <p className="text-gray-600">Montes Claros</p>
            </div>
          </div>

        </div>
        
        <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-dark px-4 py-2 rounded-lg border border-blue-100">
                <span className="font-bold">Apoio:</span>
                {/* Simulated Logo CDL */}
                <div className="flex items-center gap-1">
                    <div className="w-8 h-6 bg-blue-900 rounded-tl-lg rounded-br-lg"></div>
                    <span className="font-black text-xl italic text-blue-900">CDL</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;