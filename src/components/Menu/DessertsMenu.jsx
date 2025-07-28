import React from 'react';

const sections = [
  {
    title: 'JAPANESE MOCHI',
    items: [
      { name: 'Mango Dessert', price: '£4.99', desc: 'Mangoes are perfect for creating refreshing and delicious desserts with their natural sweetness and tropical flavor. From creamy puddings to fruity sorbets, they add a luscious touch to every treat.' },
      { name: 'Chocolate Dessert', price: '£4.99', desc: 'Chocolate desserts are rich, indulgent treats that satisfy any sweet craving, from gooey lava cakes to creamy chocolate mousse. Whether baked, frozen, or whipped, they offer a decadent experience in every bite.' },
      { name: 'Matcha Dessert', price: '£4.99', desc: 'Matcha desserts blend earthy green tea flavors with subtle sweetness, creating a refreshing treat. From creamy mousse to soft cakes, they offer a perfect balance for tea lovers.' },
      { name: 'Coconut Dessert', price: '£4.99', desc: 'Coconut desserts offer a tropical twist with their rich, creamy texture and natural sweetness. From coconut cakes to creamy puddings, they bring a delightful taste of the tropics.' },
      { name: 'Strawberry Dessert', price: '£4.99', desc: 'Strawberry desserts are sweet, juicy, and refreshing, offering the perfect balance of tartness and flavor. From creamy cheesecakes to fresh tarts, they bring a delightful fruity touch.' },
      { name: 'Vanilla Dessert', price: '£4.99', desc: 'Vanilla desserts are classic and comforting, with a rich, creamy flavor that pairs beautifully with any treat. From silky custards to fluffy cakes, they offer a timeless sweetness.' },
    ],
  },
  {
    title: 'BELGIUM WAFFLE',
    items: [
      { name: 'Strawberry Sensation Dessert', price: '£7.99', desc: 'Strawberry Sensation Dessert, a delightful fusion of fresh strawberries, velvety cream, and luscious layers. Each bite offers a perfect balance of sweetness and tang. Whether in cakes, parfaits, or mousses, it\'s pure indulgence.' },
      { name: 'Monkey Caramel Dessert', price: '£7.99', desc: 'Monkey Caramel Dessert is a rich and gooey treat featuring caramel-drizzled banana slices layered over soft cake, cookies, or pudding. The combination of caramelized bananas, creamy textures, and a hint of cinnamon creates a delightful, melt-in-your-mouth experience.' },
      { name: 'Toffee Banana Dessert', price: '£7.99', desc: 'Toffee Banana Dessert is a decadent treat featuring caramelized bananas coated in rich toffee sauce. Served with ice cream, whipped cream, or crispy pastry, it offers a perfect balance of sweetness and crunch.' },
      { name: 'Oreo Monster Dessert', price: '£7.99', desc: 'The Oreo Monster Dessert is a fun, no-bake treat that’s perfect for kids, Halloween parties, or anyone who loves a creative and delicious twist on classic Oreos. This dessert combines the crunchy goodness of crushed Oreo cookies with creamy pudding, fluffy whipped cream, and spooky decorations like edible candy eyes.' },
    ],
  },
  {
    title: 'SUNDAES',
    items: [
      { name: 'Chocolate Dessert', price: '£6.99', desc: 'A Chocolate Sundae is a timeless dessert that combines rich, creamy vanilla ice cream with luscious chocolate sauce, topped with a variety of delightful extras. This irresistible treat is perfect for any occasion, offering a blend of smooth, sweet, and crunchy textures in every bite.' },
      { name: 'Caramel Dessert', price: '£6.99', desc: 'A Caramel Sundae is a heavenly dessert featuring velvety vanilla ice cream drizzled with rich, golden caramel sauce. This indulgent treat is perfect for those who love a balance of sweet, creamy, and buttery flavors.' },
      { name: 'Strawberry Dessert', price: '£6.99', desc: 'A Strawberry Sundae is a refreshing and fruity dessert featuring creamy vanilla ice cream topped with luscious strawberry sauce. It\'s a perfect blend of sweet, tangy, and creamy flavors, making it an all-time favorite!' },
      { name: 'The Twist Dessert', price: '£6.99', desc: 'The Twist Sundae is a perfect fusion of two classic flavors, typically vanilla and chocolate or vanilla and strawberry, swirled together for a visually stunning and delicious treat. This sundae offers the best of both worlds, blending creamy textures and rich flavors in every bite!' },
    ],
  },
];

const DessertsMenu = () => {
  return (
    <div className="bg-white text-neutral-800">
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Desserts Menu</h1>
        

        {sections.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-xl font-bold border-b-2 border-orange-500 inline-block mb-6 uppercase tracking-wide">{section.title}</h2>
            <div className="space-y-6">
              {section.items.map((item, idx) => (
                <div key={idx} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-md">{item.name}</h3>
                    <span className="text-sm text-orange-500 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default DessertsMenu;