"use client";
import React, { useState, useMemo } from "react";
import { ChevronRight, Heart, SlidersHorizontal, LayoutGrid, List, Search, laptop } from "lucide-react";

const LaptopsPage = () => {
  // 1. DATA (image_a3c6d0.png-dəki şəkillərə uyğun)
  const allLaptops = [
    { id: 1, name: "Apple MacBook Pro 14\" M3 Chip 512GB", price: 1999, brand: "Apple", img: "/macbook2.png", tag: "New" },
    { id: 2, name: "Apple MacBook Air 13\" M2 Chip 256GB", price: 999, brand: "Apple", img: "/macbook2.png" },
    { id: 3, name: "Asus ROG Zephyrus G14 Gaming", price: 1550, brand: "Asus", img: "/macbook2.png", tag: "Gaming" },
    { id: 4, name: "Apple MacBook Pro 16\" M3 Max 1TB", price: 3499, brand: "Apple", img: "/macbook2.png" },
    { id: 5, name: "HP Spectre x360 Convertible", price: 1250, brand: "HP", img: "/macbook2.png" },
    { id: 6, name: "Lenovo Legion 5 Pro Gaming", price: 1399, brand: "Lenovo", img: "/macbook2.png", tag: "Sale" },
  ];

  // 2. STATE
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewType, setViewType] = useState("grid");

  // 3. FİLTRASİYA MƏNTİQİ
  const filteredLaptops = useMemo(() => {
    let result = allLaptops.filter(p => 
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "high") result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [selectedBrands, searchQuery, sortBy]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-black">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        {/* ÜST HİSSƏ: Breadcrumbs & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
            <span>Home</span> <ChevronRight size={10} /> 
          
            <span className="text-black font-bold">Laptops</span>
          </nav>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
            <input 
              type="text" 
              placeholder="Search laptops..." 
              className="w-full bg-[#F5F5F5] rounded-full py-2.5 pl-12 pr-4 text-sm outline-none focus:bg-white focus:ring-1 ring-gray-200 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* SOL PANEL: Filtrlər */}
          <aside className="w-64 hidden lg:block sticky top-24 h-fit">
            <h2 className="font-bold text-xl mb-8 tracking-tighter">Laptops</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase mb-4 text-gray-400">Brand</h3>
                <div className="space-y-3">
                  {["Apple", "Asus", "HP", "Lenovo", "Dell"].map(brand => (
                    <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 rounded border-gray-300 accent-black cursor-pointer"
                      />
                      <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'text-black font-semibold' : 'text-gray-500 group-hover:text-black'}`}>
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase mb-4 text-gray-400">Processor</h3>
                <div className="space-y-3">
                  {["M3 Chip", "Intel Core i9", "Intel Core i7", "AMD Ryzen 9"].map(cpu => (
                    <label key={cpu} className="flex items-center gap-3 text-sm text-gray-500 hover:text-black cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-black" />
                      {cpu}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* SAĞ PANEL: Siyahı */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8 bg-[#FAFAFA] p-4 rounded-2xl border border-gray-100">
              <p className="text-sm font-medium">Results: <span className="font-bold">{filteredLaptops.length}</span></p>
              
              <div className="flex items-center gap-6">
                <select 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-semibold bg-transparent outline-none cursor-pointer"
                >
                  <option value="default">Sort by: Default</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
                
                <div className="flex gap-1">
                  <button onClick={() => setViewType("grid")} className={`p-2 rounded-lg ${viewType === 'grid' ? 'bg-black text-white' : 'text-gray-400'}`}><LayoutGrid size={18} /></button>
                  <button onClick={() => setViewType("list")} className={`p-2 rounded-lg ${viewType === 'list' ? 'bg-black text-white' : 'text-gray-400'}`}><List size={18} /></button>
                </div>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredLaptops.map((laptop) => (
                <div key={laptop.id} className={`group bg-[#F6F6F6] rounded-2xl p-6 relative transition-all hover:bg-[#F0F0F0] ${viewType === 'list' ? 'flex items-center gap-10' : ''}`}>
                  
                  {laptop.tag && <span className="absolute top-4 left-4 bg-black text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase">{laptop.tag}</span>}
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10">
                    <Heart size={16} className="text-gray-300 hover:fill-red-500 hover:text-red-500" />
                  </button>

                  <div className={`flex items-center justify-center ${viewType === 'list' ? 'w-56 h-40' : 'h-48 mb-6'}`}>
                    <img src={laptop.img} alt={laptop.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className={`flex flex-col ${viewType === 'list' ? 'flex-1' : 'text-center h-40'}`}>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 px-4">{laptop.name}</h3>
                    <p className="text-2xl font-black mt-auto">${laptop.price}</p>
                    <button className="w-full bg-black text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest mt-4 hover:bg-gray-800 active:scale-95 transition-all">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LaptopsPage;