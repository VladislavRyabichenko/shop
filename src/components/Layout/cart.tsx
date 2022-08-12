import React from "react";
import styles from "./styles/cartStyles.module.scss";

class Cart extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cartIcon}>
          <img src="./images/icons/cart.svg" alt="CART" />
          <div className={styles.cartItemsCounter}>
            <span>3</span>
          </div>
        </div>
        <div className={styles.cart}></div>
      </div>
    );
  }
}

export default Cart;
