import React from "react";
import Header from "./header";
import styles from "./styles/layoutStyles.module.scss";
import Logo from "./logo";

class Layout extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.layoutWrapper}>
        <Header />
      </div>
    );
  }
}

export default Layout;
