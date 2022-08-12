import React from "react";
import styles from "../styles/infoBlock.module.scss";
import Title from "./title";
import SizesBlock from "./sizes";
import Colors from "./colors";

type InfoBlockProps = {
  name: string;
  category: string;
  images: Array<string>;
  sizes: Array<string>;
  price: number;
  currency: string;
  colors: Array<string>;
  size: "sm" | "lg";
};
class InfoBlock extends React.Component<InfoBlockProps, any> {
  render() {
    const { name, category, sizes, price, currency, colors, size } = this.props;
    return (
      <div className={styles.infoContainer}>
        <Title text={name} isBold={false} size={size} />
        <Title text={category} isBold={false} size={size} />
        <Title
          text={price.toString().concat(currency)}
          isBold={true}
          size={size}
        />
        <SizesBlock sizes={sizes} size={size} />
        <Colors colors={colors} size={size} />
      </div>
    );
  }
}

export default InfoBlock;
