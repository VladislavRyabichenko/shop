import React, { Component } from "react";
import styles from "./styles/cartPreview.module.scss";
import { data } from "../../../data/data";
import CartItem from "./cartItem";

class CartPreview extends Component<{}, {}> {
  render() {
    return (
      <div className={styles.cartPreviewWrapper}>
        <div className={styles.cartPreviewContainer}>
          {data.map((item, idx): any => {
            return (
              <div className={styles.cartItemWrapper}>
                <CartItem
                  key={idx}
                  name={item.name}
                  category={item.category}
                  images={item.images}
                  sizes={item.sizes}
                  price={item.price}
                  currency={item.currency}
                  colors={item.colors}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CartPreview;
