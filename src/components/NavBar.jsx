import React, { useState } from "react";
import { IoFastFoodOutline, IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { name: "What we Do", path: "/" },
    { name: "Menu", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-300 shadow-sm">
      <div className="max-w-7xl mx-auto h-[70px] px-5 flex items-center justify-between">
        <img src={logo} className="h-[60px] object-cover" alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-xs uppercase text-neutral-600 font-semibold px-4 cursor-pointer hover:text-orange-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:flex items-center gap-2 font-bold text-white px-4 py-2 bg-orange-500 text-sm rounded hover:bg-orange-600 transition-all duration-200">
          <IoFastFoodOutline />
          Order Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-neutral-700"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen py-4 border-t border-t-neutral-200 shadow-md" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase text-neutral-600 font-semibold hover:text-orange-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="flex items-center gap-2 font-bold text-white px-6 py-2 bg-orange-500 text-sm rounded hover:bg-orange-600 transition-all">
            <IoFastFoodOutline />
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
