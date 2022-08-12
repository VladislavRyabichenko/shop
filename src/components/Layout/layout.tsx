import React from "react";
import Header from "./header";
import styles from "./styles/layoutStyles.module.scss";
import Logo from "./logo";

type LayoutProps = {
  children: JSX.Element;
};

class Layout extends React.Component<LayoutProps, any> {
  // constructor(props: LayoutProps) {
  //   super(props);
  // }
  render() {
    const { children } = this.props;
    return (
      <div className={styles.layoutWrapper}>
        <Header />
        <div className={styles.contentContainer}>{children}</div>
      </div>
    );
  }
}

export default Layout;
