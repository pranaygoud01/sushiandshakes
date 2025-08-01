import React from "react";
import { SiGooglegemini } from "react-icons/si";
import image from "../assets/ambience/img1.jpg";

const About = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-auto md:h-fit min-h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div>
          <img
            src={image}
            alt="Sushi & Shakes Ambience"
            className="w-full h-[70vh] md:max-h-full object-cover"
          />
        </div>
        <div className="relative h-full flex flex-col py-4 max-lg:pb-10 justify-center">
          <span className="absolute top-10 max-lg:top-6 max-lg:right-3 right-50">
            <SiGooglegemini className="text-careys-pink-700 text-2xl" />
          </span>
          <p className="text-xs text-careys-pink-500 font-semibold mb-2">
            Sushi and Shakes
          </p>
          <h2 className="text-2xl sm:text-3xl uppercase font-bold mb-3">
            About Sushi & Shakes
          </h2>
          <h3 className="text-lg font-semibold mt-4 mb-2">Handmade with Love</h3>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
            Dive into a world of exquisite flavors at Sushi & Shakes, where the art of sushi crafting meets the indulgence of handcrafted shakes. Our menu, a symphony of fresh, premium ingredients, fuses Japanese culinary traditions with sweet, inventive shakes. Every roll and shake is a masterpiece, inviting you on a taste journey that blends tradition, innovation, and pure satisfaction.
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Delivered with Care</h3>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
            We redefine the dining experience by blending sushi artistry and shake creativity.
            Each dish and drink is a harmony of precision, flavor, and innovation, promising to elevate your expectations and bring culinary bliss.
          </p>
          
          <h4 className="text-md font-medium mt-4 mb-2">Book Through Call</h4>
          <ul className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            <li>
              <a href="tel:+441279801230" className="underline">
                Old Harlow +44 1279 801230
              </a>
            </li>
            <li>
              <a href="tel:+441279801266" className="underline">
                Bishop's Stortford +44 1279 801266
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default About;
