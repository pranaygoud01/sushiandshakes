import React from "react";
import food1 from "../assets/food/Crispy-pullet.jpg";
import food2 from "../assets/food/Dragon-Roll.jpg";
import food3 from "../assets/food/PrawnKatsuCurry.jpg";
import food4 from "../assets/food/spiderroll.jpg";
import food5 from "../assets/food/Volcano-Roll.jpg";
import food6 from "../assets/food/food1.jpg";

const MenuMarquee = () => {
  const items = [
    { image: food1, name: "Crispy Pullet" },
    { image: food2, name: "Dragon Roll" },
    { image: food3, name: "Prawn Katsu Curry" },
    { image: food4, name: "Spider Roll" },
    { image: food5, name: "Volcano Roll" },
    { image: food6, name: "Tempura" },
  ];

  const duplicatedItems = [...items, ...items]; // for infinite scroll

  return (
    <div
      id="menu"
      className="relative w-full py-20 bg-gradient-to-b from-white via-white to-pink-50 border-y border-neutral-200 overflow-hidden"
    >
      {/* Marquee animation */}
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: infiniteScroll 40s linear infinite;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-sm uppercase text-pink-500 font-semibold tracking-wide font-dm">
          Our Signature Dishes
        </h2>
        <h1 className="text-4xl max-md:text-2xl font-cal font-bold mt-2 text-neutral-900">
          Where Tokyo Meets Mexico City
        </h1>
        <p className="mt-4 text-sm max-md:text-xs text-neutral-600 max-w-2xl mx-auto font-dm">
          Experience a fusion of Japanese precision and Mexican passion. From sushi rolls with a twist to spicy street-style delights—our menu is a bold adventure for every foodie.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex marquee-track w-max">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex flex-col items-center mx-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[260px] h-[340px] max-md:w-[180px] max-md:h-[240px] rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-3 text-sm text-neutral-800 font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="flex justify-center mt-16">
        <a
          href="/menu/food"
          className="bg-pink-600 hover:bg-pink-500 text-white font-dm text-sm px-8 py-3 rounded-full shadow-md transition-colors duration-300"
        >
          View Full Menu
        </a>
      </div>

      {/* Optional Gradient Fade (left/right) */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default MenuMarquee;
