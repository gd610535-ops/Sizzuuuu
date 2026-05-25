export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  chefSpecial: boolean;
  category: string;
};

export const MENU_CATEGORIES = [
  "Starters",
  "Rolls",
  "Noodles & Momos",
  "Main Course",
  "Sides & Sweets"
];

export const MENU_ITEMS: MenuItem[] = [
  { id: "1", name: "Cheese Paneer Pav Bhaji", description: "Creamy buttery bhaji loaded with rich cheese and spicy paneer flavors.", price: 324, isVeg: true, chefSpecial: true, category: "Starters" },
  { id: "2", name: "Chole Bhature", description: "Fluffy bhature served with spicy Punjabi-style chole and fresh onions.", price: 162, isVeg: true, chefSpecial: true, category: "Starters" },
  { id: "3", name: "Puri Sabji", description: "Golden crispy puris paired with comforting homestyle potato curry.", price: 126, isVeg: true, chefSpecial: false, category: "Starters" },
  { id: "4", name: "Chaap Roll", description: "Smoky chaap wrapped in soft rumali bread with flavorful sauces.", price: 216, isVeg: true, chefSpecial: false, category: "Rolls" },
  { id: "5", name: "Malai Chaap Roll", description: "Creamy grilled chaap infused with rich malai spices and smoky aroma.", price: 270, isVeg: true, chefSpecial: true, category: "Rolls" },
  { id: "6", name: "Malai Paneer Chaap Roll", description: "A luxurious blend of soft paneer, creamy chaap, and irresistible flavors.", price: 306, isVeg: true, chefSpecial: true, category: "Rolls" },
  { id: "7", name: "Chilli Garlic Noodles", description: "Fiery noodles tossed with garlic, veggies, and bold Indo-Chinese spices.", price: 162, isVeg: true, chefSpecial: true, category: "Noodles & Momos" },
  { id: "8", name: "Hakka Noodles", description: "Classic street-style noodles packed with crunchy vegetables and sauces.", price: 180, isVeg: true, chefSpecial: false, category: "Noodles & Momos" },
  { id: "9", name: "Paneer Fry Momos", description: "Crispy fried momos stuffed with spicy paneer and aromatic seasonings.", price: 108, isVeg: true, chefSpecial: false, category: "Noodles & Momos" },
  { id: "10", name: "Paneer Peri Peri Momos", description: "Juicy paneer momos coated in smoky peri peri seasoning for a spicy kick.", price: 130, isVeg: true, chefSpecial: true, category: "Noodles & Momos" },
  { id: "11", name: "Aloo Jeera", description: "Simple yet flavorful potatoes tossed with cumin and Indian spices.", price: 104, isVeg: true, chefSpecial: false, category: "Main Course" },
  { id: "12", name: "Chana Masala", description: "Rich and hearty chickpea curry cooked in authentic Punjabi gravy.", price: 180, isVeg: true, chefSpecial: false, category: "Main Course" },
  { id: "13", name: "Dum Aloo", description: "Soft potatoes slow-cooked in creamy spicy North Indian masala.", price: 162, isVeg: true, chefSpecial: true, category: "Main Course" },
  { id: "14", name: "Matar Paneer", description: "Fresh paneer cubes and green peas simmered in rich tomato gravy.", price: 195, isVeg: true, chefSpecial: true, category: "Main Course" },
  { id: "15", name: "Mushroom Do Pyaza", description: "Juicy mushrooms cooked with caramelized onions and aromatic spices.", price: 182, isVeg: true, chefSpecial: false, category: "Main Course" },
  { id: "16", name: "Mix Raita", description: "Refreshing yogurt blended with fresh vegetables and roasted spices.", price: 130, isVeg: true, chefSpecial: false, category: "Sides & Sweets" },
  { id: "17", name: "Gulab Jamun", description: "Soft melt-in-mouth dumplings soaked in warm saffron sugar syrup.", price: 54, isVeg: true, chefSpecial: true, category: "Sides & Sweets" },
];
