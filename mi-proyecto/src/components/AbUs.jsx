import React from 'react';

const AbUs = () => {
  return (
    <section className="bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Imagen a la izquierda con forma semicircular */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
            
              <div 
                className="h-80 lg:h-[500px] flex items-center justify-center overflow-hidden"
                style={{
                  borderTopLeftRadius: '50% 50%',
                  borderTopRightRadius: '50% 50%',
                  borderBottomLeftRadius: '0',
                  borderBottomRightRadius: '0'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="imagen5.jpg" 
                    alt="hermanos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              About Us
            </h2>
            
            <div className="w-16 h-1 bg-gray-800 mb-6"></div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way in which charity law affects charitable organizations also vary.
            </p>

            <a 
              href="#" 
              className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Línea divisoria al final, dentro del contenedor */}
        <div className="border-t border-gray-300 mt-24 mb-8"></div>
      </div>
    </section>
  );
};

export default AbUs;