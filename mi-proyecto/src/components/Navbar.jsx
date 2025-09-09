import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-24 flex">
      {/* Izquierda: Logo sobre fondo crema */}
      <div className="flex items-center justify-start pl-24 px-12 w-1/2 bg-brand-cream">
        <span className="font-display text-2xl font-bold text-brand-dark tracking-tight">Ta</span>
        <span className="ml-1 w-2 h-2 rounded-full bg-brand-green inline-block"></span>
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



