import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="text-center z-10">
        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 opacity-20 select-none">
          404
        </h1>

        {/* Mesaj hissəsi */}
        <div className="-mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Səhifə tapılmadı
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Axtardığınız səhifə silinib, adı dəyişdirilib və ya müvəqqəti olaraq
            əlçatmazdır.
          </p>

          {/* Geri qayıt düyməsi */}
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 active:scale-95"
          >
            Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 text-gray-500 text-sm">
        Cyber © 2026
      </div>
    </div>
  );
};

export default NotFound;
