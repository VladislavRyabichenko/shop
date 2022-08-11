import React from "react";
import styles from "../styles/slider.module.scss";

type SliderProps = {
  images: Array<string>;
};

class Title extends React.Component<SliderProps, any> {
  render() {
    const { images } = this.props;
    return (
      <div className={styles.sliderContainer}>
        <img src={images[0]} alt="" />
        <div className={styles.sliderControls}>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
    );
  }
}

export default Title;
