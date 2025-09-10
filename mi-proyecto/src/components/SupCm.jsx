import React from 'react';

const SupCm = () => {
  return (
    <section className="py-24 px-24 bg-brand-beige">
      {/* Container */}
      <div className="container-1100 mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Side: Title and Images */}
        <div className="flex flex-col space-y-6 w-full md:w-2/3">
          {/* Title */}
          <div className="text-left">
           <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif leading-tight">
  Support Your<br />
  Community
</h2>
            {/* Horizontal line */}
            <div className="w-16 h-0.5 bg-brand-dark mt-3"></div>
            {/* Subtitle */}
            <p className="text-sm text-brand-dark/70 max-w-lg mt-4">
              The legal definition of a charitable organization (and of charity) varies between countries and in charity law affects charitable organizations also vary.
            </p>
          </div>

          {/* Images Grid - Larger and closer together */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {/* Image 1: Covid-19 */}
            <div className="relative group overflow-hidden rounded-md">
              <img 
                src="/imagen2.jpg" 
                alt="Covid-19" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b-md">
                <span className="text-sm font-medium text-brand-dark">Covid - 19</span>
              </div>
            </div>

            {/* Image 2: Food Bank */}
            <div className="relative group overflow-hidden rounded-md">
              <img 
                src="/imagen3.jpg" 
                alt="Food Bank" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b-md">
                <span className="text-sm font-medium text-brand-dark">Food Bank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Safe Water */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3">
          <div className="relative group overflow-hidden rounded-md">
            <img 
              src="/imagen4.jpg" 
              alt="Safe Water" 
              className="w-full h-90 object-cover"
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b-md">
              <span className="text-sm font-medium text-brand-dark">Safe Water</span>
            </div>
          </div>

          {/* View All Campaign - Underlined */}
          <div className="mt-4 text-center">
            <a 
              href="#" 
              className="text-sm text-brand-dark hover:underline font-medium transition-colors"
            >
              View All Campaign
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal line at the end */}
      <div className="border-t border-brand-dark/20 mt-24 mb-12"></div>
    </section>
  );
};

export default SupCm;