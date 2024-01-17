import React, { useState } from 'react';

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
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
    </div>
  );
};

export default LikeButton;
