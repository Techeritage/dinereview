import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";


const RatingStar = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); // Round the rating to the nearest integer

  // Create an array to hold star elements
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= filledStars) {
      // Render filled star
      stars.push(<StarIcon className="text-yellow-400 w-3" key={i} />);
    } else {
      // Render empty star
      stars.push(<StarIcon className="text-gray-400 w-3" key={i} />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default RatingStar;
