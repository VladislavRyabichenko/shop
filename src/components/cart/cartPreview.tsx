import React, { Component } from "react";
import styles from "./styles/cartPreview.module.scss";
import CartItem from "./cartItem";
import { connect } from "react-redux";
import Title from "./ui/title";
import { Link } from "react-router-dom";
import { CartProps } from "./types/types";

class CartPreview extends Component<CartProps, {}> {
  render() {
    const { items, count, total } = this.props;

    return (
      <div className={styles.cartPreviewWrapper}>
        <div className={styles.cartPreviewContainer}>
          <div className={styles.cartTitle}>
            <Title text="My bag" isBold={true} size="sm" />
            <span>{count} items</span>
          </div>

          {items.map((item1, idx): any => {
            return (
              <div className={styles.cartItemWrapper}>
                <CartItem item={item1.item} counter={item1.count} size="sm" />
              </div>
            );
          })}

          <div className={styles.totalSumContainer}>
            <span>Total</span>
            <span>{total}</span>
          </div>

          <div className={styles.btnContainer}>
            <Link to="cart">
              <button className={styles.btnView}>VIEW BAG</button>
            </Link>
            <Link to="cart">
              <button className={styles.btnCheckout}>CHECK OUT</button>
            </Link>
          </div>
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

export default connect(mapStateToProps)(CartPreview);
