import React from "react";

// Import ambience images from assets
import img1 from "../assets/ambience/img1.jpg";
import img2 from "../assets/ambience/img2.jpg";
import img3 from "../assets/ambience/img3.jpg";
import img4 from "../assets/ambience/img4.jpg";
import img5 from "../assets/ambience/img5.jpg";
import img6 from "../assets/ambience/img6.jpg";
import img7 from "../assets/ambience/img7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const AmbienceMarquee = () => {
  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="bg-white border-t border-t-neutral-300 text-black px-4 py-12 overflow-hidden">
      <h2 className="text-3xl font-semibold max-lg:text-xl uppercase text-center">
        Our Ambiance
      </h2>
      <p className="text-xs text-orange-500 lg:text-sm text-center mb-10 font-semibold">
        Nuwairahs Japanese and Mexican kitchen
      </p>

      {/* CSS styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
          gap: 0.8rem;
        }
      `}</style>

      <div
        className="flex overflow-hidden"
        aria-label="Ambience images marquee"
        aria-live="off"
      >
        <div className="marquee-container" aria-hidden="true">
          {duplicatedImages.map((img, idx) => (
            <div
              key={idx}
              className="w-70 h-70 overflow-hidden flex-shrink-0"
            >
              <img
                src={img}
                alt={`Ambience ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
          <a href="https://order.nuwairahs.co.uk" className="font-semibold max-lg:text-sm text-white bg-black px-6 py-2">Order Now</a>
      </div>
    </div>
  );
};

export default AmbienceMarquee;
