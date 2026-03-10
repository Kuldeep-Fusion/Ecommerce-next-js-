import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">NextShop</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover modern products with the best quality and price.
            Your one stop destination for fashion, gadgets and lifestyle.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#">
              <Facebook size={20} className="hover:text-white transition" />
            </a>

            <a href="#">
              <Instagram size={20} className="hover:text-white transition" />
            </a>

            <a href="#">
              <Twitter size={20} className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Store Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Store</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/store">All Products</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/best-sellers">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/returns">Returns</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get updates on new products and offers.
          </p>

          <div className="flex bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent px-3 py-2 text-sm outline-none w-full"
            />

            <button className="bg-white text-black px-4 text-sm font-medium hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} NextShop. All rights reserved.
      </div>
    </footer>
  );
}