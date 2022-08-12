import React from "react";
import styles from "../styles/title.module.scss";
import classNames from "classnames";

type TitleProps = {
  text: string;
  isBold: boolean;
  size: "sm" | "md" | "lg";
};

class Title extends React.Component<TitleProps, any> {
  render() {
    const { text, isBold, size } = this.props;

    const classes = classNames(styles.titleContainer, {
      [styles.sm]: size === "sm",
      [styles.lg]: size === "lg",
      [styles.md]: size === "md",
    });
    return (
      <div className={classes}>
        <span
          style={isBold ? { fontWeight: "bold" } : { fontWeight: "normal" }}
          className={styles.title}
        >
          {text}
        </span>
      </div>
    );
  }
}

export default Title;
