"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+994 50 000 00 00",
      desc: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "support@cyber.com",
      desc: "Online support 24/7",
    },
    {
      icon: <MapPin size={20} />,
      label: "Office",
      value: "Baku, Azerbaijan",
      desc: "28 May Street, Cyber Tower",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-6 border-b border-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6"
          >
            GET IN <span className="text-gray-300">TOUCH.</span>
          </motion.h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Suallarınız var? Texniki dəstək lazımdır? Bizimlə əlaqə saxlayın,
            komandamız sizə kömək etməyə hazırdır.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* SOL TƏRƏF: ƏLAQƏ MƏLUMATLARI */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-black italic tracking-tighter">
                LET'S TALK.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Yeni layihələr, əməkdaşlıq və ya sadəcə salam vermək üçün bizə
                yaza bilərsiniz. Sizin rəyiniz bizim üçün çox önəmlidir.
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-32 bg-[#F9F9F9] border border-transparent hover:border-gray-200 transition-all"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-black">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                      {info.label}
                    </p>
                    <h4 className="font-bold text-lg">{info.value}</h4>
                    <p className="text-xs text-gray-400 font-medium">
                      {info.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sosyal Media və ya İş Saatları */}
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-400 italic">
                +500 people contacted us today
              </p>
            </div>
          </div>

          {/* SAĞ TƏRƏF: FORM */}
          <div className="bg-black rounded-[3.5rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-white/30 transition-all placeholder:text-gray-700"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@cyber.com"
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:border-white/30 transition-all placeholder:text-gray-700"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded- px-8 4xl py-5 focus:outline-none focus:border-white/30 transition-all placeholder:text-gray-700 resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-all flex items-center justify-center gap-3 group"
              >
                Send Message{" "}
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. MAP / LOCATION PLACEHOLDER */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-100 bg-[#F6F6F6] rounded-[4rem] relative overflow-hidden flex items-center justify-center border border-gray-100 group">
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Baku&zoom=13&size=1200x400&sensor=false')] opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="relative z-10 text-center space-y-4">
            <div className="w-16 h-16 bg-black text-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-bounce">
              <MapPin size={24} />
            </div>
            <p className="font-black italic tracking-tighter text-xl">
              VISIT OUR FLAGSHIP STORE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
