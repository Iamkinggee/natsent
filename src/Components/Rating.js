import React from 'react';
import yellowstar from '../Icons/yellowstar.png';
import whitestar from '../Icons/whitestar.png';

function Rating({ rating = 4 }) {
  return (
    <div className="flex items-center gap-0.5 justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= rating ? yellowstar : whitestar}
          alt="star rating"
          className="w-3.5 h-3.5 object-contain"
        />
      ))}
    </div>
  );
}

export default Rating;