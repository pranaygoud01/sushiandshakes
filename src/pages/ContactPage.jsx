import React from "react";
import { SiGooglegemini } from "react-icons/si";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

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
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-careys-pink-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text + Cards Section */}
        <div className="order-2 md:order-1 relative flex flex-col justify-center">
          <span className="absolute top-10 right-10 max-lg:top-6 max-lg:right-3">
            <SiGooglegemini className="text-careys-pink-500 text-2xl" />
          </span>

          <p className="text-xs text-careys-pink-600 font-semibold mb-2 uppercase tracking-wide">
            Sushi & Shakes Japanese Fusion Kitchen
          </p>
          <h2 className="text-2xl sm:text-3xl uppercase font-bold text-careys-pink-800 mb-3">
            Contact Us
          </h2>
          <p className="text-sm text-careys-pink-700 leading-relaxed mb-6">
            Have a question, feedback, or want to book a table? Reach out to us—we’re here to help.
          </p>

          <h3 className="text-lg font-semibold text-careys-pink-800 mb-3">Locations</h3>
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-careys-pink-100 shadow-sm rounded-md p-5 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{card.icon}</span>
                  <h4 className="font-semibold text-careys-pink-800">{card.title}</h4>
                </div>
                <address className="not-italic text-xs text-careys-pink-700 mb-1">
                  {card.address}
                </address>
                <p className="text-xs text-careys-pink-600">
                  <a href={`mailto:${card.email}`} className="underline">
                    {card.email}
                  </a>
                </p>
                <p className="text-xs text-careys-pink-600">
                  <a href={`tel:${card.phone}`} className="underline">
                    {card.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-careys-pink-800 mt-6 mb-2">Stay Connected</h3>
          <div className="flex gap-4 text-careys-pink-600 p-2 max-w-fit">
            <a
              href="https://facebook.com/nuwairahs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-careys-pink-700 transition-colors"
            >
              <FaFacebookSquare className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/nuwairahs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-careys-pink-700 transition-colors"
            >
              <FaTwitterSquare className="text-2xl" />
            </a>
            <a
              href="https://instagram.com/nuwairahs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-careys-pink-700 transition-colors"
            >
              <FaInstagramSquare className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sushi and Shakes Contact"
            className="w-full h-[70vh] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
