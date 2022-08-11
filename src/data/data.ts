type ItemType = {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
};

export const data: Array<ItemType> = [
  {
    name: "Test Name",
    category: "Test Category",
    images: [
      "https://cdn.shopify.com/s/files/1/0033/7854/4729/products/sweaterno9.1_e85dfa7d-4050-4729-baa8-24eb27ac9b9a_1080x.jpg?v=1629379427",
      "https://cdn.shopify.com/s/files/1/0033/7854/4729/products/sweaterno9.1_e85dfa7d-4050-4729-baa8-24eb27ac9b9a_1080x.jpg?v=1629379427",
      "https://cdn.shopify.com/s/files/1/0033/7854/4729/products/sweaterno9.1_e85dfa7d-4050-4729-baa8-24eb27ac9b9a_1080x.jpg?v=1629379427",
    ],
    sizes: ["XS", "S", "M", "L"],
    price: 120,
    currency: "$",
    colors: ["#e66465", "#0000007F", "#f6b73c"],
  },
];
