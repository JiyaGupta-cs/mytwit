import React from 'react';
import './Post.css';
import LikeButton from './LikeButton'; // Import the LikeButton component

const Post = ({ displayName, userName, verified, text, image, avatar, location }) => {
  return (
    <div className='post'>
      <div className="post_avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>{displayName}</h3>
            
           
            {location && <span className="post_location">{location}</span>}
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>

        {image && <img className="post_image" src={image} alt="" />}

        <div className="post_footer">
          {/* LikeButton component with like count */}
          <LikeButton />

          {/* Other action buttons/icons */}
          
          <img width={'30px'} src="comment-icon.png" alt="Comment Icon" /> 
          <img width={'30px'} src="share-icon.png" alt="Share Icon" />
          <img width={'30px'} src="bookmark-icon.png" alt="Bookmark Icon" />
        </div>
      </div>
    </div>
  );
};

export default Post;

