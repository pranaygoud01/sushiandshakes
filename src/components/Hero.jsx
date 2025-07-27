import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className="flex justify-center border-b border-b-neutral-300">
      <div className="max-w-7xl min-h-[70vh] px-5 gap-10 w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col gap-4 justify-center relative py-10 md:py-0">
          <h1 className="font-semibold text-3xl md:text-5xl uppercase leading-tight text-neutral-800">
            Where traditional recipes dance with modern flavors
          </h1>
          <p className="text-neutral-500 text-sm md:text-base">
            Discover the perfect blend of Japanese elegance and Mexican zest.
            Explore bold, fresh flavors crafted to delight your taste buds.
            Enjoy a unique fusion experience that brings two vibrant cuisines
            together.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-5">
            <button className="font-semibold text-white px-4 py-2 text-sm bg-orange-500">
              Order Now
            </button>
            <div className="relative">
              <button
                onClick={toggleOptions}
                className="font-semibold flex max-lg:px-2 items-center gap-1 cursor-pointer text-black px-4 py-2 text-sm hover:underline"
              >
                Book A Table
              </button>

              {showOptions && (
                <div className="absolute mt-2 left-0 sm:-right-10 bg-neutral-800 border border-gray-300 w-48 z-10">
                  <button
                    className="block px-4 cursor-pointer py-2 text-sm text-white hover:bg-black w-full text-left"
                    onClick={() => alert("Option 1 selected!")}
                  >
                    Old Harlow
                  </button>
                  <button
                    className="block px-4 py-2 text-sm cursor-pointer text-white hover:bg-black w-full text-left"
                    onClick={() => alert("Option 2 selected!")}
                  >
                    Bishop’s Stortford
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full h-64 md:h-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1680044991909-d4cf212589b0?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
