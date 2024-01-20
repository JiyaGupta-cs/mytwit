// LikeButton.js
import React, { useState, useEffect } from 'react';
import './LikeButton.css';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
 
  const [likeCount, setLikeCount] = useState(() => {
    const storedLikeCount = localStorage.getItem('likeCount');
    return storedLikeCount ? parseInt(storedLikeCount, 10) : 0;
  });

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    // Toggle the like status and update the like count
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    setIsLiked(!isLiked);

    // Store the updated likeCount in localStorage
    localStorage.setItem('likeCount', newLikeCount.toString());
  };

  useEffect(() => {
    // Update the document title with the like count
    document.title = `Likes: ${likeCount}`;
  }, [likeCount]);

  return (
    <div>
      <button onClick={handleLikeClick} className={isLiked ? 'liked' : ''}>
  <img
    src="like-icon.png"  // Replace with the actual path to your image
    
    style={{ width: '30px', height: '30px' }}  // Adjust the size as needed
  />
</button>

      <span className={isLiked ? 'like-count liked' : 'like-count'}>
        {likeCount} {likeCount === 1 ? 'like' : 'likes'}
      </span>
    </div>
  );
};

export default LikeButton;
