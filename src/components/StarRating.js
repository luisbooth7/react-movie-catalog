import React, { Component } from 'react';

class StarRating extends Component {
	constructor() {
		super();
    this.state = { rating: 5 };
	}

	render() {
		return (
			<div>Rating: {this.state.rating} Stars</div>
		);
	}
}

export default StarRating;