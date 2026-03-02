import React from "react";
import Shop from "./Components/Buttons";
import BrowseCategory from "./Components/Browse-category";
import NewArrival from "./Components/NewArrival";
import HeroCategories from "./Components/HeroCategories";
import ProductGrid from "./Components/ProductGrid";
const Home = () => {
  return (
    <div>
      <div className="bg-[#211C24]   text-gray-300 ">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-40 ">
          <div>
            <div>
              <p>Pro.Beyond.</p>
              <h1 className="my-2 text-5xl">
                IPhone 14 <span className="font-bold">PRO</span>
              </h1>
              <p className="my-2">
                Created to change everything for the better. For everyone
              </p>
              <Shop />
            </div>
          </div>

          <div className="w-xs h-xs">
            <img src="/homeIphone.png" alt="telphone_img" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-150 w-full">
        {/* SOL TƏRƏF (Playstation ) */}
        <div className="grid grid-rows-2">
          {/* Playstation 5 - Üst hissə */}
          <div className=" border-black m-1 flex items-center justify-center overflow-hidden relative">
            <img
              className="object-contain h-full absolute left-0"
              src="/PlayStation.png"
              alt="PS5"
            />
            <div className="absolute right-40 top-20   ">
              <p className="text-3xl">Playstation 5</p>
              <p className="max-w-xs text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* AirPods & Vision Pro - Alt hissə */}
          <div className="grid grid-cols-2">
            <div className=" border-black m-1 flex items-center justify-center overflow-hidden relative">
              <img
                className="object-contain h-full absolute left-0"
                src="/headphone1.png"
                alt="AirPods"
              />
              <div className="absolute left-40 top-20   ">
                <p className="text-3xl">
                  Apple AirPods <span className="font-medium">Max</span>
                </p>
                <p className="max-w-xs text-[#909090]">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className=" border-black m-1 flex items-center justify-center overflow-hidden bg-[#353535] relative">
              <img
                className="object-contain h-full absolute left-0"
                src="/headphone.png"
                alt="Vision Pro"
              />
              <div className="absolute left-54 top-20   ">
                <p className="text-3xl text-white max-w-1.5">
                  Apple Vision <span className="font-medium">Pro</span>
                </p>
                <p className="max-w-xl text-[#909090]">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-black m-1 flex items-center justify-center overflow-hidden bg-[#ededed] relative">
          <img
            className="object-contain absolute right-0"
            src="/macbook.png"
            alt="Macbook"
          />
          <div className="absolute left-20 top-20   ">
            <p className="text-5xl text-black max-w-1.5">
              <span className="font-light">Macbook </span>
              <span className="font-bold">Air</span>
            </p>
            <p className="max-w-95 text-[#909090] my-4">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Shop />
          </div>
        </div>
      </div>
      <BrowseCategory />
      <NewArrival />
      <HeroCategories />
      <ProductGrid />
     
    </div>
  );
};

export default Home;
