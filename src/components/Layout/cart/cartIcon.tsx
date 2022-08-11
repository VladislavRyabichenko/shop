import React from "react";
import styles from "./styles/cartItem.module.scss";
import CartPreview from "./cartPreview";

class CartIcon extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cartIcon}>
          <img src="./images/icons/cart.svg" alt="CART" />
          <div className={styles.cartItemsCounter}>
            <span>3</span>
          </div>
        </div>
        <CartPreview />
      </div>
    );
  }
}

export default CartIcon;
