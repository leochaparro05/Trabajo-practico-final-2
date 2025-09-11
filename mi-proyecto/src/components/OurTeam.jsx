import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Lily Gomez",
      position: "Founder",
      image: "/imagen6.2.jpg",
      ringColor: "bg-yellow-300", // Amarillo dorado
    },
    {
      id: 2,
      name: "Dm Lincoln",
      position: "Co-Founder",
      image: "/imagen7.2.png",
      ringColor: "bg-emerald-800", // Verde oscuro
    },
    {
      id: 3,
      name: "Serena Mei",
      position: "Manager",
      image: "/imagen8.2.png",
      ringColor: "bg-yellow-300", // Amarillo dorado
    },
    {
      id: 4,
      name: "Abdel Latif",
      position: "Supervisor",
      image: "/imagen9.2.png",
      ringColor: "bg-emerald-800", // Verde oscuro
    }
  ];

  return (
    <section className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display leading-tight">
            Our Team
          </h2>
          <div className="w-16 h-0.5 bg-brand-green mx-auto mt-4"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              {/* Team Member Photo with Ring */}
              <div className="relative mb-6">
                {/* Fondo del círculo - Centrado perfectamente */}
                <div 
                  className={`absolute inset-0 rounded-full ${member.ringColor} opacity-80`}
                  style={{
                    width: '160px',
                    height: '160px',
                    transform: 'scale(1.2)',
                    zIndex: 0,
                    left: '22%',
                    top: '27%',
                    transformOrigin: 'center center',
                  }}
                ></div>
                
                {/* Imagen del miembro */}
                <div className="w-50 h-60 mx-auto rounded-full overflow-hidden relative z-10 ">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Team Member Info */}
              <h3 className="text-xl font-semibold text-brand-dark mb-1 font-serif">
                {member.name}
              </h3>
              <p className="text-sm text-brand-dark/70 font-sans">
                {member.position}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom Border Line */}
        <div className="mt-24 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default OurTeam;
