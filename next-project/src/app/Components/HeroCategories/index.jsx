import React from "react";

const HeroCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full h-auto md:h-150">
      {/* Popular Products */}
      <div className="bg-white flex flex-col items-center justify-center p-10 text-center border-r border-gray-100">
        <img
          src="/earbuds.png"
          alt="Popular Products"
          className="h-48 object-contain mb-8 hover:scale-105 transition-transform"
        />
        <h2 className="text-3xl font-light text-black mb-3">
          Popular Products
        </h2>
        <p className="text-gray-500 text-sm mb-6 max-w-55">
          iPad combines a magnificent 10.2-inch Retina display and incredible
          performance.
        </p>
        <button className="border border-black px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
          Shop Now
        </button>
      </div>

      {/* Ipad Pro */}
      <div className="bg-[#F9F9F9] flex flex-col items-center justify-center p-10 text-center border-r border-gray-100">
        <img
          src="/ipad.png"
          alt="Ipad Pro"
          className="h-48 object-contain mb-8 hover:scale-105 transition-transform"
        />
        <h2 className="text-3xl font-light text-black mb-3">Ipad Pro</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-55">
          iPad combines a magnificent 10.2-inch Retina display and incredible
          performance.
        </p>
        <button className="border border-black px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
          Shop Now
        </button>
      </div>

      {/* Samsung Galaxy */}
      <div className="bg-[#EAEAEA] flex flex-col items-center justify-center p-10 text-center border-r border-gray-100">
        <img
          src="/samsung.png"
          alt="Samsung Galaxy"
          className="h-48 object-contain mb-8 hover:scale-105 transition-transform"
        />
        <h2 className="text-3xl font-light text-black mb-3">Samsung Galaxy</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-55">
          iPad combines a magnificent 10.2-inch Retina display and incredible
          performance.
        </p>
        <button className="border border-black px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
          Shop Now
        </button>
      </div>

      {/* Macbook Pro */}
      <div className="bg-[#2C2C2C] flex flex-col items-center justify-center p-10 text-center text-white">
        <img
          src="/macbook2.png"
          alt="Macbook Pro"
          className="h-48 object-contain mb-8 hover:scale-105 transition-transform"
        />
        <h2 className="text-3xl font-light mb-3">Macbook Pro</h2>
        <p className="text-gray-400 text-sm mb-6 max-w-55">
          iPad combines a magnificent 10.2-inch Retina display and incredible
          performance.
        </p>
        <button className="border border-white px-10 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroCategories;
