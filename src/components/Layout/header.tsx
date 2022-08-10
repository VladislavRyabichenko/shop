import React from "react";

import Navigation from "./navigation";
import styles from "./styles/headerStyles.module.scss";
import Logo from "./logo";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.headerContainer}>
        <Navigation />
        <Logo />
      </div>
    );
  }
}

export default Header;
