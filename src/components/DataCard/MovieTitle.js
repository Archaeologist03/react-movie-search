import React from "react";


function MovieTitle(props) {
  
  return (
    <h1 className="movie-title">
      {props.children}
    </h1>
  )
}


export default MovieTitle;