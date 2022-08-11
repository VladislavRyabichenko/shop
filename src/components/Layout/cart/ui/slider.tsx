import React from "react";
import styles from "../styles/slider.module.scss";

type SliderProps = {
  images: Array<string>;
};

type SliderState = {
  count: number;
};

class Title extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClickNext = () => {
    if (this.state.count + 1 < this.props.images.length) {
      this.setState({ count: this.state.count + 1 });
    }
  };
  handleClickPrev = () => {
    if (this.state.count - 1 >= 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    const { images } = this.props;

    return (
      <div className={styles.sliderContainer}>
        <img src={images[this.state.count]} alt="" />
        <div className={styles.sliderControls}>
          <button onClick={this.handleClickPrev}>{"<"}</button>
          <button onClick={this.handleClickNext}>{">"}</button>
        </div>
      </div>
    );
  }
}

export default Title;
