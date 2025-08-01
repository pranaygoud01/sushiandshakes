import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-20 max-lg:p-5 max-lg:py-8 py-12">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-10">
        {/* Location */}
        <div className="flex flex-col gap-6 w-full md:w-1/3 max-w-md">
          <h2 className="text-3xl max-lg:text-2xl font-semibold font-cal mb-2">Visit Us</h2>

          <div>
            <h3 className="font-semibold max-lg:text-sm text-lg mb-2">Sushi & Shakes</h3>
            <address className="not-italic text-neutral-300 text-xs mb-1">
              37-39 Station Road, Old Harlow CM17 0AS
            </address>
            <p className="text-xs text-neutral-400">
              <a href="mailto:info@sushiandshakes.co.uk" className="hover:underline">
                info@sushiandshakes.co.uk
              </a>
            </p>
            <p className="text-xs text-neutral-400">
              Booking Request:{" "}
              <a href="tel:+441279801230" className="hover:underline">
                +44 1279 801230
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold max-lg:text-sm text-lg mb-2">Sushi & Shakes</h3>
            <address className="not-italic text-neutral-300 text-xs mb-1">
              9 Northgate End, Bishop’s Stortford CM23 2ET
            </address>
            <p className="text-xs text-neutral-400">
              <a href="mailto:info@sushiandshakes.co.uk" className="hover:underline">
                info@sushiandshakes.co.uk
              </a>
            </p>
            <p className="text-xs text-neutral-400">
              Booking Request:{" "}
              <a href="tel:+441279801267" className="hover:underline">
                +44 1279 801267
              </a>
            </p>
          </div>
        </div>

        {/* Timings */}
        <div className="w-full md:w-1/3 max-w-xs text-neutral-300 text-xs">
          <h3 className="font-semibold max-lg:text-sm text-lg mb-2">Special Weekend Timings</h3>
          <p className="mb-1">
            <strong>Friday &amp; Saturday:</strong> 12:00 AM - 12:00 PM
          </p>

          <h3 className="font-semibold max-lg:text-sm text-lg my-2 mt-4">Daily Timings</h3>
          <p>
            <strong>Sunday to Thursday:</strong> 12:00 AM - 10:00 PM
          </p>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-3 w-full md:w-1/3 max-w-sm">
          <h3 className="font-semibold text-lg mb-4 max-lg:mb-2">Get in Touch</h3>
          <p className="text-neutral-400 text-xs max-lg:mb-0 mb-2">
            Email us at{" "}
            <a href="mailto:info@sushiandshakes.co.uk" className="hover:underline">
              info@sushiandshakes.co.uk
            </a>
          </p>
          <p className="text-neutral-400 text-xs mb-6 max-lg:mb-2">
            Call for Booking:{" "}
            <a href="tel:+441279801230" className="hover:underline">
              +44 1279 801230
            </a>{" "}
            or{" "}
            <a href="tel:+441279801267" className="hover:underline">
              +44 1279 801267
            </a>
          </p>

          <div className="flex gap-4 text-3xl text-white">
            <a
              href="https://facebook.com/sushiandshakes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://twitter.com/sushiandshakes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="https://instagram.com/sushiandshakes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-800 my-8"></div>

      <div className="flex justify-between items-center text-xs text-neutral-500 max-md:flex-col max-md:gap-4">
        <span>© {new Date().getFullYear()} Sushi & Shakes. All rights reserved.</span>
        <span className="max-md:text-center max-md:block">
          Experience the fusion of flavor — Sushi, Shakes & More.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
