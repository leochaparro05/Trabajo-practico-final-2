import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-24 flex">
      {/* Izquierda: Logo sobre fondo crema */}
      <div className="flex items-center justify-start pl- px-12 w-1/2 bg-brand-cream">
        <div className="flex items-center">
          <div className="pl-20 font-serif text-3xl font-light italic tracking-wide text-brand-dark" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Ta
          </div>
          <div className="ml-1 flex items-center gap-0.5">
            <div className="flex flex-col items-center justify-center relative h-8">
              <div className="w-3 h-0.5 bg-brand-green transform rotate-12 rounded-full -mt-1.5"></div>
              <div className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2.5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Derecha: Links sobre fondo dorado */}
      <div className="flex items-center pl-12 justify-center w-1/2 bg-brand-gold">
        <a href="#" className="text-brand-dark font-medium text-base mx-6 hover:text-brand-green transition-colors">About Us</a>
        <span className="text-brand-dark mx-2 text-xl">·</span>
        <a href="#" className="text-brand-dark font-medium text-base mx-6 hover:text-brand-green transition-colors">Campaign</a>
        <span className="text-brand-dark mx-2 text-xl">·</span>
        <a href="#" className="text-brand-dark font-medium text-base mx-6 hover:text-brand-green transition-colors">Contact Us</a>
      </div>
    </nav>
  );
}



