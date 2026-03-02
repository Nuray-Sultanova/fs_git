import React from "react";
import Link from "next/link"; 
import { ArrowLeft, ArrowRight } from "lucide-react";

const BrowseCategory = () => {
 
  const categories = [
    { id: 1, img: "/CategoryCard1.png", slug: "phones" },
    { id: 2, img: "/CategoryCard2.png", slug: "watches" },
    { id: 3, img: "/CategoryCard3.png", slug: "cameras" },
    { id: 4, img: "/CategoryCard4.png", slug: "headphones" },
    { id: 5, img: "/CategoryCard5.png", slug: "computers" },
    { id: 6, img: "/CategoryCard6.png", slug: "gaming" },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto py-20">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-medium">Browse By Category</p>
          </div>
          <div className="flex gap-5">
           
            <ArrowLeft size={30} className="cursor-pointer hover:text-gray-600 transition" />
            <ArrowRight size={30} className="cursor-pointer hover:text-gray-600 transition" />
          </div>
        </div>

        <div className="flex my-10 gap-4 justify-between">
          {categories.map((item) => (
            <Link 
              key={item.id} 
              href={`/category/${item.slug}`} 
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <img 
                src={item.img} 
                className="w-30 h-30 object-contain" 
                alt={`Category ${item.slug}`} 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;