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
};
class InfoBlock extends React.Component<InfoBlockProps, any> {
  render() {
    const { name, category, sizes, price, currency, colors } = this.props;
    return (
      <div className={styles.infoContainer}>
        <Title text={name} isBold={true} />
        <Title text={category} isBold={false} />
        <Title text={price.toString().concat(currency)} isBold={true} />
        <SizesBlock sizes={sizes} />
        <Colors colors={colors} />
      </div>
    );
  }
}

export default InfoBlock;
