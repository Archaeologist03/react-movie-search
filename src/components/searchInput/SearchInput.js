import React from "react";
import PoweredByIcon from "../PoweredByIcon/PoweredByIcon";

class SearchInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    const inputContainerStyles = {
      overflow: "visible",
      position: "relative",
      marginBottom: "15px",
    };
    const inputStyles = {
      color: "rgb(233, 233, 233)",
      fontSize: "1.5rem",
      border: "none",
      borderBottom: "1px solid white",
      backgroundColor: "transparent",
      outline: "none",
      // float: "right",
      width: "57%",
      position: "absolute",
      top: "15%",
      right: "0%",
      height: "75%",
      marginTop: 0,
    };

    return (
      <div style={inputContainerStyles}>
        <PoweredByIcon />
        <input
          style={inputStyles}
          type="text"
          placeholder="Search for em movie's"
          // value={props.mainState.searchQuery}
          onChange={this.props.inputChange}
          onKeyPress={this.props.enterPressed}
        />
      </div>
    );
  }
}

export default SearchInput;
