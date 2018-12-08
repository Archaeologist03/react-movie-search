import React from "react";


function Genres(props) {
  const genresList = props.genres.map(genre => <li key={Math.random()}>{genre}</li>)
  
  return (
    <ul className="movie-genres">
      {genresList}
    </ul>
  )
}


export default Genres;