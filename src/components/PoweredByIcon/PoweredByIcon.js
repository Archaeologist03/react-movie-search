import React from "react";
import image from "../../img/powered-by-rectangle-green.svg";

function PoweredByIcon(props) {
  let stylesImg = {
    // border: "2px solid red",
    width: "35%",
    display: "block",
  };
  let stylesDiv = {
    // border: "2px solid green",
    width: 'fit-content',
    display: "inline-block",
    height: "75%",
    marginTop: 0,
  };

  return (
    <div style={stylesDiv}>
      <img style={stylesImg} alt="poweredBy icon" src={image} />
    </div>
  );
}

export default PoweredByIcon;
