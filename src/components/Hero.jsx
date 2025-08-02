import React from "react";
import { SiGooglegemini } from "react-icons/si";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden border-b border-neutral-200">
      {/* Watermark Logo */}
      <img
        src={logo}
        alt="Watermark Logo"
        className="pointer-events-none select-none opacity-5 absolute inset-0 m-auto max-w-sm z-0"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-careys-pink-600 text-sm font-bold tracking-wide">
              SUSHI AND SHAKES
            </p>
            <SiGooglegemini className="text-careys-pink-800 text-2xl" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
            Taste the Artistry of Sushi <br /> & the Indulgence of Shakes
          </h1>
          <p className="text-neutral-600 text-sm md:text-base">
            Savor the freshest sushi rolls, handcrafted with precision,
            alongside decadent shakes bursting with flavor. Dive into a creative
            menu where every bite promises tradition, excitement, and a sweet
            finish. Welcome to your new favorite spot!
          </p>
          <div>
            <a
              href="https://order.sushiandshakes.com/"
              className="inline-block bg-careys-pink-700 hover:bg-careys-pink-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Right Image with overlay */}
        <div className="relative w-full h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-careys-pink-200 opacity-30 z-10"
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
