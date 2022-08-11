import React from "react";
import Title from "./title";

import styles from "../styles/sizes.module.scss";

type SizesProps = {
  sizes: Array<string>;
};
class SizesBlock extends React.Component<SizesProps, any> {
  render() {
    const { sizes } = this.props;
    return (
      <div className={styles.sizes}>
        <Title text="Size" isBold={false} />
        <div className={styles.sizesContainer}>
          {sizes.map((size) => {
            return (
              <div className={styles.sizeItem}>
                <span>{size}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SizesBlock;
