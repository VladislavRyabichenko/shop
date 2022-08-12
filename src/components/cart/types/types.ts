export interface CartItemType {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
  count: number;
}

export type CartItemsArray = {
  item: CartItemType;
  count: number;
};

export type CartProps = {
  items: Array<CartItemsArray>;
  count: number;
  total: number;
};

export type CartItemProps = {
  item: CartItemType;
  counter: number;
  size: "sm" | "lg";
};
