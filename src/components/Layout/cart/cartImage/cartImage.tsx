import React from "react";
import styles from "../styles/cartImage.module.scss";
import Slider from "../ui/slider";
import { connect } from "react-redux";
import {
  addItem,
  increment,
  decrement,
} from "../../../../app/slices/cartSlice";

type CartImageProps = {
  images: Array<string>;
  count: number;
  id: string;
  dispatch: Function;
};

const newItem = {
  name: "Test 3 Name",
  category: "Test 2 Category",
  images: [
    "https://cdn.shopify.com/s/files/1/0033/7854/4729/products/sweaterno9.1_e85dfa7d-4050-4729-baa8-24eb27ac9b9a_1080x.jpg?v=1629379427",
    "https://cdn.shopify.com/s/files/1/0033/7854/4729/products/sweaterno9.1_e85dfa7d-4050-4729-baa8-24eb27ac9b9a_1080x.jpg?v=1629379427",
    "https://cdn.shopify.com/s/files/1/0033/7854/4729/products/sweaterno9.1_e85dfa7d-4050-4729-baa8-24eb27ac9b9a_1080x.jpg?v=1629379427",
  ],
  sizes: ["XS", "S", "M", "L"],
  price: 50,
  currency: "$",
  colors: ["#e66465", "#0000007F", "#f6b73c"],
};

class CartImage extends React.Component<CartImageProps, any> {
  render() {
    const { images } = this.props;
    const { dispatch } = this.props;
    const { count, id } = this.props;
    // this.props.dispatch()

    return (
      <div className={styles.imagePreviewContainer}>
        <div className={styles.counter}>
          <button
            onClick={() => {
              dispatch(increment(id));
              // dispatch(addItem(newItem));
            }}
          >
            +
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              dispatch(decrement(id));
              // dispatch(addItem(newItem));
            }}
          >
            -
          </button>
        </div>

        <Slider images={images} />
      </div>
    );
  }
}

export default connect()(CartImage);

// export default CartImage;
