import React from 'react';

const Hero = () => {
  return (
    <section className="flex h-screen bg-brand-cream from-brand-cream to-brand-gold font-sans">
      {/* contenido lado izquierdo */}
      <div className="w-1/2 pl-32 pr-8 pt-12 pb-8 flex flex-col justify-start space-y-6 text-left">
        {/* Titulo */}
        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight font-display">
          Charity Is An<br />
          Act Of A Soft<br />
          Heart.
        </h1>


        <p className="text-brand-dark/70 text-sm md:text-base max-w-sm leading-relaxed">
  We've spent the last 5 years helping over 25,0000 teams just like yourself create and sustain successful online support.
</p>

        {/*boton y video circular */}
      <div className="flex items-center space-x-6 mt-6">
  {/* boton de donacion */}
  <button className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-md font-sans">
    Donate Now
  </button>

 
   <svg className="w-16 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 64 32" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16 Q12 8, 20 16 T36 16 Q44 8, 52 16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M56 12 L60 16 L56 20" />
            </svg>

  
<div className="relative">
  <div className="w-36 h-36 rounded-full relative flex items-center justify-center cursor-pointer hover:border-slate-400 transition-colors bg-brand-beige">
    
    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center relative z-10">
      <svg className="w-6 h-6 text-brand-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>

   
    <svg className="w-36 h-36 absolute inset-0" viewBox="0 0 144 144">
      <defs>
        <path 
          id="textcircle" 
          d="M 72 20 A 52 52 0 1 1 72 124 A 52 52 0 1 1 72 20"
          fill="none"
        />
      </defs>
      <text 
        className="text-xs font-medium" 
        fill="#0B6B53" 
        letterSpacing="1"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <textPath 
          href="#textcircle" 
          startOffset="50%" 
          textLength="290" 
          lengthAdjust="spacingAndGlyphs"
        >
          Learn about us through this video
        </textPath>
      </text>
    </svg>
  </div>
</div>
</div>
        {/* links redes sociales */}
        <div className="flex space-x-8 mt-8 text-sm text-brand-dark font-sans">
          <a href="#" className="hover:text-brand-green transition-colors">Youtube</a>
          <span className="text-brand-dark/40">•</span>
          <a href="#" className="hover:text-brand-green transition-colors">Facebook</a>
          <span className="text-brand-dark/40">•</span>
          <a href="#" className="hover:text-brand-green transition-colors">Instagram</a>
        </div>
      </div>

      
      <div className="w-1/2 relative">
        <img 
          src = "imagen1.jpg"
          alt="Man with child and soccer ball"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute right-0 top-0 bottom-0 w-30 bg-brand-gold"></div>
      </div>
    </section>
  );
};

export default Hero;