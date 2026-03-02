import { Heart } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro 512GB Gold",
      price: "$1437",
      img: "/iphone.png",
    },
    {
      id: 2,
      name: "AirPods Max Silver Starlight Aluminium",
      price: "$549",
      img: "/airpods.png",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm",
      price: "$399",
      img: "/watch.png",
    },
    {
      id: 4,
      name: "Apple iPhone 14 Pro 1TB Gold",
      price: "$1499",
      img: "/iphone-1tb.png",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-lg font-medium mb-10 text-gray-800">
        Discounts up to -50%
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#F6F6F6] rounded-2xl p-6 flex flex-col items-center group transition-all hover:shadow-lg"
          >
            <div className="w-full flex justify-end">
              <Heart
                className="text-gray-300 cursor-pointer hover:text-red-500 transition-colors"
                size={24}
              />
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="h-40 w-40 object-contain my-6 group-hover:scale-110 transition-transform duration-300"
            />
            <h4 className="text-sm font-medium text-center text-gray-800 mb-2 h-10 line-clamp-2 px-2">
              {product.name}
            </h4>
            <span className="text-2xl font-bold text-black mb-6">
              {product.price}
            </span>
            <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;
