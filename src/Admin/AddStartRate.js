import React from 'react';

const RatingStars = ({ rating }) => {
  const maxRating = 5; // Maximum rating (e.g., 5 stars)

  const generateRatingStars = () => {
    const stars = [];

    // Fill in the filled stars based on the rating
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }

    return stars;
  };

  return (
    <div className="rating-stars">
      {generateRatingStars()}
    </div>
  );
};

export default RatingStars;
