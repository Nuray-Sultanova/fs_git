import React from 'react'
import Phone3D from '../Components/Phone3D' // Komponenti buradan çağırırıq
import { ArrowRight, Sparkles, Target, Users, ShieldCheck, Zap } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { label: "Founded", value: "2020" },
    { label: "Happy Clients", value: "50k+" },
    { label: "Global Stores", value: "12" },
    { label: "Products", value: "5000+" },
  ]

  const features = [
    {
      icon: <Target className="text-blue-500" />,
      title: "Our Mission",
      desc: "To bring the latest technology to everyone at the most competitive prices."
    },
    {
      icon: <Users className="text-purple-500" />,
      title: "Community",
      desc: "Building a bridge between tech enthusiasts and the world's leading brands."
    },
    {
      icon: <ShieldCheck className="text-green-500" />,
      title: "Security",
      desc: "Ensuring every transaction and data point is protected with industry standards."
    },
    {
      icon: <Zap className="text-orange-500" />,
      title: "Speed",
      desc: "Fast delivery and seamless shopping experience across all devices."
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold tracking-widest uppercase mb-6">
            <Sparkles size={12} className="text-yellow-500" /> Since 2020
          </div>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-8">
            WE ARE <span className="text-gray-300">CYBER.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-medium">
            Innovating the way you experience technology. Your global partner in high-end electronics.
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION (Qara zolaq) */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-5xl font-black italic tracking-tighter">{stat.value}</h2>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 3D INTERACTIVE SECTION (Əsas hissə buradır) */}
      <section className="py-24 px-6 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* 3D KONTEYNER - Phone3D komponenti burada işləyir */}
          <div className="flex-1 w-full bg-white rounded-[4rem] h-125 lg:h-162 shadow-2xl relative border border-gray-100 overflow-hidden">
             <Phone3D />
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h2 className="text-6xl font-black italic tracking-tighter leading-none">TRUE <br/> DIMENSION.</h2>
              <div className="w-20 h-2 bg-black rounded-full" />
            </div>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Bizim About səhifəmizdəki məhsullar sadə şəkil deyil. Onlar real həcmə malikdir. 
              Mouse ilə cihazı fırladaraq onun qalınlığını, metal teksturasını və 
              premium dizaynını hər tərəfdən kəşf edə bilərsiniz.
            </p>
            <button className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-xs uppercase group transition-all">
              Explore Catalog <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="group p-10 rounded-[3rem] bg-[#F9F9F9] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 italic tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default AboutPage