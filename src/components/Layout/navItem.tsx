import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./styles/navItem.module.scss";

type navItemProps = {
  path: string;
  title: string;
};

type navItemState = {
  isActive: boolean;
};

class NavItem extends React.Component<navItemProps, navItemState> {
  constructor(props: navItemProps) {
    super(props);
    this.state = { isActive: false };
    console.log(this.state.isActive);
  }

  render() {
    const containerClasses: string = classNames(
      styles.itemContainer,
      { [styles.active]: this.state.isActive },
      { [styles.inActive]: !this.state.isActive }
    );
    const { path, title } = this.props;
    return (
      <div className={styles.itemContainer}>
        <NavLink
          style={{
            textDecoration: "none",
          }}
          to={path}
          className={
            ({ isActive }) =>
              classNames(
                styles.link,
                { [styles.active]: isActive },
                { [styles.inActive]: !isActive }
              )
            // isActive ? styles.active : styles.inActive
          }
        >
          <span className={styles.title}>{title.toUpperCase()}</span>
        </NavLink>
      </div>
    );
  }
}

export default NavItem;
