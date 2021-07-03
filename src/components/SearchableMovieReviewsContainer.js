import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);

        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results);
            this.setState({
                searchTerm: "",
                reviews: data.results
            })
        })
    
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.searchTerm}/>
                    <input type="submit"/>
                </form>
                <div className="reviews">
                    <MovieReviews reviews={this.state.reviews} />
                </div>

            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;