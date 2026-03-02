"use client";
import React from "react";
import Link from "next/link";
import { User, ShoppingCart, Heart, Search, ChevronDown } from "lucide-react"; // ChevronDown əlavə edildi
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Kateqoriyalar siyahısı
  const categories = [
    { name: "Smartphones", href: "/catalog/smartphones" },
    { name: "Laptops", href: "/catalog/laptops" },
    { name: "Watches", href: "/catalog/watches" },
    { name: "Accessories", href: "/catalog/accessories" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex max-w-6xl mx-auto justify-between py-5 items-center px-4">
        <div>
          <Link href={"/"} className="text-black font-bold text-2xl tracking-tighter">
            Cyber
          </Link>
        </div>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            className="w-80 rounded-lg bg-gray-100 outline-0 py-2 px-10 text-sm"
            type="search"
            placeholder="Search"
          />
        </div>

        <div className="flex gap-8 items-center">
          {/* HOME DROP-DOWN BURADADIR */}
          <div className="relative group py-2">
            <Link
              href={"/"}
              className={`flex items-center gap-1 transition-colors ${
                pathname === "/" ? "text-black font-bold" : "text-gray-400 hover:text-black"
              }`}
            >
              Home
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </Link>

            {/* Hover zamanı açılan menyu */}
            <div className="absolute left-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={"/about"}
            className={`transition-colors ${
              pathname === "/about" ? "text-black font-bold" : "text-gray-400 hover:text-black"
            }`}
          >
            About
          </Link>
          <Link
            href={"/contactus"}
            className={`transition-colors ${
              pathname === "/contactus" ? "text-black font-bold" : "text-gray-400 hover:text-black"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href={"/blog"}
            className={`transition-colors ${
              pathname === "/blog" ? "text-black font-bold" : "text-gray-400 hover:text-black"
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="flex gap-5 items-center">
          <Heart className="cursor-pointer hover:text-red-500 transition-colors" size={20} />
          <ShoppingCart className="cursor-pointer hover:text-black transition-colors" size={20} />
          <User className="cursor-pointer hover:text-black transition-colors" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;