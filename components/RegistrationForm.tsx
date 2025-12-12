import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Pequeno delay para feedback visual antes de redirecionar
    setTimeout(() => {
      window.location.href = 'https://www.asaas.com/c/7f2mxmin8jx56hk7';
    }, 800);
  };

  return (
    <section id="register" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-8 border-brand-red relative">

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Garanta sua Vaga</h2>
            <p className="text-gray-500 mb-6">Clique no botão abaixo para prosseguir com sua inscrição segura.</p>

            <div className="bg-red-50 p-6 rounded-xl border border-red-100 transform hover:scale-105 transition-transform duration-300">
              <p className="text-brand-dark font-bold text-sm uppercase tracking-widest mb-1">Investimento Único</p>
              <div className="text-4xl md:text-5xl font-extrabold text-brand-red my-2 font-display">
                R$ 99,90
              </div>
              <p className="text-brand-green font-bold text-lg">
                em até 3x Sem Juros!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-brand-green hover:bg-emerald-600 text-white font-bold py-4 rounded-lg shadow-lg transition duration-200 mt-4 text-lg flex justify-center items-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Redirecionando...
                </>
              ) : 'Ir para Pagamento Seguro'}
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-4">
            Ambiente 100% seguro. Você será redirecionado para o checkout oficial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;