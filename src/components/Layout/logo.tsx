import React from "react";
import styles from "./styles/logoStyles.module.scss";

class Logo extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.logoContainer}>
        <img src="./images/icons/logo.svg" alt="" />
      </div>
    );
  }
}

export default Logo;
