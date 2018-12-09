import React from "react";
import PoweredByIcon from "../PoweredByIcon/PoweredByIcon";

import "./searchInput.scss";

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


    return (
      <div style={inputContainerStyles} className="searchInput-container">
        <PoweredByIcon />
        <input
          
          type="text"
          placeholder="Search for movie.."
          // value={props.mainState.searchQuery}
          onChange={this.props.inputChange}
          onKeyPress={this.props.enterPressed}
        />
      </div>
    );
  }
}

export default SearchInput;
