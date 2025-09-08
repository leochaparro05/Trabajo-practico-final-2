import React from 'react';

const Hero = () => {
  return (
    <section className="flex h-screen bg-gradient-to-r from-brand-cream to-brand-gold font-sans">
      {/* Left Side: Content */}
      <div className="w-1/2 p-8 flex flex-col justify-center space-y-6 text-left">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight font-display">
          Charity Is An<br />
          Act Of A Soft<br />
          Heart.
        </h1>

        {/* Subtitle */}
        <p className="text-brand-dark/70 text-sm md:text-base max-w-lg">
          We've spent the last 5 years helping over 25,0000 teams just like yourself create and sustain successful online support.
        </p>

        {/* Button + Video Circle */}
        <div className="flex items-center space-x-6 mt-6">
          {/* Donate Button */}
          <button className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-md font-sans">
            Donate Now
          </button>

          {/* Video Play Circle */}
          <div className="relative w-20 h-20 flex items-center justify-center cursor-pointer group">
            <div className="absolute inset-0 bg-brand-gold rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Circular Text (Simplified) */}
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-brand-dark/80 select-none">
              <span className="whitespace-nowrap">Learn about us through this video</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-8 mt-8 text-sm text-brand-dark font-sans">
          <a href="#" className="hover:text-brand-green transition-colors">Youtube</a>
          <span className="text-brand-dark/40">•</span>
          <a href="#" className="hover:text-brand-green transition-colors">Facebook</a>
          <span className="text-brand-dark/40">•</span>
          <a href="#" className="hover:text-brand-green transition-colors">Instagram</a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1559544350-fb2e204706f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Man with child and soccer ball"
          className="w-full h-full object-cover"
        />
        {/* Yellow border overlay on right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-brand-gold"></div>
      </div>
    </section>
  );
};

export default Hero;