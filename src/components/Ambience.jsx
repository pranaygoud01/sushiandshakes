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

const images = [
  img1, img2, img3, img4, img5, img6, img7,
];

const bentoSpans = [
  { colSpan: 'col-span-2', rowSpan: 'row-span-2' }, // Larger image
  { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { colSpan: 'col-span-2', rowSpan: 'row-span-1' },
  { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  
];

const Ambience = () => {
  return (
    <div className="bg-white text-black px-4 py-12">
      <h2 className="text-3xl font-semibold max-lg:text-xl uppercase text-center">Our Ambiance</h2>
       <p className="text-xs text-orange-500 lg:text-sm text-center mb-10 font-semibold ">Nuwairahs Japanese and Mexican kitchen</p>
      <div
        className="grid grid-cols-3 gap-2 max-w-7xl mx-auto"
        style={{ gridTemplateRows: '14rem 14rem 14rem' }}  // Smaller fixed row heights to reduce image sizes
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`${bentoSpans[index].colSpan} ${bentoSpans[index].rowSpan} overflow-hidden `}
            style={{ minHeight: 'inherit' }} // Make sure each grid item respects the row height
          >
            <img
              src={img}
              alt={`Ambience ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ambience;
