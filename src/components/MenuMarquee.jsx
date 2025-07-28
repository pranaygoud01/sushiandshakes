import React from "react";

const MenuMarquee = () => {
  const menuImages = [
    "https://images.unsplash.com/photo-1580876205974-a8d6894b0f71?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1683259692515-220679cb1c6a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583549323543-7ae855a78d6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555403039-35151a15b61b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          width:max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <h1 className="font-dm font-semibold text-xs uppercase text-orange-500">Menu</h1>{" "}
      <p className="font-cal text-4xl uppercase max-lg:text-xl font-semibold text-center max-lg:px-5">
        Where Tokyo Meets Mexico City Every Bite a New Adventure
      </p>{" "}
      <p className="text-neutral-500 text-sm text-center w-9/12 max-lg:w-11/12 font-dm max-lg:px-5 max-lg:text-center max-lg:text-[11px]">
        Discover the fiery passion of Mexico and the refined artistry of Japan
        in every dish. Our menu celebrates bold fusion flavors, traditional
        specialties, and creative house favorites—all crafted for meat lovers,
        vegetarians, and vegans alike.
      </p>
      <div className="w-full overflow-hidden mt-10">
        <div className="marquee">
          {duplicatedImages.map((item, index) => (
            <img
              key={index}
              src={item}
              className="w-[300px] h-[400px] max-lg:h-[300px] max-lg:w-[200px] object-cover mx-2"
              alt={`menu-${index}`}
            />
          ))}
        </div>
      </div>
      <a
        href="/menu/food"
        className="font-dm max-lg:text-xs max-lg:px-7 font-semibold text-white bg-black px-10 py-3  mt-10"
      >
        Explore Menu
      </a>
    </div>
  );
};

export default MenuMarquee;
