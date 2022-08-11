import React from "react";
import styles from "./styles/cartItem.module.scss";
import InfoBlock from "./ui/infoBlock";
import CartImage from "./cartImage/cartImage";

type CartItemType = {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
};
type cartItemProps = {
  item: CartItemType;
  counter: number;
};

class CartItem extends React.Component<cartItemProps, {}> {
  render() {
    const { item, counter } = this.props;
    console.log("items", item);

    return (
      <div className={styles.cartItemContainer}>
        <div className={styles.infoBlockWrapper}>
          <InfoBlock
            name={item.name}
            category={item.category}
            images={item.images}
            sizes={item.sizes}
            price={item.price * counter}
            currency={item.currency}
            colors={item.colors}
          />
        </div>
        <div className={styles.imageBlockWrapper}>
          <CartImage images={item.images} count={counter} id={item.name} />
        </div>
      </div>
    );
  }
}

export default CartItem;
