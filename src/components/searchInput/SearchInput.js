import React from "react";
import PoweredByIcon from "../PoweredByIcon/PoweredByIcon";

function SearchInput(props) {
  const inputStyles = {
    padding: "8px",
    color: "rgb(233, 233, 233)",
    fontSize: 20,
    border: "none",
    borderTop: "none",
    borderBottom: "1px solid white",
    backgroundColor: "transparent",
    outline: "none",
    float: "right",
    width: "55%",
    position: "absolute",
    bottom: 0,
    right: 0,
  };

  const inputContainerStyles = {
    // border: "2px solid red",
    overflow: "visible",
    position: "relative",
  }

  return (
    <div style={inputContainerStyles}>
      <PoweredByIcon />
      <input
        style={inputStyles}
        type="text"
        placeholder="Search for em movie's"
        // value={props.mainState.searchQuery}
        onChange={props.inputChange}
        onKeyPress={props.enterPressed}
      />
    </div>
  );
}

export default SearchInput;
