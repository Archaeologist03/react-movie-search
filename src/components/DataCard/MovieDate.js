import React from "react";

function MovieDate(props) {
  return (
    <div className="movieDate-container">
      <h6 className="movieDate-container__title">Original Release:</h6>
      <p className="movieDate-container__date">{props.children}</p>
    </div>
  );
}

export default MovieDate;
