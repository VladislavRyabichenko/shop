import React from "react";
import styles from "./styles/cartItem.module.scss";
import Title from "./ui/title";
import InfoBlock from "./ui/infoBlock";
import CartImage from "./cartImage/cartImage";
type cartItemProps = {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
};

class CartItem extends React.Component<cartItemProps, {}> {
  render() {
    const { name, category, images, sizes, price, currency, colors } =
      this.props;
    return (
      <div className={styles.cartItemContainer}>
        <div className={styles.infoBlockWrapper}>
          <InfoBlock
            name={name}
            category={category}
            images={images}
            sizes={sizes}
            price={price}
            currency={currency}
            colors={colors}
          />
        </div>
        <div className={styles.imageBlockWrapper}>
          <CartImage images={images} />
        </div>
      </div>
    );
  }
}

export default CartItem;
