import React from "react";
import "./background.scss";

class Background extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.img === nextProps.img) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="backgroundImg-container">
        <img
          className="backgroundImg-container__image"
          alt="background img"
          src={this.props.img}
        />
        <div className="backgroundImg-container__overlay"></div>
      </div>
    );
  }
}

export default Background;
