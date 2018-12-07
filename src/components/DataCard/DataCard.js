import React from 'react';
import './dataCard.scss';

function DataCard(props) {

  let imgStyles = {
    width: "40%",
    float: "left",
    height: "100%",
  }

  return(
    <div className="dataCard-container">
      {props.mainState.original_title}
      <img style={imgStyles} alt="poster img" src={props.mainState.poster_path}/>

    </div>
  )
}


export default DataCard;