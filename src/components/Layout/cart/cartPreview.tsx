import React, { Component } from "react";
import styles from "./styles/cartPreview.module.scss";
import CartItem from "./cartItem";
import { connect } from "react-redux";
import Title from "./ui/title";

type CartItemType = {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
  count: number;
};

type CartItemsArray = {
  item: CartItemType;
  count: number;
};

type CartPreviewProps = {
  items: Array<CartItemsArray>;
  count: number;
};

class CartPreview extends Component<CartPreviewProps, {}> {
  render() {
    const { items, count } = this.props;

    return (
      <div className={styles.cartPreviewWrapper}>
        <div className={styles.cartPreviewContainer}>
          <div className={styles.cartTitle}>
            <Title text="My bag" isBold={true} />
            <span>{count} items</span>
          </div>
          {items.map((item1, idx): any => {
            return (
              <div className={styles.cartItemWrapper}>
                <CartItem item={item1.item} counter={item1.count} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count: state.cart.count,
    items: state.cart.items,
  };
};

export default connect(mapStateToProps)(CartPreview);
