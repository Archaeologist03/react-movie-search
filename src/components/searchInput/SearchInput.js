import React from "react";
import PoweredByIcon from "../PoweredByIcon/PoweredByIcon";

class SearchInput extends React.Component {
  shouldComponentUpdate(nextProps) {    
    return false;
  }

  render() {
    const inputStyles = {
      // paddingBottom: "3px",
      color: "rgb(233, 233, 233)",
      fontSize: 20,
      border: "none",
      // borderTop: "none",
      borderBottom: "1px solid white",
      backgroundColor: "transparent",
      outline: "none",
      float: "right",
      width: "55%",
      position: "absolute",
      top: "15%",
      right: 0,
      height: "75%",
      marginTop: 0,
    };

    const inputContainerStyles = {
      // border: "2px solid red",
      overflow: "visible",
      position: "relative",
      
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
