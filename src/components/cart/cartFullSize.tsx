import React from "react";
import styles from "./styles/fullSizeCart.module.scss";
import Title from "./ui/title";
import CartItem from "./cartItem";
import { connect } from "react-redux";
import CartSummary from "./ui/cartSummary";
import { CartProps } from "./types/types";

class Cart extends React.Component<CartProps, any> {
  render() {
    const { items, count, total } = this.props;
    return (
      <div className={styles.cartContainer}>
        <div className={styles.titleContainer}>
          <Title text="CART" isBold={true} size="lg" />
        </div>

        <div className={styles.line}></div>

        {items.map((item1, idx): any => {
          return (
            <>
              <div className={styles.cartItemWrapper}>
                <CartItem item={item1.item} counter={item1.count} size="lg" />
              </div>
              <div className={styles.line}></div>
            </>
          );
        })}

        <CartSummary count={count} total={total} />

        <div className={styles.buttonContainer}>
          <button>ORDER</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count: state.cart.count,
    items: state.cart.items,
    total: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
