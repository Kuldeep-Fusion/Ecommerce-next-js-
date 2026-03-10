"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {

  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  if (products.length === 0) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const product = products[index];

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}

        <div>

          <p className="text-red-500 font-semibold mb-2">
            ${product.price}
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-4">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-6">
            Category: <span className="font-semibold">{product.category}</span>
          </p>

          <div className="flex items-center gap-6">

            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
              Add to cart
            </button>

            <button className="text-gray-700 font-medium hover:underline">
              More info
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative flex justify-center">

          <img
            src={product.image}
            alt={product.title}
            className="w-[320px] object-contain"
          />

          <span className="absolute text-[200px] font-bold text-gray-200 right-0 top-0 -z-10">
            0{index + 1}
          </span>

        </div>

      </div>

      {/* SLIDER BUTTONS */}

      <div className="flex justify-end max-w-7xl mx-auto px-6 mt-8 gap-4">

        <button
          onClick={prev}
          className="border rounded-full p-3 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="border rounded-full p-3 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>

      </div>

    </section>
  );
}