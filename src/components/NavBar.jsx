import React, { useState, useRef, useEffect } from "react";
import {
  IoMdClose,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    {
      name: "Menu",
      path: "/",
      submenu: [
        { name: "Food Menu", path: "/menu/food" },
        { name: "Drinks Menu", path: "/menu/drinks" },
        { name: "Desserts Menu", path: "/menu/desserts" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full flex justify-between max-lg:px-2 max-lg:justify-center text-white bg-careys-pink-700 px-20 p-3 h-[40px] font-semibold text-xs">
        <h1 className="flex gap-1 items-center max-lg:text-[9px]">
          <GrLocation />
          Sushi & Shakes Old Harlow & Bishop's Stortford
        </h1>
        <div className="flex gap-5 max-lg:hidden">
          <p className="flex items-center gap-1">
            <MdOutlineLocalPhone />
            +44 01279801230
          </p>
          <p className="flex items-center gap-1">
            <IoMailOutline />
            info@sushiandshakes.com
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white  shadow-sm">
        <div className="max-w-8xl mx-auto h-[70px] max-lg:px-5 px-10 flex items-center justify-between">
          <img src={logo} className="h-[60px] object-cover" alt="Logo" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {menu.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="text-xs uppercase text-careys-pink-800 font-semibold px-4 hover:text-careys-pink-500 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className="text-xs uppercase text-careys-pink-800 font-semibold px-4 hover:text-careys-pink-500 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                )}
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 py-2 w-44 bg-white border border-careys-pink-100 rounded-md shadow-lg z-10">
                    {item.submenu.map((subItem, idx) => (
                      <a
                        key={idx}
                        href={subItem.path}
                        className="block px-4 py-2 text-xs uppercase text-careys-pink-700 hover:bg-careys-pink-50 hover:text-careys-pink-600"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://order.sushiandshakes.com/"
            className="hidden md:flex items-center gap-2 font-bold text-white px-5 py-2 bg-careys-pink-600 rounded-full text-sm hover:bg-careys-pink-700 transition-all duration-300"
          >
            Order Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-careys-pink-800"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoMdClose /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              ref={navRef}
              className="md:hidden fixed inset-0 bg-careys-pink-50 z-50 flex flex-col"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-2xl text-careys-pink-800"
              >
                <IoMdClose />
              </button>

              <div className="pt-16 px-6 border-b border-careys-pink-200">
                <h2 className="text-xl font-bold text-careys-pink-800">Menu</h2>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pt-4">
                {menu.map((item, index) => (
                  <div key={index} className="py-2">
                    {item.submenu ? (
                      <div>
                        <div
                          className="flex items-center justify-between pr-2 cursor-pointer"
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.name ? null : item.name)
                          }
                        >
                          <span className="text-base font-semibold text-careys-pink-800">
                            {item.name}
                          </span>
                          {openDropdown === item.name ? (
                            <IoMdArrowDropup size={16} className="text-careys-pink-600" />
                          ) : (
                            <IoMdArrowDropdown size={16} className="text-careys-pink-400" />
                          )}
                        </div>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 ml-3 space-y-2.5"
                          >
                            {item.submenu.map((subItem, idx) => (
                              <motion.a
                                key={idx}
                                href={subItem.path}
                                className="block text-sm font-semibold text-careys-pink-700 hover:text-careys-pink-500 transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {subItem.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        className="block text-base font-semibold text-careys-pink-800 hover:text-careys-pink-500 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-careys-pink-700 text-white border-t border-careys-pink-800 p-5">
                <h3 className="text-xs font-bold mb-2">Contact Us</h3>
                <p className="text-xs flex gap-2 items-center mb-1.5">
                  <GrLocation size={10} />
                  Sushi & Shakes Old Harlow & Bishop's Stortford
                </p>
                <p className="text-xs flex gap-2 items-center mb-1.5">
                  <MdOutlineLocalPhone />
                  +44 01279801230
                </p>
                <p className="text-xs flex gap-2 items-center">
                  <IoMailOutline />
                  info@sushiandshakes.com
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
