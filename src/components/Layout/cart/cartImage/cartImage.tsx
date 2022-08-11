import React from "react";
import styles from "../styles/cartImage.module.scss";
import Slider from "../ui/slider";

type CartImageProps = {
  images: Array<string>;
};
class CartImage extends React.Component<CartImageProps, any> {
  render() {
    const { images } = this.props;
    return (
      <div className={styles.imagePreviewContainer}>
        <div className={styles.counter}>
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>

        <Slider images={images} />
      </div>
    );
  }
}

export default CartImage;
