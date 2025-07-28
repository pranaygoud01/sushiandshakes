import React from "react";
import food from "../assets/food.png"
const cards = [
  {
    icon: "🍟",
    title: "Freshness Guaranteed",
    text: "Enjoy meals prepared with the finest, farm-fresh ingredients, ensuring every bite bursts with natural flavor and quality.",
  },
  {
    icon: "📦",
    title: "Fast & Reliable Delivery",
    text: "Get your favorite dishes delivered quickly and reliably, so you can savor great food without any hassle or delays.",
  },
  {
    icon: "👌",
    title: "Carefully Packed",
    text: "Each order is securely packaged to preserve taste, temperature, and hygiene, offering you a safe and delightful experience.",
  },
  {
    icon: "🤝🏻",
    title: "Trusted by Customers",
    text: "Thousands trust our quality and service—check reviews and see why we’re the preferred choice for discerning food lovers.",
  },
];

const Quality = () => {
  return (
    <div className="max-w-8xl mx-auto max-lg:px-5 relative px-10 py-12">
      <span className="absolute top-0 max-lg:hidden left-10">
        <img src={food} className="w-auto h-[150px]"/>
      </span>
      {/* Heading added here */}
      <h2 className="text-3xl uppercase max-lg:text-xl font-bold text-center ">
        Our Commitment to Quality
      </h2>
      <p className="text-center mb-10 text-xs py-2 max-lg:mb-5 font-semibold text-orange-500 uppercase">Nuwairah's</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 shadow-xl hover:shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="mb-2 text-4xl">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
            <p className="text-gray-500 text-xs mb-4">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;
