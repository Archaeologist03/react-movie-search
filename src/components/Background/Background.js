import React from "react";
import "./background.scss";

function Background(props) {
  // let containerStyles = {
  //   width: "100%",
  //   height: "100vh",
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   zIndex: "-1",
  //   overflow: "hidden",
  // };

  return (
    <div className="backgroundImg-container">
      <img
        className="backgroundImg-container__image"
        alt="background img"
        src={props.img}
      />
      <div className="backgroundImg-container__overlay" />
    </div>
  );
}

export default Background;
