import React from "react";
import { FaUtensils, FaCouch, FaFire } from "react-icons/fa";
import leaf from "../assets/leaf.png";
import food1 from "../assets/food1.png";

const InfoSection = () => {
  return (
    <div className="flex justify-center border-y border-neutral-300 bg-[#fffaf5] relative overflow-hidden">
      <section className="py-12 px-4 md:py-20 md:px-8 max-w-7xl w-full mx-auto relative z-10">
        
        {/* Decorative Images */}
        <img
          src={leaf}
          alt="Decorative Leaf"
          className="absolute left-2 top-4 md:left-10 md:top-20 h-[60px] md:h-[150px] opacity-60"
        />
        <img
          src={food1}
          alt="Decorative Food"
          className="absolute right-2 top-4 md:right-10 md:top-20 h-[60px] md:h-[150px] opacity-60"
        />

        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 uppercase mb-14">
          Our Awesome Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Cuisine Card */}
          <div className="bg-rose-600 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white/20">
              <FaUtensils size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Cuisine</h3>
            <p className="mb-3 text-sm md:text-base text-rose-100">
              At Nuwairah’s, two rich and contrasting culinary cultures meet under one roof:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-rose-100">
              <li>
                <span className="font-semibold">Japanese Cuisine:</span> Celebrated for its elegance, minimalism, and mastery of umami.
              </li>
              <li>
                <span className="font-semibold">Mexican Cuisine:</span> Known for bold flavors, vibrant colors, and heartwarming spice.
              </li>
            </ul>
            <p className="mt-4 text-sm md:text-base text-rose-100">
              Our chefs obsess over freshness, plating, and traditional techniques passed down through generations.
            </p>
          </div>

          {/* Right Column Cards */}
          <div className="flex flex-col space-y-8">

            {/* Space Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-yellow-100 rounded-full">
                <FaCouch className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Our Space</h3>
              <ul className="list-disc list-inside text-sm md:text-base text-neutral-700 space-y-2">
                <li>
                  <span className="font-semibold text-black">Lavish Ambience:</span> Comfort, luxury, and warmth in every corner.
                </li>
                <li>
                  <span className="font-semibold text-black">Expansive Kitchen:</span> Modern and meticulously maintained.
                </li>
                <li>
                  <span className="font-semibold text-black">Generous Seating:</span> Spacious and welcoming for all gatherings.
                </li>
              </ul>
            </div>

            {/* Passion Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <FaFire className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Our Passion</h3>
              <p className="text-sm md:text-base text-neutral-700">
                We don’t just serve food—we create experiences. Every dish reflects our 40+ year legacy, love for food, and pursuit of perfection.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
