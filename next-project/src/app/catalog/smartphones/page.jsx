"use client";
import React, { useState, useMemo } from "react";
import {
  ChevronRight,
  Heart,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Search,
  X,
} from "lucide-react";

const SmartphonesPage = () => {
  // 1. DATA (image_2.png-dəki real şəkil adları ilə)
  const allProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro 512GB Gold",
      price: 1437,
      brand: "Apple",
      img: "/iphone.png",
      tag: "New",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 1100,
      brand: "Samsung",
      img: "/samsung.png",
      tag: "Sale",
    }, // image_2.png-dən
    {
      id: 3,
      name: "Xiaomi 13 Ultra 256GB",
      price: 850,
      brand: "Xiaomi",
      img: "/zfold.png",
    }, // image_2.png-dən
    {
      id: 4,
      name: "Apple iPhone 15 Pro Max",
      price: 1599,
      brand: "Apple",
      img: "/iphone-1tb.png",
    }, // image_2.png-dən
    {
      id: 5,
      name: "Poco F5 Pro 5G",
      price: 499,
      brand: "Poco",
      img: "/zfold.png",
    },
    {
      id: 6,
      name: "Samsung Galaxy Z Fold 5",
      price: 1799,
      brand: "Samsung",
      img: "/zfold.png",
    }, // image_2.png-dən
  ];

  // 2. STATE
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewType, setViewType] = useState("grid");

  // 3. FİLTRASİYA MƏNTİQİ
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(
      (p) =>
        (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (sortBy === "low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [selectedBrands, searchQuery, sortBy]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  return (
    <div className="bg-[#FCFCFC] min-h-screen pb-20 font-sans text-black">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* ÜST HİSSƏ: Axtarış və Breadcrumbs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
            <span>Home</span> <ChevronRight size={10} />
            <span className="text-black font-bold">Smartphones</span>
          </nav>

          <div className="relative w-full md:w-72 group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search in catalog..."
              className="w-full bg-white border border-gray-100 rounded-full py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 ring-black/5"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* SOL PANEL: Filtrlər */}
          <aside className="w-64 hidden lg:block sticky top-24 h-fit">
            <div className="flex items-center justify-between mb-8 border-b pb-4">
              <h2 className="font-bold text-lg tracking-tight">Filters</h2>
              {selectedBrands.length > 0 && (
                <button
                  onClick={() => setSelectedBrands([])}
                  className="text-xs font-medium text-gray-400 hover:text-red-500"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3">Brand</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {["Apple", "Samsung", "Xiaomi", "Poco", "OPPO", "Honor"].map(
                    (brand) => (
                      <label
                        key={brand}
                        className="flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="w-4 h-4 rounded border-gray-300 accent-black cursor-pointer"
                          />
                          <span
                            className={`text-sm ${selectedBrands.includes(brand) ? "font-medium text-black" : "text-gray-600"}`}
                          >
                            {brand}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-black">
                          120
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* SAĞ PANEL: Məhsullar */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-2xl border border-gray-50 shadow-sm">
              <p className="text-sm text-gray-500 font-medium">
                Selected Products:{" "}
                <span className="text-black font-bold">
                  {filteredProducts.length}
                </span>
              </p>

              <div className="flex items-center gap-4">
                <select
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-medium bg-transparent outline-none cursor-pointer border rounded-lg px-3 py-1.5"
                >
                  <option value="default">By rating</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>

                <div className="flex gap-1 border rounded-lg p-1 bg-gray-50">
                  <button
                    onClick={() => setViewType("grid")}
                    className={`p-1.5 rounded ${viewType === "grid" ? "bg-white shadow text-black" : "text-gray-400 hover:text-black"}`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewType("list")}
                    className={`p-1.5 rounded ${viewType === "list" ? "bg-white shadow text-black" : "text-gray-400 hover:text-black"}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCT GRID / LIST */}
            <div
              className={
                viewType === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                  : "flex flex-col gap-4"
              }
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group relative bg-[#F6F6F6] rounded-xl p-6 transition-all hover:shadow-md ${viewType === "list" ? "flex items-center gap-8" : ""}`}
                >
                  {/* Tag & Wishlist */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-black text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase">
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Heart
                      size={16}
                      className="text-gray-300 hover:fill-red-500 hover:text-red-500 transition-colors"
                    />
                  </button>

                  {/* Image Container */}
                  <div
                    className={`relative flex items-center justify-center overflow-hidden ${viewType === "list" ? "w-40 h-40 shrink-0" : "h-48 mb-6"}`}
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Container (Düymə yerini düzəltmək üçün struktur yeniləndi) */}
                  <div
                    className={`flex flex-col ${viewType === "list" ? "flex-1" : "text-center h-35"}`}
                  >
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-10 px-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-black mb-auto">
                      ${product.price}
                    </p>

                    {/* Düymə artıq mətnlərin altında sabit dayanıb */}
                    <button className="w-full bg-black text-white py-3 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors mt-4">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Boş Nəticə */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <Search size={40} className="mx-auto text-gray-300 mb-6" />
                <h3 className="text-lg font-semibold mb-1">
                  No products found
                </h3>
                <p className="text-sm text-gray-400">
                  Try adjusting your filters.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, "...", 12].map((num, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-lg text-xs font-medium ${num === 1 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {num}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SmartphonesPage;
