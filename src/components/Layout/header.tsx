import React from "react";

import Navigation from "./navigation";
import styles from "./styles/headerStyles.module.scss";
import Logo from "./logo";
import CurrencySelect from "./currencySelect";
import CartIcon from "../cart/cartIcon";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.headerContainer}>
        <Navigation />
        <Logo />
        <div className={styles.cartWrapper}>
          <CurrencySelect />
          <CartIcon />
        </div>
      </div>
    );
  }
}

export default Header;
