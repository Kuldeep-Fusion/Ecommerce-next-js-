"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            NextShop
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

            <Link
              href="/"
              className="hover:text-black transition duration-200"
            >
              Home
            </Link>

            <Link
              href="/store"
              className="hover:text-black transition duration-200"
            >
              Store
            </Link>

            <Link
              href="/collections"
              className="hover:text-black transition duration-200"
            >
              Collections
            </Link>

            <Link
              href="/about"
              className="hover:text-black transition duration-200"
            >
              About
            </Link>

          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[260px]">

            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 text-sm w-full"
            />

          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">

            <Link href="/account">
              <User size={20} className="cursor-pointer hover:scale-110 transition" />
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingCart size={20} className="cursor-pointer hover:scale-110 transition" />

              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
                2
              </span>
            </Link>

            {/* Mobile Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden border-t bg-white">

          <div className="flex flex-col px-6 py-5 gap-5 text-sm">

            <Link href="/">Home</Link>

            <Link href="/store">Store</Link>

            <Link href="/collections">Collections</Link>

            <Link href="/about">About</Link>

            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">

              <Search size={18} />

              <input
                placeholder="Search..."
                className="bg-transparent outline-none px-2 w-full"
              />

            </div>

          </div>

        </div>
      )}
    </header>
  );
}