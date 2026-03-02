"use client";
import React from 'react';

const Phone3D = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-2000">
      {/* Telefonun Konteyneri */}
      <div className="relative w-75 h-150 transition-all duration-500 ease-out hover:scale-105 preserve-3d group">
        
        {/* Telefonun Qalınlığı (Həcm verən kölgə) */}
        <div className="absolute inset-0 bg-black rounded-[3.5rem] shadow-[20px_20px_50px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.05)]" />

        {/* Əsas Telefon Şəkli (Ekran) */}
        <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden border-8px border-[#1a1a1a] bg-[#0a0a0a] z-10 transition-transform duration-500 group-hover:-rotate-y-12 group-hover:-rotate-x-6 group-hover:translate-x-4">
          
          {/* Real Telefon Şəkli (Burada sənə uyğun bir mockup istifadə edirik) */}
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop" 
            alt="iPhone Mockup"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ekran Üzərində Parıltı Efekti */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
          
          {/* Dinamik Yazı */}
          <div className="absolute inset-x-0 bottom-12 text-center text-white z-20">
            <h3 className="text-2xl font-black tracking-tighter italic uppercase">Cyber Series</h3>
            <p className="text-[10px] text-gray-400 font-bold tracking-[0.3em] mt-2">NEXT GENERATION</p>
          </div>
        </div>

        {/* Dekorativ Hissə (Arxa plan parıltısı) */}
        <div className="absolute -inset-4 bg-linear-to-r from-purple-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <style jsx>{`
        
        
        
       
      `}</style>
    </div>
  );
};

export default Phone3D;