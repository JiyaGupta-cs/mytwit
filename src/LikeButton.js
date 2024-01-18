
import React, { useState } from 'react';
import './LikeButton.css'; // Import your CSS file for styling
import { FaThumbsUp } from 'react-icons/fa'; // Assuming you have an icon library, like react-icons

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setIsLiked(!isLiked);
  };

  return (
    <div>
      <button onClick={handleLikeClick} className={isLiked ? 'liked' : ''}>
        <FaThumbsUp /> {isLiked ? 'Unlike' : 'Like'}
      </button>
      <span className={isLiked ? 'like-count liked' : 'like-count'}>
        {likeCount} {likeCount === 1 ? 'like' : 'likes'}
      </span>
    </div>
  );
};

export default LikeButton;
