import React from "react";


function MovieOverview(props) {
  
  return (
    <p className="movie-overview">
      {props.children}
    </p>
  )
}


export default MovieOverview;