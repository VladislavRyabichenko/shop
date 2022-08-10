import React from "react";
import styles from "./styles/navigation.module.scss";
import { NavLink } from "react-router-dom";
import NavItem from "./navItem";

class Navigation extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.navigationContainer}>
        <NavItem path="users" title="Women" />
        <NavItem path="posts" title="Men" />
        <NavItem path="test" title="Kids" />
      </div>
    );
  }
}

export default Navigation;
