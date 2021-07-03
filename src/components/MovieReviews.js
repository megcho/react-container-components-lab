// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    
    const displayedReviews = props.reviews.map(review => {
        return (
            <li className="review"> {review.headline}</li>
        )
    })

    return (
        <ul className="review-list">
            {displayedReviews}
        </ul>
    )
        
}

export default MovieReviews;
