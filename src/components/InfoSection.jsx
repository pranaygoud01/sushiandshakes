import React from "react";
import { FaUtensils, FaCouch, FaFire } from "react-icons/fa";
import leaf from "../assets/leaf.png"
import food1 from "../assets/food1.png"
const InfoSection = () => {
  return (
    <div className="flex justify-center -z-10 border-y border-y-neutral-300 ">
     
      <section className="py-8 px-4 md:py-12 md:px-8 max-w-7xl w-full  relative mx-auto">
        <span className="absolute top-20 max-lg:left-2 max-lg:top-4 left-10"><img src={leaf} className="w-auto max-lg:h-[60px] h-[150px]"/></span>
        <h2 className="text-center text-xl md:text-3xl font-semibold uppercase mb-10 md:mb-12">
          Our Awesome Services
        </h2>
<span className="absolute top-20 max-lg:left-2  max-lg:hidden max-lg:top-4 left-30"><img src={food1} className="w-auto max-lg:h-[60px] h-[150px]"/></span>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">

          {/* Left Big Highlight Box */}
          <div className="md:w-1/2 h-fit bg-careys-pink-700 mt-0 md:mt-40 text-white p-8 md:p-10 flex flex-col justify-center ">
            <div className="mb-4 w-10 h-10 text-white flex items-center justify-center">
              <FaUtensils size={24}  />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Our Cuisine</h3>
            <p className="mb-2 text-xs text-neutral-100 md:text-base">
              At Nuwairah’s, two rich and contrasting culinary cultures meet under one roof:
            </p>
            <ul className="list-disc text-neutral-100 text-xs md:text-base list-inside space-y-1 mb-4">
              <li>
                <span className="font-semibold">Japanese Cuisine:</span> Celebrated for its elegance,
                minimalism, and mastery of umami.
              </li>
              <li>
                <span className="font-semibold">Mexican Cuisine:</span> Known for bold flavors,
                vibrant colors, and heartwarming spice.
              </li>
            </ul>
            <p className="text-xs text-neutral-100 md:text-base">
              Our chefs are deeply passionate about the art of food-making, obsessing over the
              freshest ingredients, perfect plating, and authentic techniques handed down over
              generations.
            </p>
          </div>

          {/* Right Small Boxes */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            {/* Our Space Box */}
            <div className="bg-white p-6 md:p-10 border border-gray-200 ">
              <div className="mb-4 w-10 h-10 bg-yellow-100 rounded flex items-center justify-center">
                <FaCouch className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Our Space</h3>
              <ul className="list-disc text-xs md:text-base list-inside space-y-1">
                <li className="text-neutral-600">
                  <span className="font-semibold text-black">Lavish Ambience:</span> Every corner of Nuwairah’s
                  is designed to evoke comfort, luxury, and warmth, creating an atmosphere where
                  every meal feels like an occasion.
                </li>
                <li className="text-neutral-600">
                  <span className="font-semibold text-black">Expansive Kitchen:</span> Our world-class kitchen is
                  the heart of our restaurant – a large, modern, and meticulously maintained space
                  that empowers our chefs to create magic.
                </li>
                <li className="text-neutral-600">
                  <span className="font-semibold text-black">Generous Seating:</span> With a spacious dining
                  area, we accommodate a large number of guests comfortably, whether it’s a quiet
                  dinner or a celebratory gathering.
                </li>
              </ul>
            </div>

            {/* Our Passion Box */}
            <div className="bg-white p-6 md:p-10 border border-gray-200">
              <div className="mb-4 w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                <FaFire className="text-green-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Our Passion</h3>
              <p className="text-xs text-neutral-600 md:text-base">
                We don’t just serve food—we create experiences. Our team of chefs, hosts, and culinary
                artists are united by a single mission: to serve joy on every plate. Every dish
                reflects our 40+ year legacy of excellence, love for food, and relentless pursuit of
                perfection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
