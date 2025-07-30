import React from "react";
import food1 from "../assets/food/Crispy-pullet.jpg";
import food2 from "../assets/food/Dragon-Roll.jpg";
import food3 from "../assets/food/PrawnKatsuCurry.jpg";
import food4 from "../assets/food/spiderroll.jpg";
import food5 from "../assets/food/Volcano-Roll.jpg";
import food6 from "../assets/food/food1.jpg";

const MenuMarquee = () => {
  const menuImages = [
    { image: food1, name: "Crispy Pullet" },
    { image: food2, name: "Dragon Roll" },
    { image: food3, name: "Prawn Katsu Curry" },
    { image: food4, name: "Spider Roll" },
    { image: food5, name: "Volcano Roll" },
    { image: food6, name: "Tempura" }
  ];

  // Duplicate images to simulate infinite scrolling
  const duplicatedImages = [...menuImages, ...menuImages];

  return (
    <div
      id="menu"
      className="w-full h-fit flex flex-col border-y border-y-neutral-300 max-lg:py-10 gap-3 py-20 items-center bg-white overflow-hidden"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
      <h1 className="font-dm font-semibold text-xs uppercase text-orange-500">
        Menu
      </h1>
      <p className="font-cal text-4xl uppercase max-lg:text-xl font-semibold text-center max-lg:px-5">
        Where Tokyo Meets Mexico City Every Bite a New Adventure
      </p>
      <p className="text-neutral-500 text-sm text-center w-9/12 max-lg:w-11/12 font-dm max-lg:px-5 max-lg:text-center max-lg:text-[11px]">
        Discover the fiery passion of Mexico and the refined artistry of Japan
        in every dish. Our menu celebrates bold fusion flavors, traditional
        specialties, and creative house favorites—all crafted for meat lovers,
        vegetarians, and vegans alike.
      </p>
      <div className="w-full overflow-hidden mt-10">
        <div className="marquee">
          {duplicatedImages.map((item, index) => (
            <div className="marquee-item" key={`${item.name}-${index}`}>
              <img
                src={item.image}
                className="w-[300px] h-[400px] max-lg:h-[300px] max-lg:w-[200px] object-cover mx-2"
                alt={`menu-${item.name}-${index}`}
              />
              <p className="font-semibold text-neutral-700">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="/menu/food"
        className="font-dm max-lg:text-xs max-lg:px-7 font-semibold text-white bg-black px-10 py-3 mt-10"
      >
        Explore Menu
      </a>
    </div>
  );
};

export default MenuMarquee;
