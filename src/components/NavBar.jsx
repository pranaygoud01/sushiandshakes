import React, { useState, useRef, useEffect } from "react";
import { IoMdClose, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Update your logo path

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close menu when clicking outside
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
    { name: "Ambience", path: "/ambience" },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="w-full flex justify-between max-lg:px-2 max-lg:justify-center text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-20 p-3 h-[40px] font-semibold">
        <h1 className="flex gap-1 max-lg:text-[9px] items-center text-xs">
          <GrLocation />
          Nuwairahs Japanese and Mexican kitchen, Station road, Old Harlow, CM17 0AS
        </h1>
        <div className="flex text-xs max-lg:hidden gap-5">
          <p className="flex gap-1 items-center">
            <MdOutlineLocalPhone />
            +44 1279 801230
          </p>
          <p className="flex gap-1 items-center">
            <IoMailOutline />
            info@nuwairahs.co.uk
          </p>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-300">
        <div className="max-w-8xl mx-auto h-[70px] max-lg:px-5 px-10 flex items-center justify-between">
          <img src={logo} className="h-[60px] object-cover" alt="Logo" />

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menu.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="text-xs uppercase text-neutral-600 font-semibold px-4 cursor-pointer hover:text-orange-500"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className="text-xs uppercase text-neutral-600 font-semibold px-4 cursor-pointer hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                )}
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 py-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {item.submenu.map((subItem, idx) => (
                      <a
                        key={idx}
                        href={subItem.path}
                        className="block px-4 py-2 text-xs uppercase text-neutral-600 hover:bg-gray-100 hover:text-orange-500"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://order.nuwairahs.co.uk/"
            className="hidden md:flex items-center gap-2 font-bold text-white px-4 py-2 bg-orange-500 text-sm hover:bg-orange-600 transition-all duration-200"
          >
            Order Now
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-neutral-700"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoMdClose /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Overlay when mobile menu is open */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile menu panel — full page */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              ref={navRef}
              className="md:hidden fixed inset-0 bg-white z-50 flex flex-col"
            >
              {/* Close button at top-right */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-2xl text-neutral-600"
                aria-label="Close menu"
              >
                <IoMdClose />
              </button>

              {/* Menu header */}
              <div className="pt-16 px-6 border-b border-neutral-100">
                <h2 className="text-xl font-bold text-neutral-900">Menu</h2>
              </div>

              {/* Scrollable menu items */}
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
                          <span className="text-base font-semibold text-neutral-800">
                            {item.name}
                          </span>
                          {openDropdown === item.name ? (
                            <IoMdArrowDropup size={16} className="text-orange-600" />
                          ) : (
                            <IoMdArrowDropdown size={16} className="text-neutral-400" />
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
                                className="block text-sm font-semibold text-neutral-600 hover:text-orange-600 transition-colors"
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
                        className="block text-base font-semibold text-neutral-800 hover:text-orange-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Sticky contact info at bottom */}
              <div className="bg-orange-600/10 border-t border-orange-200 p-5">
                <h3 className="text-xs font-bold text-orange-600 mb-2">Contact Us</h3>
                <p className="text-xs flex gap-2 items-center mb-1.5">
                  <GrLocation size={10} />
                  Nuwairahs Japanese and Mexican kitchen
                  <br />
                  Station road, Old Harlow, CM17 0AS
                </p>
                <p className="text-xs flex gap-2 items-center mb-1.5">
                  <MdOutlineLocalPhone />
                  +44 1279 801230
                </p>
                <p className="text-xs flex gap-2 items-center">
                  <IoMailOutline />
                  info@nuwairahs.co.uk
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
