import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const products = [
    {
      name: "Google Pixel 7",
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8", 
      model: "Pixel 7",
      price: "$699",
    },
    {
      name: "OnePlus 10 Pro",
      category: "Smartphones",
      image: "data:image/webp;base64,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", 
      model: "OnePlus 10 Pro",
      price: "$899",
    },
    {
      name: "Microsoft Surface Laptop 5",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", 
      model: "Surface Laptop 5",
      price: "$1200",
    },
    {
      name: "HP Spectre x360",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc", 
      model: "Spectre x360",
      price: "$1400",
    },
    {
      name: "JBL Tune 750BTNC",
      category: "Headphones",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSMfkRbT2vyGOKE32spAfcxR9fW5JxXv_SFxdQKGYGUiVQstT6FITUuHtNUHcI93M3uuDQsLIN-VLasXChtn6iegWsiVwH6Flho3XQ6HX5wKnKKbTgvYwSfpSoEUyqP23YkhxbabeAbaA&usqp=CAc", 
      model: "Tune 750BTNC",
      price: "$129",
    },
    {
      name: "Sennheiser HD 450BT",
      category: "Headphones",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBDleB9XA89vICKbprRKRI8WC6cjBfcKDMicRiizywBrPdHXCF5m8tiOZTzNeZ6jjfTuoaM3doT99B7T8Lhze72zBMi8DxiT3HLD_JHSvw778DABB9qTtzPmUBGfxKEkeAAwtGig&usqp=CAc", 
      model: "HD 450BT",
      price: "$149",
    },
  ];

  const filteredProducts = products.filter(
    (item) =>
      (category ? item.category === category : true) &&
      (name ? item.name.toLowerCase().includes(name.toLowerCase()) : true)
  );

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
        Product Filter
      </h1>

      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          placeholder="Search by product name"
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-3 w-80 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 p-3 w-80 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptops">Laptops</option>
          <option value="Headphones">Headphones</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.model}
                  className="w-48 h-48 object-cover mx-auto rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold text-gray-700">{product.model}</h3>
              <p className="text-gray-500 mt-2">{product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
