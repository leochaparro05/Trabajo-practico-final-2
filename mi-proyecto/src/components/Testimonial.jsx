import React, { useState } from 'react';

const Testimonial = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [

    {
      id: 1,
      name: "Mustafa Kamal",
      role: "Ceo, Toogle",
      quote: "We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters.",
      image: "/imagen10.png",
      rating: 5
    }
]
  

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-10 bg-brand-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Review Card */}
        <div className="bg-white rounded overflow-visible relative">
          {/* Rating overlay en la esquina superior izquierda */}
          <div className="absolute top-0 left-0 w-16 h-16 z-20">
            <div className="w-full h-full bg-emerald-800 rounded-b-full flex items-center justify-center px-3">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-white ml-1">5.0</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row relative">
            {/* Imagen a la izquierda con forma semicircular (curva abajo) */}
            <div className="w-full lg:w-1/2 relative">
              {/* Forma semicircular con curva en la parte inferior */}
              <div 
                className="h-96 lg:h-[500px] flex items-center justify-center overflow-hidden relative"
                style={{
                  borderBottomLeftRadius: '50% 50%',
                  borderBottomRightRadius: '50% 50%',
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0'
                }}
              >
                {/* Fondo amarillo */}
                <div className="absolute inset-0 bg-yellow-400"></div>
                
                {/* Imagen que ocupa toda la zona */}
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center bottom',
                      transform: 'translateY(0)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Contenido de texto a la derecha */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              {/* Cita */}
              <blockquote className="text-gray-800 text-lg leading-relaxed mb-8">
                "{reviews[currentReview].quote}"
              </blockquote>
              
              {/* Información del cliente */}
              <div className="mb-8">
                <h4 className="font-bold font-serif text-gray-900 text-xl mb-1">{reviews[currentReview].name}</h4>
                <p className="text-gray-600 text-lg">{reviews[currentReview].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevReview}
            className="w-8 h-8 bg-transparent border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextReview}
            className="w-8 h-8 bg-yellow-100 border border-yellow-300 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;