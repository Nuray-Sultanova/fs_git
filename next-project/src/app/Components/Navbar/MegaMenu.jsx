import React from 'react';
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'; // İkonlar üçün

const MegaMenu = () => {
  const menuItems = [
    { name: "Smartphones", icon: <Smartphone size={18} />, sub: ["iPhone", "Samsung", "Xiaomi", "Pixel"] },
    { name: "Computers", icon: <Monitor size={18} />, sub: ["Macbook", "Gaming Laptops", "PC Components"] },
    { name: "Smart Watches", icon: <Watch size={18} />, sub: ["Apple Watch", "Galaxy Watch", "Garmin"] },
    { name: "Cameras", icon: <Camera size={18} />, sub: ["Sony", "Canon", "Nikon", "Lenses"] },
    { name: "Audio", icon: <Headphones size={18} />, sub: ["AirPods", "Sony Headphones", "Speakers"] },
    { name: "Gaming", icon: <Gamepad size={18} />, sub: ["PS5", "Xbox", "Nintendo", "Accessories"] },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-8 grid grid-cols-6 gap-6 z-50 animate-in fade-in slide-in-from-top-2">
      {menuItems.map((item, idx) => (
        <div key={idx} className="flex flex-col space-y-4">
          <div className="flex items-center gap-2 font-bold text-black border-b pb-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
          <ul className="space-y-2">
            {item.sub.map((subItem, sIdx) => (
              <li key={sIdx} className="text-gray-500 hover:text-black cursor-pointer text-sm transition-colors">
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;