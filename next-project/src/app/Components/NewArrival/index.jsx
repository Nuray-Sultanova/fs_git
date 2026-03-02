"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 900,
    img: "/iphone.png",
    isFavorite: false,
    category: "New Arrival",
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    img: "/camera.png",
    isFavorite: false,
    category: "Bestseller",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 399,
    img: "/watch.png",
    isFavorite: false,
    category: "New Arrival",
  },
  {
    id: 4,
    name: "AirPods Max Silver Starlight Aluminium",
    price: 549,
    img: "/airpods-max.png",
    isFavorite: false,
    category: "Featured Products",
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    img: "/samsung-watch.png",
    isFavorite: false,
    category: "Bestseller",
  },
  {
    id: 6,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
    img: "/zfold.png",
    isFavorite: true,
    category: "New Arrival",
  },
  {
    id: 7,
    name: "Galaxy Buds FE Graphite",
    price: 99.99,
    img: "/buds.png",
    isFavorite: false,
    category: "Featured Products",
  },
  {
    id: 8,
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
    img: "/zfold.png",
    isFavorite: false,
    category: "Bestseller",
  },
];

const NewArrival = () => {
  // Hansı tabın seçildiyini saxlamaq üçün state
  const [activeTab, setActiveTab] = useState("New Arrival");

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 font-sans">
      {/* Tab menyusu - Dinamik rənglərlə */}
      <div className="flex gap-8 mb-10 text-gray-400 font-medium border-b border-gray-100 pb-2 text-sm">
        {["New Arrival", "Bestseller", "Featured Products"].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer pb-2 transition-all ${
              activeTab === tab
                ? "text-black border-b-2 border-black" // Seçilən tab qara və altı xətli
                : "hover:text-black"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Məhsul qridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#F5F5F5] p-6 rounded-xl flex flex-col items-center relative transition-shadow hover:shadow-md"
          >
            <Heart
              className={`absolute right-4 top-4 cursor-pointer transition ${
                product.isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-300 hover:text-red-400"
              }`}
              size={24}
            />
            <img
              src={product.img}
              alt={product.name}
              className="h-40 object-contain mb-6 mix-blend-multiply"
            />
            <h3 className="text-center font-semibold text-[14px] leading-tight h-10 mb-4 text-black">
              {product.name}
            </h3>
            <p className="text-2xl font-bold mb-4 tracking-tight text-black">
              ${product.price}
            </p>
            <button className="bg-black text-white w-full py-3 px-8 rounded-lg font-medium text-sm active:scale-95 transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
