import React from "react";
import { Twitter, Facebook, Instagram ,Sigma} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Sol Sütun: Brend və Təsvir */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold lowercase tracking-tighter">cyber</h2>
          <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
            We are a residential interior design firm located in Portland. 
            Our boutique-studio offers more than
          </p>
        </div>

        {/* Orta Sütun: Services */}
        <div>
          <h3 className="font-bold mb-6 text-lg">Services</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Bonus program</li>
            <li className="hover:text-white cursor-pointer transition">Gift cards</li>
            <li className="hover:text-white cursor-pointer transition">Credit and payment</li>
            <li className="hover:text-white cursor-pointer transition">Service contracts</li>
            <li className="hover:text-white cursor-pointer transition">Non-cash account</li>
            <li className="hover:text-white cursor-pointer transition">Payment</li>
          </ul>
        </div>

        {/* Sağ Sütun: Assistance to the buyer */}
        <div>
          <h3 className="font-bold mb-6 text-lg">Assistance to the buyer</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Find an order</li>
            <li className="hover:text-white cursor-pointer transition">Terms of delivery</li>
            <li className="hover:text-white cursor-pointer transition">Exchange and return of goods</li>
            <li className="hover:text-white cursor-pointer transition">Guarantee</li>
            <li className="hover:text-white cursor-pointer transition">Frequently asked questions</li>
            <li className="hover:text-white cursor-pointer transition">Terms of use of the site</li>
          </ul>
        </div>
      </div>

      {/* Sosial Media İkonları */}
      <div className="max-w-7xl mx-auto mt-16 flex gap-8 border-t border-gray-800 pt-8">
        <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400 transition" />
        <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600 transition" />
        <Sigma  className="font-bold cursor-pointer hover:text-gray-400 transition"/>
        <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" />
      </div>
    </footer>
  );
};

export default Footer;