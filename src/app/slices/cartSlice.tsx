import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { data } from "../../data/data";

type CartItemType = {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
};

type CartItemsArray = {
  item: CartItemType;
  count: number;
};

export interface CartState {
  items: Array<CartItemsArray>;
  count: number;
  totalPrice: number;
}

const countFullPrice = (items: Array<CartItemType>): number => {
  if (items.length < 1) {
    return 0;
  }
  let sum = 0;
  items.forEach((item) => {
    sum += item.price;
  });
  return sum;
};

const initialState: CartState = {
  items: data.map((elem) => {
    return { item: elem, count: 1 };
  }),
  count: data.length,
  totalPrice: countFullPrice(data),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
    increment: (state, action) => {
      const target = state.items.findIndex(
        (elem) => elem.item.name === action.payload
      );
      state.items[target].count += 1;
      state.count += 1;
    },
    decrement: (state, action) => {
      const target = state.items.findIndex(
        (elem) => elem.item.name === action.payload
      );
      if (state.items[target].count === 1) {
        state.items.splice(target, 1);
      } else {
        state.items[target].count -= 1;
      }
      state.count -= 1;
    },
  },
});

export const { addItem, removeItem, increment, decrement } = cartSlice.actions;

export const selectItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
