"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ChevronRight, Sparkles, Terminal } from 'lucide-react';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ["All", "Tech", "Future", "Lifestyle"];

  const posts = [
    {
      id: 1,
      title: "The Evolution of 3D Web Interfaces",
      excerpt: "Niyə müasir veb dizayn artıq 2D şəkillərlə kifayətlənmir? Həcmli interfeyslərin gələcəyi.",
      date: "Oct 24, 2025",
      author: "Admin",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Cyber Security in 2026",
      excerpt: "SOC əməliyyatları və müasir təhlükəsizlik standartları haqqında bilməli olduğunuz hər şey.",
      date: "Nov 02, 2025",
      author: "Security Team",
      category: "Future",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Minimalist Coding Setup",
      excerpt: "Next.js və Tailwind CSS ilə təmiz kod yazmağın yolları və estetik iş mühiti.",
      date: "Dec 15, 2025",
      author: "Dev",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  // Axtarış və Kateqoriya Filtri (Logic)
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      
      {/* 1. BLOG HERO */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-[10px] font-black tracking-widest uppercase border border-gray-100">
              <Terminal size={12} className="text-blue-600" /> Dev & Security Blog
            </div>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
              INSIGHTS<span className="text-gray-200">.</span>
            </h1>
          </div>
          
          {/* SEARCH (Funksional) */}
          <div className="relative w-full md:w-80 group">
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F9F9F9] border border-gray-100 rounded-2xl py-4 px-12 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all font-medium placeholder:text-gray-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-black text-white shadow-xl shadow-black/20 scale-105" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. POSTS GRID */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode='wait'>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <motion.article 
                  key={post.id}
                  layout // Kartların yerini dəyişərkən yumşaq keçid
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 bg-gray-100 border border-gray-50">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User size={12}/> {post.author}</span>
                    </div>
                    <h3 className="text-3xl font-black italic tracking-tighter leading-tight group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Read Story <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-400 font-medium italic">
                No articles found matching your criteria...
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;