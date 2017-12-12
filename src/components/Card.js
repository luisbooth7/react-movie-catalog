import React, { Component } from 'react';
import Movie from './Movie';
import StarRating from './StarRating';

class Card extends Component {
	render() {
		return (
			<div>
				<Movie />
        <StarRating />
			</div>
		);
	}
}

export default Card;