import React from "react";

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
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading added here */}
      <h2 className="text-3xl uppercase max-lg:text-xl font-bold text-center mb-10">
        Our Commitment to Quality
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 hover:shadow-md p-6 flex flex-col items-center text-center"
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
