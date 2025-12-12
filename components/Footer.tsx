import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 font-medium">© {new Date().getFullYear()} Palestra Faturando Alto no Natal.</p>
        <p className="text-sm text-gray-400 mt-2">Um evento realizado com apoio da CDL Montes Claros.</p>
      </div>
    </footer>
  );
};

export default Footer;