import React from "react";
import styles from "../styles/colors.module.scss";
import Title from "./title";

type ColorsBlockProps = {
  colors: Array<string>;
};
class InfoBlock extends React.Component<ColorsBlockProps, any> {
  render() {
    const { colors } = this.props;
    return (
      <div className={styles.colors}>
        <Title text="Color" isBold={false} />

        <div className={styles.colorsContainer}>
          {colors.map((color, idx) => {
            console.log(color);
            return (
              <input
                key={idx}
                type="color"
                className={styles.inputColor}
                value={color}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default InfoBlock;
