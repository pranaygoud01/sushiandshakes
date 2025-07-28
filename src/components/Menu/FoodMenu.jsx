import React from 'react';

const sections = [
  {
    title: 'BURGER AND CHIPS',
    items: [
      { name: 'Melty Cheese Beef Burger', price: '£12.99', desc: 'A juicy beef patty topped with melted cheese, served in a soft bun with fresh toppings for a rich and satisfying bite.' },
      { name: 'Melty Cheese and Bacon Burger', price: '£12.99', desc: 'A flavorful beef burger loaded with melted cheese and crispy bacon, delivering the perfect balance of smoky and cheesy goodness.' },
      { name: 'Beef BBQ Melt', price: '£12.99', desc: 'A hearty beef burger smothered in smoky BBQ sauce and melted cheese, offering a deliciously sweet and savory flavor.' },
      { name: 'Spicy Beef Burger', price: '£12.99', desc: 'A bold and fiery beef burger packed with spice, topped with jalapeños and spicy sauce for a kick of heat.' },
      { name: 'Mexicon Beef Burger', price: '£12.99', desc: 'A zesty beef burger with Mexican-inspired flavors, featuring spicy salsa, jalapeños, and melted cheese in a toasted bun.' },
      { name: 'Classic Chicken Burger', price: '£12.99', desc: 'A timeless favorite with a perfectly grilled beef patty, fresh lettuce, tomato, and classic burger sauce on a toasted bun.' },
      { name: 'Spicy Chicken Burger', price: '£12.99', desc: 'A crispy or grilled chicken fillet coated in spicy seasoning, served with fresh toppings and a zesty sauce for extra heat.' },
      { name: 'Buffalo Chicken Burger', price: '£12.99', desc: 'A crispy chicken burger tossed in tangy buffalo sauce, topped with lettuce and a creamy dressing for the ultimate flavor.' },
      { name: 'Vegan Burger', price: '£12.99', desc: 'A delicious plant-based burger made with a flavorful vegan patty, fresh veggies, and a tasty sauce, served in a soft bun.' },
    ],
  },
  {
    title: 'MAKI ROLLS',
    items: [
      { name: 'Salmon Maki', price: '£4.99', desc: 'Fresh salmon wrapped in rice and seaweed, served with ginger & wasabi.' },
      { name: 'Tuna Maki', price: '£5.99', desc: 'Fresh tuna wrapped in rice and seaweed, served with ginger & wasabi.' },
      { name: 'Cucumber Maki', price: '£3.99', desc: 'Crunchy cucumber wrapped in rice and seaweed, served with ginger & wasabi.' },
      { name: 'Avocado Maki', price: '£3.99', desc: 'Creamy avocado wrapped in rice and seaweed, served with ginger & wasabi.' },
    ],
  },
  {
    title: 'SPECIALITY ROLLS',
    items: [
      { name: 'Dragon Roll', price: '£17.49', desc: '8 pieces of prawn tempura and steamed asparagus roll wrapped in thinly sliced avocado, topped with spicy mayo and sweet soy glazing.' },
      { name: 'Spider Roll', price: '£17.49', desc: '8 pieces of soft-shell crab tempura and cucumber roll, coated with avocado and flying fish roe, topped with spicy mayo and sweet soy glazing.' },
      { name: 'Rainbow Roll', price: '£17.49', desc: '8 pieces of prawn, crab sticks, and cucumber roll wrapped in avocado, tuna, and salmon.' },
      { name: 'Volcano Roll', price: '£17.49', desc: '8 pieces of spicy mayo and sweet soy-glazed roll.' },
      { name: 'Vegi Volcano Roll', price: '£17.49', desc: '8 pieces of deep-fried asparagus, avocado, cucumber, wonton flakes, and red pepper uramaki rolls, topped with sweet soy glazing.' },
      { name: 'Crunch Spicy Salmon Roll', price: '£17.49', desc: '8 pieces of salmon tempura roll, coated with sesame seeds, topped with spicy mayo and crunchy onions.' },
      { name: 'Crunch Spicy Tuna Roll', price: '£17.49', desc: '8 pieces of tuna tempura roll, coated with sesame seeds, topped with spicy mayo and crunchy onions.' },
      { name: 'Crunch Spicy California Roll', price: '£17.49', desc: '8 pieces of crab sticks and avocado roll, coated with sesame, topped with spicy mayo and crispy onions.' },
      { name: 'Truffle Salmon Roll', price: '£17.49', desc: '8 pieces of yellow pickled radish, cucumber, and avocado rolls wrapped in sliced salmon with truffle mayo.' },
      { name: 'Seared Salmon & Prawn Roll', price: '£17.49', desc: '8 pieces of prawn tempura and cucumber roll, covered with seared salmon, glazed with tobiko (flying fish roe) and spicy mayo.' },
    ],
  },
  {
    title: 'URAMAKI',
    items: [
      { name: 'Salmon Avocado & Cucumber', price: '', desc: 'Salmon rolled with cucumber and avocado, coated with sesame seeds, and topped with yuzu mayo.' },
      { name: 'California Roll', price: '', desc: 'Crab sticks rolled with cucumber and avocado, coated with sesame seeds, and topped with marinated flying fish roe.' },
      { name: 'Spicy Tuna Uramaki', price: '', desc: 'Spicy tuna, diced spring onion, and sliced cucumber roll, coated with sesame seeds and topped with spicy mayo.' },
      { name: 'Chicken Katsu Uramaki', price: '', desc: 'Chicken katsu rolled with cucumber, coated with sesame seeds, and topped with spicy mayonnaise.' },
      { name: 'Prawn Katsu Uramaki', price: '', desc: 'Prawn katsu rolled with cucumber and mixed greens, coated with sesame seeds, and topped with spicy mayo.' },
      { name: 'Vegetable Uramaki', price: '', desc: 'Asparagus and avocado roll, coated with pak choi and glazed with sweet soy.' },
      { name: 'Unagi Uramaki', price: '', desc: 'Eel rolled with cucumber and avocado, coated with sesame seeds, and glazed with sweet soy.' },
    ],
  },
  {
    title: 'SASHIMI',
    items: [
      { name: 'Salmon Sashimi (5 pcs)', price: '£8.99', desc: 'Freshly sliced premium salmon, served raw.' },
      { name: 'Tuna Sashimi (5 pcs)', price: '£9.99', desc: 'Delicate slices of fresh tuna, served raw.' },
      { name: 'Sea Bass Sashimi (5 pcs)', price: '£8.99', desc: 'Mild and buttery sea bass, thinly sliced and served raw.' },
      { name: 'Hamachi Sashimi (5 pcs)', price: '£8.99', desc: 'Yellowtail sashimi with a smooth texture and rich flavor.' },
      { name: 'Saba Sashimi (5 pcs)', price: '£9.99', desc: 'Fresh mackerel sashimi with a bold, slightly sweet taste.' },
      { name: 'Mini Mix Sashimi (6 pcs)', price: '£10.99', desc: 'A selection of salmon, tuna, and other fresh fish.' },
      { name: 'Mix Salmon & Tuna Sashimi (10 pcs)', price: '£17.99', desc: 'A perfect mix of salmon and tuna sashimi for seafood lovers.' },
    ],
  },
  {
    title: 'STARTERS',
    items: [
      { name: 'Miso Soup', price: '£4.99', desc: 'A warm and comforting Japanese soup made with miso paste, seaweed, tofu, and green onions, offering a rich umami flavor.' },
      { name: 'Edamame - Plain, Salty, Warm, Spicy', price: '£4.99', desc: 'Steamed young soybeans served in their pods, available plain or seasoned with salt, spice, or warmth for extra flavor.' },
      { name: 'Gyoza - Veg', price: '£7.99', desc: 'Pan-fried Japanese dumplings filled with a delicious mix of vegetables, offering a crispy outside and soft, savory filling.' },
      { name: 'Gyoza - Chicken', price: '£8.99', desc: 'Crispy and juicy Japanese dumplings stuffed with seasoned chicken, pan-seared to perfection and served with dipping sauce.' },
      { name: 'Gyoza - Prawn', price: '£9.99', desc: 'Delicate dumplings filled with succulent prawns, lightly pan-fried for a crispy texture and served with a tasty dip.' },
      { name: 'Prawn Tempura', price: '£9.99', desc: 'Light and crispy battered prawns deep-fried to perfection, served with a flavorful dipping sauce.' },
      { name: 'Chicken Karage', price: '£8.99', desc: 'Japanese-style fried chicken, marinated in a flavorful blend of spices, deep-fried until golden, and served crispy.' },
      { name: 'Vegetable Tempura', price: '£8.99', desc: 'A mix of fresh vegetables coated in a light, crispy tempura batter, deep-fried for a crunchy, delicious bite.' },
      { name: 'Halloumi Sticks and Dip', price: '£6.99', desc: 'Golden-fried halloumi cheese sticks with a crispy exterior and a warm, soft center, served with a tasty dipping sauce.' },
    ],
  },
  {
    title: 'KIDS MEALS',
    items: [
      { name: 'Chicken Steak Burger Meal', price: '£6.99', desc: 'Chicken patty on a soft bun, served with fries and a drink.' },
      { name: 'Cheese Burger Meal', price: '£6.99', desc: 'Beef patty on a soft bun, served with fries and a drink.' },
      { name: 'Chicken Nuggets Meal', price: '£6.99', desc: '4pcs chicken nuggets, served with fries and a drink.' },
      { name: 'Chicken Popcorn Meal', price: '£6.99', desc: '12pcs chicken popcorn, served with fries and drink.' },
    ],
  },
  {
    title: 'DONBURI',
    items: [
      { name: 'Katsu Curry', price: '£17.99', desc: 'Choose from Chicken, Prawn, or Vegetable – coated in panko bread crumbs, served on a rice or noodle base, topped with curry sauce.' },
      { name: 'Teriyaki', price: '£17.99', desc: 'Choose from Chicken, Prawn, or Salmon – grilled with our teriyaki sauce on a rice or noodle base, served with a side of teriyaki sauce.' },
      { name: 'Beef Teppanyaki', price: '£18.99', desc: 'Beef steak marinated in Korean bulgogi sauce, served on a rice or noodle base, with a side of teriyaki sauce.' },
      { name: 'Aubergine Misco', price: '£17.99', desc: 'Tender aubergine brushed with a sweet miso glaze, served on a rice or noodle base.' },
      { name: 'Mixed Avocado Salad', price: '£14.99', desc: 'Avocado served with mixed salad, Japanese wasabi dressing, cherry tomatoes, and sesame seeds.' },
      { name: 'Ramen Noodles', price: '£17.99', desc: 'Choose from Chicken, Beef, or Vegetable – a large bowl of noodles with bean sprouts, bok choy, spring onions, shiitake mushrooms, soy sauce-marinated egg, and fresh chilies, topped with our broth.' },
    ],
  },
  {
    title: 'TACOS',
    items: [
      { name: 'Tacos', price: '£14.99', desc: '3 pieces of soft flour or corn tortillas (GF), filled with your choice of fillings, lettuce, pico de gallo, cheese, and guacamole. Served with a side of sour cream and your choice of salsa. Fillings: Chilli Con Carne, Carne Asada, Pollo Carnitas, Pollo Asado. 3 Bean, Chicken Tikka, Peri Peri Strips' },
    ],
  },
  {
    title: 'NIGIRI',
    items: [
      { name: 'Salmon Nigiri', price: '£4.99', desc: 'Fresh salmon slice over seasoned sushi rice.' },
      { name: 'Salmon Avocado Nigiri', price: '£5.49', desc: 'A combination of fresh salmon and creamy avocado on sushi rice.' },
      { name: 'Tuna Nigiri', price: '£5.99', desc: 'Premium tuna slice carefully placed on sushi rice.' },
      { name: 'Tuna Avocado Nigiri', price: '£5.99', desc: 'Fresh tuna with avocado on top of sushi rice for a rich texture.' },
      { name: 'Prawn Nigiri', price: '£5.99', desc: 'Cooked prawn delicately placed over sushi rice.' },
      { name: 'Avocado Nigiri', price: '£3.99', desc: 'Smooth and creamy avocado slice over sushi rice.' },
      { name: 'Flying Fish Roe Gunkan', price: '£5.99', desc: 'Seaweed-wrapped sushi filled with sushi rice and topped with flying fish roe.' },
      { name: 'Sweet Tofu Nigiri', price: '£3.99', desc: 'Marinated sweet tofu placed over sushi rice, offering a slightly sweet and savory flavor.' },
    ],
  },
  {
    title: 'TEMAKI',
    items: [
      { name: 'Salmon & Avocado Temaki', price: '£7.99', desc: 'Fresh salmon and creamy avocado wrapped in seaweed.' },
      { name: 'Chicken Katsu Temaki', price: '£7.99', desc: 'Crispy chicken katsu with cucumber, wrapped in seaweed.' },
      { name: 'Prawn Katsu Temaki', price: '£7.99', desc: 'Crispy prawn katsu with mixed greens, wrapped in seaweed.' },
      { name: 'Vegetable Temaki', price: '£7.99', desc: 'A mix of fresh vegetables, including avocado and cucumber, wrapped in seaweed.' },
      { name: 'Soft Shell Crab Temaki', price: '£7.99', desc: 'Crispy soft-shell crab with cucumber and spicy mayo, wrapped in seaweed.' },
    ],
  },
  {
    title: 'SIDES',
    items: [
      { name: 'Skin-On Fries', price: '£3.99', desc: 'Crispy, golden fries with the skin on for extra flavor and texture. A perfect side for any meal!' },
      { name: 'Cheesy Saucy Fries', price: '£7.99', desc: 'Loaded with shredded cheese, cheese sauce, crispy onions, and topped with your choice of sauce – Available in 4 Flavors: Buffalo, Spicy Mayo, Garlic Mayo, BBQ Sauce.' },
      { name: 'Chicken Strips', price: '£8.99', desc: 'Choose from SFC, Peri Peri, or Spicy Tikka.' },
      { name: 'Plain Nachos', price: '£9.99', desc: 'Served with your choice of topping, cheese sauce, pico de gallo, guacamole, and jalapeños.' },
      { name: 'Chicken Nachos', price: '£11.99', desc: 'Topped with chicken, your choice of topping, cheese sauce, pico de gallo, guacamole, and jalapeños.' },
      { name: 'Beef Nachos', price: '£12.99', desc: 'Topped with beef, your choice of topping, cheese sauce, pico de gallo, guacamole, and jalapeños.' },
    ],
  },
  {
    title: 'CHIMICHANGA',
    items: [
      { name: 'Chimichanga', price: '£17.99', desc: 'Deep-fried 10-inch flour tortilla filled with your choice of fillings, refried beans, jalapeños, and cheese. Fillings: Chilli Con Carne, Carne Asada, Pollo Carnitas, Pollo Asado, 3 Beans, Chicken Tikka, Peri Peri Strips.' },
    ],
  },
  {
    title: 'BURRITO/RICE BOWL',
    items: [
      { name: 'Burrito/Rice Bowl', price: '£17.99', desc: '(12-inch flour tortilla filled with meat, your choice of beans, fillings, salsa, and extras.) Choose Your Protein: Chili Con Carne, Carne Asada, Pollo Carnitas, Pollo Asado, Chicken Tikka, Peri Peri Strips. Choose Your Rice: Spicy Rice, Lemon Rice. Choose Your Beans: Refried Black Beans, Refried Pinto Beans, Three Beans. Choose Your Salsa: Pico de Gallo, Salsa Rosa, Salsa Verde, Chipotle Salsa, Mango Habanero Salsa. Choose Your Extras: Extra Salsa, Guacamole, Mozzarella Cheese, Grilled Vegetables, Sour Cream.' },
    ],
  },
  {
    title: 'SETMENU',
    items: [
      { name: 'Sakura Duo (Serves 2 People)', price: '£99.00', desc: 'A unique experience from our Japanese kitchen, including: Edamame, 6 Gyoza, 4 Prawn Tempura, 2 Salmon Nigiri, 2 Tuna Nigiri, 2 Prawn Nigiri, 4 Salmon Maki, 4 Tuna Maki, 4 California Rolls, 4 Chicken Katsu Uramaki, 4 Salmon Sashimi, 4 Tuna Sashimi, 8 Dragon Rolls, 6 Volcano Rolls. Complimentary: 2 glasses of house wine (choice of red or white).' },
      { name: 'Kazoku Gozen (Serves 4 People)', price: '£179.00', desc: 'Edamame & Gyoza, Prawn Tempura, 2 Chicken Karaage, Salmon Maki, Tuna Maki, Prawn Maki, 4 Salmon Nigiri, 4 Tuna Nigiri, 4 Prawn Nigiri, 4 Salmon Avocado Uramaki, 4 Chicken Katsu Uramaki, 4 Salmon Sashimi, 4 Tuna Sashimi, 4 Saba Sashimi, 4 Hamachi Sashimi, 4 Sea Bass Sashimi, Rainbow Roll, Volcano Roll. Complimentary: 2 glasses of house wine (choice of red or white).' },
    ],
  },
  {
    title: 'FAJITA',
    items: [
      { name: 'Chicken Fajita', price: '£17.99', desc: 'Tender chicken cooked with red onions, mixed peppers, and fajita seasonings, finished with freshly squeezed lemon. Served with house special salsa for a flavorful kick.' },
      { name: 'Steak Fajita', price: '£17.99', desc: 'Juicy steak strips sautéed with red onions, mixed peppers, and fajita spices, then enhanced with a squeeze of fresh lemon. Comes with house special salsa for extra zest.' },
      { name: 'Jackfruit Fajita', price: '£17.99', desc: 'Pulled jackfruit cooked with red onions, mixed peppers, and bold fajita seasonings, finished with fresh lemon juice. Served with house special salsa for a delicious plant-based option.' },
    ],
  },
];

const FoodMenu = () => {
  return (
    <div className="bg-white text-neutral-800">
      
      <div className="max-w-5xl mx-auto px-4 py-12 max-lg:py-6">
        <h1 className="text-4xl max-lg:text-xl font-bold uppercase text-center mb-4">Food Menu</h1>
        

        {sections.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-xl font-bold max-lg:lg border-b-2 border-orange-500 inline-block mb-6 uppercase tracking-wide">{section.title}</h2>
            <div className="space-y-6">
              {section.items.map((item, idx) => (
                <div key={idx} className="border-b border-neutral-300 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold  max-lg:text-sm text-md">{item.name}</h3>
                    <span className="text-sm text-orange-500 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm max-lg:text-xs text-neutral-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default FoodMenu;