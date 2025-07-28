import React from 'react';

// Import ambience images from assets
import img1 from '../assets/ambience/img1.jpg';
import img2 from '../assets/ambience/img2.jpg';
import img3 from '../assets/ambience/img3.jpg';
import img4 from '../assets/ambience/img4.jpg';
import img5 from '../assets/ambience/img5.jpg';
import img6 from '../assets/ambience/img6.jpg';
import img7 from '../assets/ambience/img7.jpg';
import img8 from '../assets/ambience/img8.jpg';
import img9 from '../assets/ambience/img9.jpg';
import img10 from '../assets/ambience/img10.jpg';
import img11 from '../assets/ambience/img11.jpg';
import img12 from '../assets/ambience/img12.jpg';
import img13 from '../assets/ambience/img13.jpg';
import img14 from '../assets/ambience/img14.jpg';
import img15 from '../assets/ambience/img15.jpg';
import img16 from '../assets/ambience/img16.jpg';
import img17 from '../assets/ambience/img17.jpg';
import img18 from '../assets/ambience/img18.jpg';
import img19 from '../assets/ambience/img19.jpg';
import img20 from '../assets/ambience/img20.jpg';
import img21 from '../assets/ambience/img21.jpg';
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
];

const Ambience = () => {
  return (
    <div className="bg-white text-black px-4 py-12">
      <h2 className="text-3xl font-semibold max-lg:text-xl text-center mb-10">Our Ambiance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md shadow-lg "
          >
            <img
              src={img}
              alt={`Ambience ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ambience;
