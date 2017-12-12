import React, { Component } from 'react';
import Header from './Header';
import Card from './Card';
import '../css/movie-catalog.css';

class MovieCatalog extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card />
      </div>
    );
  }
}

export default MovieCatalog;
