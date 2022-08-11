import React from "react";
import styles from "../styles/title.module.scss";

type TitleProps = {
  text: string;
  isBold: boolean;
};

class Title extends React.Component<TitleProps, any> {
  render() {
    const { text, isBold } = this.props;
    return (
      <div className={styles.titleContainer}>
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
