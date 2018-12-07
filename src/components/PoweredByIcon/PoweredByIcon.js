import React from "react";
import image from "../../img/powered-by-rectangle-green.svg";

function PoweredByIcon(props) {
  let stylesImg = {
    // border: "2px solid red",
    width: "130px",
  };
  let stylesDiv = {
    // border: "5px solid green",
    display: "inline-block",
  };

  return (
    <div style={stylesDiv}>
      <img style={stylesImg} alt="poweredBy icon" src={image} />
    </div>
  );
}

export default PoweredByIcon;
