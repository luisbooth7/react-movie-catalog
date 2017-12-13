import React, { Component } from 'react';

class StarRating extends Component {
	constructor(props) {
		super(props);
    this.updateRating = this.updateRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      rating: this.props.rating,
      stars: []
    };
	}

  componentWillMount() {
    this.updateRating(this.props.rating);
  }

  handleChange(index) {
    const newRating = index + 1;

    this.setState({ rating: newRating });
    this.updateRating(newRating);
  }

  checkStars(rating) {
    const starRating = [];

    for (let x = 0; x < 10; x++) {
      x < rating ? starRating.push(1) : starRating.push(0);
    }

    return starRating;
  }

  updateRating(rating) {
    const stars = this.checkStars(rating);
    
    this.setState({ stars });
  }

	render() {
    const { stars } = this.state;

		return (
			<div className="rating">
      {stars.map((item, index) => {
        const isChecked = item === 1 ? 'checked' : '';

        return (
          <span 
            key={index}
            className={`fa fa-star ${isChecked}`}
            onClick={() => this.handleChange(index)}>
          </span>
        )})
      }
      </div>
		);
	}
}

export default StarRating;
