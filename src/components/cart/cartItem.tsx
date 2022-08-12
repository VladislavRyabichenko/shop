import React from "react";
import styles from "./styles/cartItem.module.scss";
import InfoBlock from "./ui/infoBlock";
import CartImage from "./cartImage/cartImage";

import { CartItemProps } from "./types/types";

import classNames from "classnames";

class CartItem extends React.Component<CartItemProps, {}> {
  render() {
    const { item, counter, size } = this.props;
    console.log("items", item);

    const classes = classNames(styles.cartItemContainer, {
      [styles.sm]: size === "sm",
      [styles.lg]: size === "lg",
    });

    return (
      <div className={classes}>
        <div className={styles.infoBlockWrapper}>
          <InfoBlock
            name={item.name}
            category={item.category}
            images={item.images}
            sizes={item.sizes}
            price={item.price * counter}
            currency={item.currency}
            colors={item.colors}
            size={size}
          />
        </div>
        <div className={styles.imageBlockWrapper}>
          <CartImage
            images={item.images}
            count={counter}
            id={item.name}
            size={size}
          />
        </div>
      </div>
    );
  }
}

export default CartItem;
