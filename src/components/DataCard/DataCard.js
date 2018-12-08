import React from "react";
import "./dataCard.scss";

import MovieTitle from "./MovieTitle";
import MovieTagline from "./MovieTagline";
import MovieOverview from "./MovieOverview";
import MovieGenres from './MovieGenres';
// import MovieDate from './MovieDate';
import MovieInfoBox from './MovieInfoBox';

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
        <div className="dataCard-container__data-container">
          <MovieTitle>{this.props.mainState.original_title.toUpperCase()}</MovieTitle>
          <MovieTagline>{this.props.mainState.tagline}</MovieTagline>
          <MovieOverview>{this.props.mainState.overview}</MovieOverview>
          <MovieGenres genres={this.props.mainState.genres}/>
          {/* <MovieDate className="xxx">{this.props.mainState.release_date}</MovieDate> */}
          <MovieInfoBox data={this.props.mainState.release_date}>Release Date:</MovieInfoBox>
          <MovieInfoBox data={this.props.mainState.runtime}>Running Time:</MovieInfoBox>
          <MovieInfoBox data={this.props.mainState.revenue}>Box Office:</MovieInfoBox>
          <MovieInfoBox data={this.props.mainState.vote_average}>Vote Average:</MovieInfoBox>
        </div>
      </div>
    );
  }
}

export default DataCard;
