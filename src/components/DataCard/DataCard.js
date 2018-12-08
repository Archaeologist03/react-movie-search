import React from "react";
import "./dataCard.scss";

import MovieTitle from "./MovieTitle";
import MovieTagline from "./MovieTagline";
import MovieOverview from "./MovieOverview";
import MovieGenres from './MovieGenres';

class DataCard extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.mainState.original_title === nextProps.mainState.original_title
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="dataCard-container">
        <img
          className="dataCard-container__image"
          alt="poster img"
          src={this.props.mainState.poster_path}
        />
        <div className="dataCard-container__data">
          <MovieTitle>{this.props.mainState.original_title}</MovieTitle>
          <MovieTagline>{this.props.mainState.tagline}</MovieTagline>
          <MovieOverview>{this.props.mainState.overview}</MovieOverview>
          <MovieGenres genres={this.props.mainState.genres}/>
        </div>
      </div>
    );
  }
}

export default DataCard;
