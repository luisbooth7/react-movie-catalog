import React, { Component } from 'react';
import Movie from './Movie';
import StarRating from './StarRating';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import '../css/card.css';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      rating: '',
      poster: '',
      cardState: 'loading'
    };
  }

  componentWillMount() {
    this.fetchMovieData();
  }

  fetchMovieData() {
    const { titleId } = this.props;
    const url = `http://www.theimdbapi.org/api/movie?movie_id=${titleId}`;

    fetch(url, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      const { title, rating: rawRating, poster } = data;
      const rating = Number(rawRating).toFixed();

      this.setState({
        title,
        rating,
        poster,
        cardState: 'info'
      });
    })
    .catch(() => this.setState({ cardState: 'error' }))
  }

	render() {
    const { titleId } = this.props;
    const { title, rating, poster, cardState } = this.state;
		return (
      <div className="card">
        <div className="content">
        {
          {
            loading: <Loader />,
            error: <ErrorMessage />,
            info: [
              <StarRating key={`${titleId}-rating`} rating={rating} />,
              <Movie key={`${titleId}-info`} title={title} poster={poster} />
            ]
          }[cardState]
        }
        </div>
			</div>
		);
	}
}

export default Card;
