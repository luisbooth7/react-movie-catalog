import React from 'react';
import Header from './Header';
import Card from './Card';
import '../css/movie-catalog.css';

function MovieCatalog() {

  const movieId = [
    'tt0120737',
    'tt0478970',
    'tt1375666',
    'tt2250912',
    'tt1431045',
    'tt3498820',
    'tt4425200',
  ];

  return (
    <div className="App">
      <Header />
        <div className="container">
        {
          movieId.map((id) => <Card key={id} titleId={id} />)
        }
        </div>
    </div>
  );
}

export default MovieCatalog;
