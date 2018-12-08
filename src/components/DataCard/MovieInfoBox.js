import React from "react";

function MovieInfoBox(props) {
  return (
    <div className="movieInfoBox-container">
      <h6 className="movieInfoBox-container__title">{props.children}</h6>
      <p className="movieInfoBox-container__data">{props.data}</p>
    </div>
  );
}

export default MovieInfoBox