import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  const cards = [
    {
      icon: "📍",
      title: "Old Harlow",
      address: "Station road, Old Harlow CM17 0AS",
      email: "Info@nuwairahs.co.uk",
      phone: "+44 1279 801230",
    },
    {
      icon: "📍",
      title: "Bishop’s Stortford",
      address: "9, Northgate, Bishop’s Stortford CM23 2ET",
      email: "Info@nuwairahs.co.uk",
      phone: "+44 1279 801266",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="order-2 md:order-1 relative h-full flex flex-col justify-center">
          <span className="absolute top-10 max-lg:top-6 max-lg:right-3 right-10">
            <SiGooglegemini className="text-orange-500 text-2xl" />
          </span>
          <p className="text-xs text-orange-500 font-semibold mb-2">Nuwairahs Japanese and Mexican kitchen</p>
          <h2 className="text-2xl sm:text-3xl uppercase font-bold mb-3">Contact Us</h2>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
            Have a question, feedback, or want to book a table? Reach out to us—we’re here to help.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Locations</h3>
          <div className="grid grid-cols-1 gap-6 mb-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 shadow-md p-5">
                <div className="flex items-center gap-0 mb-2">
                  <span className="text-2xl">{card.icon}</span>
                  <h4 className="font-semibold">{card.title}</h4>
                </div>
                <address 
                  className="not-italic text-neutral-600 text-xs mb-1"
                  style={{ fontStyle: 'normal' }}
                >
                  {card.address}
                </address>
                <p className="text-xs text-neutral-600">
                  <a href={`mailto:${card.email}`} className="underline">
                    {card.email}
                  </a>
                </p>
                <p className="text-xs text-neutral-600">
                  <a href={`tel:${card.phone}`} className="underline">
                    {card.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2">Stay Connected</h3>
          <div className="flex gap-4 text-gray-500 p-2 max-w-fit">
            <a
              href="https://facebook.com/nuwairahs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookSquare className="text-xl" />
            </a>
            <a
              href="https://twitter.com/nuwairahs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitterSquare className="text-xl" />
            </a>
            <a
              href="https://instagram.com/nuwairahs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagramSquare className="text-xl" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          {/* Feature image placeholder—replace with your desired contact visual */}
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nuwairah's Contact Experience"
            className="w-full h-[70vh] md:max-h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
