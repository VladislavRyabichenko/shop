import React from "react";
import styles from "../styles/colors.module.scss";
import Title from "./title";
import classNames from "classnames";
import sizes from "./sizes";

type ColorsBlockProps = {
  colors: Array<string>;
  size: "sm" | "lg";
};
class Colors extends React.Component<ColorsBlockProps, any> {
  render() {
    const { colors, size } = this.props;

    const classes = classNames(
      styles.inputColor,
      {
        [styles.sm]: size === "sm",
      },
      {
        [styles.lg]: size === "lg",
      }
    );
    return (
      <div className={styles.colors}>
        <Title text="COLOR" isBold={false} size="sm" />

        <div className={styles.colorsContainer}>
          {colors.map((color, idx) => {
            console.log(color);
            return (
              <input key={idx} type="color" className={classes} value={color} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Colors;
