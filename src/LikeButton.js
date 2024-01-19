// LikeButton.js
import React, { useState } from 'react';
import './LikeButton.css';
import { FaHeart } from 'react-icons/fa';

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
        <FaHeart style={{ fontSize: '30px' }} />
      </button>
      <span className={isLiked ? 'like-count liked' : 'like-count'}>
        {likeCount} {likeCount === 1 ? 'like' : 'likes'}
      </span>
    </div>
  );
};

export default LikeButton;
