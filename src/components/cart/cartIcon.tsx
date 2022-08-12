import React from "react";
import styles from "./styles/cartItem.module.scss";
import CartPreview from "./cartPreview";

type CartIconState = {
  isOpen: boolean;
};

class CartIcon extends React.Component<{}, CartIconState> {
  constructor() {
    super({});
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <div
          className={styles.cartIcon}
          onClick={(e) => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
          onBlur={() => {
            console.log("blur");
          }}
        >
          <img src="./images/icons/cart.svg" alt="CART" />
          <div className={styles.cartItemsCounter}>
            <span>3</span>
          </div>
        </div>
        {this.state.isOpen && <CartPreview />}
      </div>
    );
  }
}

export default CartIcon;
