import React from "react";
import Title from "./title";

import styles from "../styles/cartSummary.module.scss";

type CartSummaryProps = {
  count: number;
  total: number;
};

class CartSummary extends React.Component<CartSummaryProps, any> {
  render() {
    const { count, total } = this.props;
    return (
      <div className={styles.summaryContainer}>
        <div className={styles.taxContainer}>
          <Title text="Tax 21% : " isBold={false} size="md" />
          <Title
            text={(total * 0.21).toFixed(0).toString()}
            isBold={true}
            size="md"
          />
        </div>

        <div className={styles.quantityContainer}>
          <Title text="Quantity : " isBold={false} size="md" />
          <Title text={count.toString()} isBold={true} size="md" />
        </div>

        <div className={styles.totalContainer}>
          <Title text="Total : " isBold={false} size="md" />
          <Title text={total.toString()} isBold={true} size="md" />
        </div>
      </div>
    );
  }
}

export default CartSummary;
