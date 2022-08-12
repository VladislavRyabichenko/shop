import React from "react";
import styles from "./styles/pages.module.scss";
import Cart from "../components/cart/cartFullSize";

class CartPage extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.cartWrapper}>
        <Cart />
      </div>
    );
  }
}

export default CartPage;
