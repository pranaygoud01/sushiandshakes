import React, { useState } from "react";

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
  // State for "Book A Table" dropdown
  const [showOptions, setShowOptions] = useState(false);
  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  const toggleOptions = () => setShowOptions((opt) => !opt);

  return (
    <div className="bg-white border-t border-t-neutral-300 text-black py-20 overflow-hidden">
      <h2 className="text-3xl font-semibold max-lg:text-xl uppercase text-center">
        Our Ambiance
      </h2>
      <p className="text-xs text-orange-500 lg:text-sm text-center mb-10 font-semibold">
        Nuwairahs Japanese and Mexican kitchen
      </p>

      {/* CSS styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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
            <div key={idx} className="w-70 h-70 overflow-hidden flex-shrink-0">
              <img
                src={img}
                alt={`Ambience ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center mt-10">
        <button
          onClick={toggleOptions}
          className="font-semibold flex max-lg:px-2 items-center gap-1 cursor-pointer text-white bg-black px-6 py-2 text-sm"
        >
          Book A Table
        </button>

        {showOptions && (
          <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-neutral-800 w-48 z-10">
            <a
              className="block px-4 cursor-pointer py-2 text-sm text-white hover:bg-black w-full text-left"
              href="https://www.opentable.co.uk/booking/restref/availability?lang=en-GB&correlationId=43ebf75d-944b-4183-8676-68c52e384867&restRef=375198&otSource=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Old Harlow
            </a>
            <a
              className="block px-4 py-2 text-sm cursor-pointer text-white hover:bg-black w-full text-left"
              href="https://www.opentable.co.uk/booking/restref/availability?lang=en-GB&correlationId=e7750972-a27a-4c02-9655-97e343a7dd0e&restRef=389022&otSource=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bishop’s Stortford
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmbienceMarquee;
