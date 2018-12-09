import React from "react";
import "./dataCard.scss";

import revenueFormating from '../helperFuncs/revenueFormating';

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
    // let revenue = this.props.mainState.revenue.toString();
    // let formatedRevenue = [];
    // let counter = 0;
    // for (let i = revenue.length - 1; i >= 0; i--) {
    //   counter++;      
    //   formatedRevenue.unshift(revenue[i]);
    //   if (counter % 3 === 0 && revenue[counter + 1]) formatedRevenue.unshift(",");  
    // }
    // formatedRevenue = ["$", ...formatedRevenue].join("");
    
    
console.log();
    
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
          <MovieInfoBox data={this.props.mainState.release_date}>Release Date:</MovieInfoBox>
          <MovieInfoBox data={this.props.mainState.runtime ? `${this.props.mainState.runtime} mins` : "-"}>Running Time:</MovieInfoBox>
          <MovieInfoBox data={revenueFormating(this.props.mainState.revenue)}>Box Office:</MovieInfoBox>
          <MovieInfoBox data={`${this.props.mainState.vote_average} / 10`}>Vote Average:</MovieInfoBox>
        </div>
      </div>
    );
  }
}

export default DataCard;
