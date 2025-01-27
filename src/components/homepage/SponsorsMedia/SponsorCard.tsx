import React from 'react';

interface SponsorCardProps {
  name: string;
  logo: string;
}

export function SponsorCard({ name, logo }: SponsorCardProps) {
    return (
      <div className="relative w-[200px] h-[280px] rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Waves */}
        <div className="absolute w-[500px] h-[700px] opacity-40 -left-1/2 top-[35px] bg-orange-400 rounded-[40%] animate-wave" />
        <div className="absolute w-[500px] h-[700px] opacity-30 -left-1/2 top-[40px] bg-orange-300 rounded-[40%] animate-wave-slow" />
        <div className="absolute w-[500px] h-[700px] opacity-20 -left-1/2 top-[45px] bg-orange-200 rounded-[40%] animate-wave-slower" />
        
        {/* Content */}
        <div className="relative h-full w-full flex flex-col justify-end items-center gap-3 p-4 text-white z-10 rounded-xl backdrop-blur-sm">
          <div className="bg-white/90 p-4 rounded-full">
            <img 
              src={logo} 
              alt={name}
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="font-montserrat font-semibold text-lg text-center">{name}</h3>
        </div>
      </div>
    );
  }