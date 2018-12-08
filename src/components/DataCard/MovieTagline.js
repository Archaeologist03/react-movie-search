import React from "react";


function MovieTagline(props) {
  
  return (
    <h4 className="movie-tagline">
      {props.children}
    </h4>
  )
}


export default MovieTagline;