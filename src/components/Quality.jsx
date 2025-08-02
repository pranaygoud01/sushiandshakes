import React from "react";
import food from "../assets/food.png";

const cards = [
  {
    icon: "🍟",
    title: "Freshness Guaranteed",
    text: "Enjoy meals prepared with the finest, farm-fresh ingredients, ensuring every bite bursts with natural flavor and quality.",
    color: "from-yellow-300 to-yellow-500",
  },
  {
    icon: "📦",
    title: "Fast & Reliable Delivery",
    text: "Get your favorite dishes delivered quickly and reliably, so you can savor great food without any hassle or delays.",
    color: "from-blue-300 to-blue-500",
  },
  {
    icon: "👌",
    title: "Carefully Packed",
    text: "Each order is securely packaged to preserve taste, temperature, and hygiene, offering you a safe and delightful experience.",
    color: "from-pink-300 to-pink-500",
  },
  {
    icon: "🤝🏻",
    title: "Trusted by Customers",
    text: "Thousands trust our quality and service—check reviews and see why we’re the preferred choice for discerning food lovers.",
    color: "from-green-300 to-green-500",
  },
];

const Quality = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-pink-50 py-16 px-6 sm:px-10 lg:px-20">
      {/* Decorative Food Image */}
      <div className="absolute top-4 left-4 max-lg:hidden">
        <img src={food} alt="Food" className="h-[120px] w-auto opacity-90" />
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold uppercase text-neutral-800 tracking-wide">
          Our Commitment to Quality
        </h2>
        <p className="text-pink-600 font-semibold text-sm uppercase tracking-wide mt-2">
          Sushi and Shakes
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl text-black shadow-xl hover:scale-[1.03] transform transition duration-300 bg-white  p-6 flex flex-col justify-between min-h-[280px]`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-sm font-medium text-black/90">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quality;
