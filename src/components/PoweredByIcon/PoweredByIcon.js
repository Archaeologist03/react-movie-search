import React from "react";
import image from "../../img/powered-by-rectangle-green.svg";

function PoweredByIcon(props) {
  let stylesImg = {
    width: "45%",
    display: "block",
  };
  let stylesDiv = {
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
