import React from "react";

function SearchInput(props) {
  const inputStyles = {
    padding: "8px",
    color: "red",
    fontSize: 25,
    border: "none",
    borderTop: "none",
    borderBottom: "2px solid black",
    backgroundColor: "transparent",
    outline: "none",
  };

  return <input style={inputStyles} type="text" placeholder="Search for em gem's"/>;
}

export default SearchInput;
