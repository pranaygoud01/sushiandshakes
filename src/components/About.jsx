import React from "react";
import { SiGooglegemini } from "react-icons/si";
import image from "../assets/ambience/img1.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-white via-pink-50 to-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={image}
            alt="Ambience of Sushi & Shakes"
            className="w-full h-[350px] md:h-[500px] object-cover transform hover:scale-105 transition duration-700"
          />
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col justify-center space-y-6">
          
          {/* Floating Icon */}
          <div className="absolute -top-8 right-0 bg-gradient-to-tr from-pink-200 to-pink-400 p-3 rounded-full shadow-xl">
            <SiGooglegemini className="text-pink-700 text-3xl" />
          </div>

          {/* Title & Subtitle */}
          <div>
            <p className="text-sm uppercase tracking-wider text-pink-500 font-semibold">
              Sushi and Shakes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase mt-1">
              About Us
            </h2>
          </div>

          {/* Handmade with Love */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Handmade with Love</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              At Sushi & Shakes, we combine the art of sushi craftsmanship with the joy of indulgent, handcrafted shakes. Our menu is a harmonious blend of fresh ingredients, traditional Japanese techniques, and modern flair — a feast for your eyes and your taste buds.
            </p>
          </div>

          {/* Delivered with Care */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Delivered with Care</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Every item is carefully prepared to deliver quality, flavor, and satisfaction. From our kitchen to your door, we bring a culinary experience that’s precise, flavorful, and crafted with genuine care.
            </p>
          </div>

          {/* Booking Details */}
          <div>
            <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Book Through Call</h4>
            <ul className="text-gray-600 text-base space-y-2">
              <li>
                📍{" "}
                <a
                  href="tel:+441279801230"
                  className="text-pink-600 underline hover:text-pink-800 transition"
                >
                  Old Harlow: +44 1279 801230
                </a>
              </li>
              <li>
                📍{" "}
                <a
                  href="tel:+441279801266"
                  className="text-pink-600 underline hover:text-pink-800 transition"
                >
                  Bishop's Stortford: +44 1279 801266
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
