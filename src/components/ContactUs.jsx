import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const locations = [
  {
    name: "Nuwairahs Japanese and Mexican kitchen",
    address: "Station road Old Harlow CM17 0AS",
    email: "Info@nuwairahs.co.uk",
    phone: "+44 1279 801230",
  },
  {
    name: "Nuwairahs Japanese and Mexican kitchen",
    address: "9, northgatend Bishop’s Stortford CM23 2ET",
    email: "Info@nuwairahs.co.uk",
    phone: "+44 1279 801266",
  },
];

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold uppercase text-center mb-16">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Locations */}
        <div>
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 rounded-md p-6 mb-10 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{loc.name}</h3>
              <p className="text-neutral-600 mb-4">{loc.address}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${loc.email}`}
                  className="flex items-center gap-2 text-orange-500 hover:underline text-sm"
                >
                  <HiOutlineMail size={20} />
                  {loc.email}
                </a>
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-orange-500 hover:underline text-sm"
                >
                  <HiOutlinePhone size={20} />
                  Booking Request : {loc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Timings */}
        <div className="border border-neutral-200 rounded-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-6 uppercase">Special Weekend Restaurant Timings</h3>
          <p className="mb-1">
            <span className="font-semibold">Friday & Saturday:</span>{" "}
            <span className="text-neutral-700">12:00 AM - 12:00 PM</span>
          </p>

          <h3 className="text-xl font-semibold my-6 uppercase">Daily Restaurant Timings</h3>
          <p>
            <span className="font-semibold">Sunday to Thursday:</span>{" "}
            <span className="text-neutral-700">12:00 AM - 10:00 PM</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
