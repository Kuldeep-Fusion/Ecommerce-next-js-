"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";


export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      <h2 className="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
         
        ))}

      </div>

    </section>
  );
}