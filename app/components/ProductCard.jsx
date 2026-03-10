import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-4 group">

      {/* Product Image */}

      <Link href={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-lg bg-gray-100">

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-56 object-contain group-hover:scale-105 transition duration-300"
          />

        </div>
      </Link>

      {/* Product Info */}

      <div className="mt-4">

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        {/* Price */}

        <p className="text-lg font-bold text-gray-900 mt-2">
          ${product.price}
        </p>

        {/* Rating */}

        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
          ⭐ {product.rating?.rate || 4.5}
        </div>

        {/* Button */}

        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;