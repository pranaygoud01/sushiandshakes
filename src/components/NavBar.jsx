import React, { useState } from "react";
import { IoFastFoodOutline, IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import { GrLocation } from "react-icons/gr";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { name: "What we Do", path: "/" },
    { name: "Menu", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <>
    <div className="w-full max-lg:hidden flex justify-between px-20 p-3 h-[40px] border-b border-neutral-300">
      <h1 className="text-neutral-800 flex gap-1 items-center text-xs"><GrLocation/>Nuwairahs Japanese and Mexican kitchen Station road Old Harlow CM17 0AS</h1>
      <div className="flex text-xs gap-5">
        <p>+44 1279 801230</p>
        <p>info@nuwairahs.co.uk</p>
      </div>
    </div>
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-300 ">
      <div className="max-w-8xl mx-auto h-[70px] max-lg:px-5 px-10 flex items-center justify-between">
        <img src={logo} className="h-[60px]  object-cover" alt="Logo" />
       
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
        <button className="hidden md:flex items-center gap-2 font-bold text-white px-4 py-2 bg-orange-500 text-sm  hover:bg-orange-600 transition-all duration-200">
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
      {menuOpen && (
        <div className="w-8/12 bg-white h-[92vh] border-t border-t-neutral-300 p-10 fixed">
          <div className="flex flex-col gap-5">
            {menu.map((item, index) => {
              return <h1 className="text-sm font-semibold uppercase">{item.name}</h1>;
            })}
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default NavBar;
