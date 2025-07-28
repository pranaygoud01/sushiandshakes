import React from 'react';

const sections = [
  {
    title: 'MOCKTAILS',
    items: [
      { name: 'Blue Lagoon', price: '£7.99', desc: 'Featuring a blend of lemonade and blue curacao syrup, offering a taste of tropical paradise.' },
      { name: 'Sunset Mocktail', price: '£7.99', desc: 'Tropical juices and grenadine, capturing the essence of a beautiful sunset.' },
      { name: 'Sex on the Beach', price: '£7.99', desc: 'Blend of cranberry, orange, and peach flavors, perfect for a taste of summer.' },
      { name: 'Virgin Pina Colada', price: '£7.99', desc: 'Fresh pineapple juice and coconut cream, delivering a taste of paradise in every sip.' },
      { name: 'Strawberry Daiquiri', price: '£7.99', desc: 'Sweet tang of fresh strawberries, balanced with lime juice and hint of sweetness.' },
      { name: 'Mango Margarita', price: '£7.99', desc: 'Blending fresh mango puree with lime juice and a touch of sweetness with a hint of zest.' },
    ],
  },
  {
    title: 'BEERS',
    items: [
      { name: 'Asahi 0.0% 330ml', price: '£3.49', desc: 'A crisp and refreshing alcohol-free beer with the signature dry taste of Asahi, perfect for those who want the flavor without the alcohol.' },
      { name: 'Asahi 5.0% 330ml', price: '£4.49', desc: 'A smooth and dry Japanese lager with a clean, crisp finish, offering a balanced bitterness and light malt flavor.' },
      { name: 'Sapporo 4.7% 330ml', price: '£4.49', desc: 'A premium Japanese lager known for its rich maltiness, mild hop bitterness, and smooth, refreshing taste.' },
      { name: 'Kirin 4.6% 330ml', price: '£4.49', desc: 'A light-bodied Japanese beer with a delicate balance of malt sweetness and subtle hop bitterness for a smooth finish.' },
      { name: 'Vectoria 5.9% 355ml', price: '£4.49', desc: 'A full-bodied Mexican lager with a rich amber color, smooth malt flavors, and a crisp, slightly sweet finish.' },
      { name: 'Modello 4.5% 355ml', price: '£4.49', desc: 'A classic Mexican pilsner-style lager with a light golden color, crisp malt taste, and a refreshing, smooth finish.' },
      { name: 'Fusil 5.0% 355ml', price: '£4.49', desc: 'A well-balanced beer with a moderate alcohol content, offering a blend of malt sweetness and mild hop bitterness.' },
      { name: 'Guinness 4.1% 440ml', price: '£4.49', desc: 'A world-famous Irish stout with deep roasted malt flavors, notes of coffee and chocolate, and a smooth, creamy texture.' },
      { name: 'Budwiser 4.5% 440ml', price: '£4.49', desc: 'A classic American lager with a crisp, clean taste, subtle malt sweetness, and a refreshing, smooth finish.' },
    ],
  },
  {
    title: 'JAPANESE RAMUNE',
    items: [
      { name: 'Original 200ml', price: '£4.99', desc: 'A classic Japanese soda with a refreshing lemon-lime flavor, famous for its unique glass bottle and marble seal.' },
      { name: 'Watermelon 200ml', price: '£4.99', desc: 'A sweet and juicy watermelon-flavored Japanese soda, offering a crisp and refreshing summer-like taste.' },
      { name: 'Orange 200ml', price: '£4.99', desc: 'A tangy and fizzy orange soda with a bright citrusy flavor, delivering a perfect balance of sweetness and zest.' },
      { name: 'Melon 200ml', price: '£4.99', desc: 'A smooth and fragrant Japanese soda with the sweet and refreshing taste of ripe melons.' },
      { name: 'Yuzu 200ml', price: '£4.99', desc: 'A unique citrus-flavored soda featuring the aromatic and slightly tart taste of Japanese yuzu fruit.' },
      { name: 'Lychee 200ml', price: '£4.99', desc: 'A delicately sweet and floral soda with the exotic and juicy flavor of fresh lychee.' },
      { name: 'Strawberry 200ml', price: '£4.99', desc: 'A bubbly and fruity soda with a deliciously sweet and slightly tart strawberry flavor.' },
    ],
  },
  {
    title: 'COCKTAILS',
    items: [
      { name: 'Mojito', price: '£9.99', desc: 'White Rum, Lime Juice, Simple Syrup, Sprite or Soda, Mint garnish.' },
      { name: 'Pina Colada', price: '£9.99', desc: 'White Rum, Coconut Cream, Pineapple Juice, Topped with Soda.' },
      { name: 'Daiquiri', price: '£9.99', desc: 'White Rum, Lime Juice, Simple Syrup, Topped with Soda.' },
      { name: 'Mai Tai', price: '£9.99', desc: 'White Rum, Dark Rum, Orange Syrup, Lime Juice, Simple Syrup, Mint and Lime garnish.' },
      { name: 'Rum Punch', price: '£9.99', desc: 'Dark Rum, Pineapple Juice, Orange Juice, Lime Juice, Grenadine, Cherry & Orange to garnish.' },
      { name: 'Cuba Libre', price: '£9.99', desc: 'White Rum, Lime Juice, Topped with Cola, Lime to garnish.' },
      { name: "Dark 'N' Stormy", price: '£9.99', desc: 'Dark Rum, Ginger Beer, Lime Juice, Lime to garnish.' },
      { name: 'Porn Star Martini', price: '£9.99', desc: 'Vanilla Vodka, Passoa Passion Fruit Liqueur, Simple Syrup, Lime garnish, shot of prosecco on the side.' },
    ],
  },
  {
    title: 'MEXICAN JARRITOS',
    items: [
      { name: 'Mango 370ml', price: '£4.99', desc: 'A sweet and tropical soda bursting with juicy mango flavor, offering a smooth and refreshing taste.' },
      { name: 'Lime 370ml', price: '£4.99', desc: 'A crisp and zesty lime-flavored soda with the perfect balance of tartness and sweetness.' },
      { name: 'Mandarin 370ml', price: '£4.99', desc: 'A bright and citrusy soda with the bold, sweet, and tangy taste of ripe mandarins.' },
      { name: 'Grapefruit 370ml', price: '£4.99', desc: 'A refreshing and slightly tart soda with a bold grapefruit flavor and a crisp, fizzy finish.' },
      { name: 'Guava 370ml', price: '£4.99', desc: 'A fragrant and fruity soda with the tropical sweetness of ripe guava, offering a smooth and exotic taste.' },
      { name: 'Pineapple 370ml', price: '£4.99', desc: 'A deliciously sweet and tangy soda infused with the refreshing tropical flavor of pineapple.' },
      { name: 'Mexican Cola 370ml', price: '£4.99', desc: 'A classic cola with a hint of cane sugar sweetness, delivering a smooth, rich, and slightly spiced taste.' },
    ],
  },
  {
    title: 'MEZCAL',
    items: [
      { name: 'Ojo de Dios Joven 25ml', price: '£4.49', desc: 'A smooth and smoky joven mezcal with rich agave flavors and a hint of earthiness, perfect for sipping or cocktails.' },
      { name: 'Ojo de Dios Hibiscus 25ml', price: '£4.49', desc: 'A floral and aromatic mezcal infused with hibiscus, offering a balance of smoky, tart, and slightly sweet notes.' },
      { name: 'Ojo de Dios Cafre 25ml', price: '£4.49', desc: 'A bold mezcal with rich coffee infusion, blending smoky agave with deep roasted coffee flavors for a unique taste.' },
      { name: 'Leyenda Duranga 25ml', price: '£4.49', desc: 'A premium artisanal mezcal from Durango, featuring a smooth yet complex smoky profile with herbal and mineral undertones.' },
    ],
  },
  {
    title: 'SOFT DRINKS',
    items: [
      { name: 'Coke |6OZ', price: '£3.99', desc: 'The classic cola with a bold, refreshing taste and a perfect balance of sweetness and fizz.' },
      { name: 'Diet Coke |6OZ', price: '£3.99', desc: 'A sugar-free, crisp cola with the signature Coca-Cola flavor and a light, refreshing finish.' },
      { name: 'Fanta |6OZ', price: '£3.99', desc: 'A bright and bubbly orange soda with a sweet, citrusy taste and a refreshing fizz.' },
      { name: 'Sprite |6OZ', price: '£3.99', desc: 'A crisp and lemon-lime flavored soda with a clean, refreshing, and bubbly taste.' },
      { name: 'Coke Zero |6OZ', price: '£3.99', desc: 'A zero-sugar cola with the bold taste of classic Coke and a smooth, fizzy finish.' },
      { name: 'Spring Water', price: '£3.99', desc: 'Pure and refreshing natural spring water, perfect for staying hydrated.' },
      { name: 'Sparkling Water', price: '£3.99', desc: 'A crisp and bubbly water with a light, refreshing taste, great on its own or as a mixer.' },
    ],
  },
  {
    title: 'MILKSHAKES',
    items: [
      { name: 'Chocolate Milkshake', price: '£6.99', desc: 'A chocolate milkshake is a creamy, sweet drink made by blending chocolate ice cream, milk, and chocolate syrup. It\'s a delicious treat, often topped with whipped cream and a cherry for extra indulgence.' },
      { name: 'Kinder Bueno Milkshake', price: '£6.99', desc: 'A rich and creamy milkshake infused with the hazelnut and chocolate flavors of Kinder Bueno, topped with whipped cream and crushed chocolate pieces.' },
      { name: 'Snickers Milkshake', price: '£6.99', desc: 'A delicious blend of chocolate, caramel, and peanut flavors from Snickers, creating a thick and indulgent treat.' },
      { name: 'Oreo Milkshake', price: '£6.99', desc: 'A classic cookies-and-cream delight, blending Oreos with vanilla ice cream for a smooth and crunchy milkshake.' },
      { name: 'Ferrero Rocher Milkshake', price: '£6.99', desc: 'A luxurious chocolate-hazelnut milkshake with the rich, nutty taste of Ferrero Rocher and a hint of Nutella.' },
      { name: 'M&M Milkshake', price: '£6.99', desc: 'A colorful and fun milkshake packed with crunchy M&M’s, creating a sweet and chocolatey explosion in every sip.' },
      { name: 'Strawberry Milkshake', price: '£6.99', desc: 'A refreshing and fruity milkshake made with real strawberries, offering a naturally sweet and creamy taste.' },
      { name: 'Vanilla Milkshake', price: '£6.99', desc: 'A smooth and classic milkshake with the pure essence of vanilla, perfect for a simple yet satisfying treat.' },
    ],
  },
  {
    title: 'TEQUILA',
    items: [
      { name: 'Tico Blanco 25ml', price: '£4.49', desc: 'A smooth and crisp blanco tequila with fresh agave flavors, subtle citrus notes, and a clean finish.' },
      { name: 'Patron Silver 25ml', price: '£4.49', desc: 'A premium handcrafted tequila with a fresh, smooth taste, featuring light citrus and vanilla undertones.' },
      { name: 'Don Julio 25ml', price: '£4.49', desc: 'A refined and silky blanco tequila with sweet agave notes, hints of citrus, and a crisp, light finish.' },
      { name: 'Ei Rayo Blanco 25ml', price: '£4.49', desc: 'A modern tequila with vibrant herbal and peppery notes, crafted for a smooth, refreshing experience.' },
      { name: 'Vivir Blanco 25ml', price: '£4.49', desc: 'A bold yet smooth tequila with earthy agave flavors, complemented by hints of vanilla and black pepper.' },
      { name: 'Cantinero Blanco 25ml', price: '£4.49', desc: 'A traditionally crafted tequila with crisp agave notes, a touch of spice, and a clean, fresh finish.' },
      { name: 'Catrina Blanco 25ml', price: '£4.49', desc: 'A well-balanced blanco tequila with floral and fruity aromas, delivering a smooth and slightly sweet taste.' },
      { name: 'Cazcabel Coconut 25ml', price: '£4.49', desc: 'A unique tequila infused with natural coconut flavors, offering a tropical, smooth, and slightly sweet finish.' },
    ],
  },
  {
    title: 'SPIRITS',
    items: [
      { name: 'Vodka 25ml', price: '£4.49', desc: 'A smooth and versatile spirit with a clean, crisp taste, perfect for mixing or enjoying straight.' },
      { name: 'Gin 25ml', price: '£4.49', desc: 'A refreshing botanical spirit with juniper-forward flavors, ideal for classic cocktails like gin & tonic.' },
      { name: 'Rum 25ml', price: '£4.49', desc: 'A rich and slightly sweet spirit, ranging from light and smooth to dark and full-bodied, great for cocktails or sipping.' },
      { name: 'Whiskey & Liquors 25ml', price: '£4.49', desc: 'A selection of premium whiskeys and flavorful liquors, offering a variety of smooth, smoky, and sweet notes.' },
    ],
  },
  {
    title: 'SPARKLING SAKE',
    items: [
      { name: 'Ozeki Hana Awaka Peach Sparkling Sake 7% 250ml', price: '£9.99', desc: 'A lightly sparkling sake with a delicate sweetness and the juicy, fragrant taste of ripe peaches.' },
      { name: 'Ozeki Hana Awaka Yuju Sparkling Sake 5% 250ml', price: '£9.99', desc: 'A refreshing and bubbly sake infused with bright citrusy yuzu flavors, offering a crisp and zesty finish.' },
      { name: 'Ozeki Hana Awaka Sparkling Flower Sake 6.8% 250ml', price: '£9.99', desc: 'A floral and effervescent sake with delicate sweetness, subtle rice notes, and a smooth, refreshing sparkle.' },
      { name: 'Choryu Sawasawa Junmai Sparkling 8.5% 250ml', price: '£9.99', desc: 'A premium junmai sparkling sake with a perfect balance of natural sweetness, fine bubbles, and a smooth, crisp finish.' },
    ],
  },
  {
    title: 'WINES',
    items: [
      { name: 'White Wine 175ml', price: '£4.99', desc: 'Pinot Grigio, Sauvignon Blanc, Chardonnay.' },
      { name: 'White Wine 250ml', price: '£8.99', desc: 'Pinot Grigio, Sauvignon Blanc, Chardonnay.' },
      { name: 'White Wine Bottle', price: '£19.99', desc: 'Pinot Grigio, Sauvignon Blanc, Chardonnay.' },
      { name: 'Rose Wine 175ml', price: '£4.99', desc: 'A delightful blend of Pinot Blush Rose and White Zinfandel, offering a refreshing and fruity taste.' },
      { name: 'Rose Wine 250ml', price: '£8.99', desc: 'Pinot Blush Rose, White Zinfandel.' },
      { name: 'Rose Wine Bottle', price: '£19.99', desc: 'Pinot Blush Rose, White Zinfandel.' },
      { name: 'Red Wine 175ml', price: '£4.99', desc: 'Pinot Noir, Shiraz, Cabernet Sauvignon, Merlot.' },
      { name: 'Red Wine 250ml', price: '£8.99', desc: 'Pinot Noir, Shiraz, Cabernet Sauvignon, Merlot.' },
      { name: 'Red Wine Bottle', price: '£19.99', desc: 'Pinot Noir, Shiraz, Cabernet Sauvignon, Merlot.' },
      { name: 'Choya Original Plum Wine 175ml', price: '£7.99', desc: 'A rich and fruity Japanese plum wine with a perfect balance of sweetness and tartness.' },
      { name: 'Nakajima Shiroku Yujushu 175ml', price: '£20.00', desc: 'A premium citrus-infused sake with bright yuzu flavors and a refreshing sweetness.' },
      { name: 'Hakutsuru Umeshu 180ml', price: '£7.99', desc: 'A light and sweet umeshu plum wine with a delicate fruity aroma and a mellow taste.' },
    ],
  },
  {
    title: 'SAKE',
    items: [
      { name: 'Ozeki Junmai 90ml', price: '£7.99', desc: 'OZEKI JUNMAI is a traditional Junmai sake with a smooth, full-bodied taste and rich umami flavor. It pairs well with sushi, grilled meats, and Japanese cuisine, enjoyed warm or chilled.' },
      { name: 'Ozeki Junmai 270ml', price: '£19.99', desc: 'OZEKI JUNMAI is a traditional Junmai sake with a smooth, full-bodied taste and rich umami flavor. It pairs well with sushi, grilled meats, and Japanese cuisine, enjoyed warm or chilled.' },
      { name: 'Ippongi Denshin Yuki Junmai Ginjo 15.9% 720ml 90ml', price: '£10.99', desc: 'OZEKI JUNMAI is a traditional Junmai sake with a smooth, full-bodied taste and rich umami flavor. It pairs well with sushi, grilled meats, and Japanese cuisine, enjoyed warm or chilled.' },
    ],
  },
  {
    title: 'MOJITOS',
    items: [
      { name: 'Classic Mojito', price: '£7.49', desc: 'Mint & Lime topped with Sprite.' },
      { name: 'Passion Fruit Mojito', price: '£7.49', desc: 'Passion fruit syrup, pineapple juice, lime, Sprite.' },
      { name: 'Strawberry Mojito', price: '£7.49', desc: 'Lime, Strawberry & Mint, Strawberry syrup, Sprite, Strawberry to garnish.' },
    ],
  },
];

const DrinksMenu = () => {
  return (
    <div className="bg-white text-neutral-800">
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Drinks Menu</h1>
        

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

export default DrinksMenu;