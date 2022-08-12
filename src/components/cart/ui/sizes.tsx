import React from "react";
import Title from "./title";

import styles from "../styles/sizes.module.scss";
import classNames from "classnames";

type SizesProps = {
  sizes: Array<string>;
  size: "sm" | "lg";
};
class SizesBlock extends React.Component<SizesProps, any> {
  render() {
    const { sizes, size } = this.props;
    const classes = classNames(styles.sizeItem, {
      [styles.sm]: size === "sm",
      [styles.lg]: size === "lg",
    });
    return (
      <div className={styles.sizes}>
        <Title text="Size" isBold={false} size="sm" />
        <div className={styles.sizesContainer}>
          {sizes.map((size) => {
            return (
              <div className={classes}>
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
