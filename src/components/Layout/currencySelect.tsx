import React from "react";
import styles from "./styles/currencySelect.module.scss";

class CurrencySelect extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.selectContainer}>
        <select name="" id="">
          <option value="usd">$</option>
          <option value="eu">%</option>
          <option value="hr">&</option>
        </select>
      </div>
    );
  }
}

export default CurrencySelect;
