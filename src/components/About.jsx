import React from "react";
import { SiGooglegemini } from "react-icons/si";

const About = () => {
  return (
    <div className="max-w-8xl   mx-auto px-4 sm:px-6 lg:px-8 h-auto md:h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1549648184-0d3e8b8684fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nuwairah's Dining Experience"
            className="w-full h-[70vh] md:max-h-full  object-cover"
          />
        </div>
        <div className="relative h-full flex flex-col max-lg:pb-10 justify-center">
            <span className="absolute top-10 max-lg:top-6 max-lg:right-3 right-50"><SiGooglegemini className="text-orange-500 text-2xl"/></span>
          <p className="text-xs text-orange-500 font-semibold mb-2">Nuwairahs Japanese and Mexican kitchen</p>
          <h2 className="text-2xl sm:text-3xl uppercase font-bold mb-3">
            About Nuwairah's
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
            Nuwairah’s is a prestigious dining destination that has stood the test
            of time for over 40 years. A seamless fusion of Japanese precision and
            Mexican soul, Nuwairah’s offers a one-of-a-kind culinary experience
            that blends tradition with innovation in a lavish setting.
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Every Flavor Tells a Story
          </h3>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
            Nuwairah’s Japanese and Mexican Kitchen blends two rich culinary traditions through fusion cuisine. By combining Japanese umami flavors with Mexican bold spices, it creates innovative dishes like spicy tuna tacos and miso guacamole. This cross-cultural approach enhances taste experiences, offering a unique and exciting journey for food lovers.
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
                Bishops Stortford +44 1279 801266
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
