import React from 'react';

function Movie(props) {
  const { title, poster } = props;
  return (
    <div className="movie-info">
      <img src={poster.thumb} alt="movie poster" />
      <h4 className="movie-title">{title}</h4>
    </div>
  );
}

export default Movie;
