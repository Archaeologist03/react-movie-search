import React from "react";
import image from "../../img/powered-by-rectangle-green.svg";

import "./poweredByIcon.scss";

function PoweredByIcon(props) {
  return (
    <div className="poweredByIcon-container">
      <img alt="poweredBy icon" src={image} />
    </div>
  );
}

export default PoweredByIcon;
