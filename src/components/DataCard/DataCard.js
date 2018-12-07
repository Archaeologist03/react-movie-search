import React from "react";
import "./dataCard.scss";

import MovieTitle from './MovieTitle';

function DataCard(props) {


  return (
    <div className="dataCard-container">
      <img
        className="dataCard-container__image"
        alt="poster img"
        src={props.mainState.poster_path}
      />
      <div className="dataCard-container__data">
        <MovieTitle>{props.mainState.original_title}</MovieTitle>
      </div>
    </div>
  );
}

export default DataCard;
