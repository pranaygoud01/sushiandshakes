import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../assets/logo.png";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="w-full max-lg:hidden flex justify-between text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-20 p-3 h-[40px] font-semibold">
        <h1 className="flex gap-1 items-center text-xs">
          <GrLocation />
          Nuwairahs Japanese and Mexican kitchen Station road Old Harlow CM17 0AS
        </h1>
        <div className="flex text-xs gap-5">
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

      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-300">
        <div className="max-w-8xl mx-auto h-[70px] max-lg:px-5 px-10 flex items-center justify-between">
          <img src={logo} className="h-[60px] object-cover" alt="Logo" />

          {/* Desktop Menu - Click to toggle submenu */}
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
          <button className="hidden md:flex items-center gap-2 font-bold text-white px-4 py-2 bg-orange-500 text-sm hover:bg-orange-600 transition-all duration-200">
            Order Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-neutral-700"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoMdClose /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {menuOpen && (
          <div className="w-8/12 border-r border-r-neutral-200 bg-white h-[92vh] border-t border-t-neutral-300 fixed flex flex-col justify-between">
            {/* Menu items */}
            <div className="flex flex-col gap-5 p-10">
              {menu.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      <h1 className="text-xs font-semibold uppercase">
                        {item.name}
                      </h1>
                      {openDropdown === item.name && (
                        <div className="ml-6 mt-2 flex py-2 flex-col gap-3">
                          {item.submenu.map((subItem, idx) => (
                            <a
                              key={idx}
                              href={subItem.path}
                              className="text-xs uppercase font-semibold text-neutral-600"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.path}>
                      <h1 className="text-xs font-semibold uppercase">
                        {item.name}
                      </h1>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Contact info at bottom */}
            <div className="py-5 space-y-2 px-5 absoulte bottom-0 mb-4 bg-orange-500 text-white">
              <p className="text-[9px] flex gap-2 items-center">
                Nuwairahs Japanese and Mexican kitchen <br />
                Station road Old Harlow CM17 0AS
              </p>
              <p className="text-[9px] flex gap-2 items-center">
                +44 1279 801230
              </p>
              <p className="text-[9px] flex gap-2 items-center">
                info@nuwairahs.co.uk
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
