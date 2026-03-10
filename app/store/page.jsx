import React from "react";
import { getAllProducts, } from "../library";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-8">Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProductList />
      </div>
    </div>
  );
};

export default Store;

/* ---------------- CATEGORY LIST ---------------- */


  

/* ---------------- PRODUCT LIST ---------------- */

const ProductList = async () => {
  const products = await getAllProducts();

  if (!products?.length) {
    return (
      <div className="md:col-span-3">
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <section className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={`product-${product.id}`} />
      ))}
    </section>
  );
};