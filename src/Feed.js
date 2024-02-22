import React, { useEffect, useState, useRef } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from './firebase';
import { Button, useColorMode } from '@chakra-ui/react'; // Import Chakra UI Button
import { FaArrowUp } from 'react-icons/fa';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const feedRef = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ));

    const handleScroll = () => {
      if (feedRef.current) {
        if (feedRef.current.scrollTop > 400) {
          setShowGoToTop(true);
        } else {
          setShowGoToTop(false);
        }
      }
    };
  
    if (feedRef.current) {
      feedRef.current.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (feedRef.current) {
        feedRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    feedRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const arrowColor = colorMode === 'dark' ? 'white' : 'black';
 const buttonStyle = {
  position: 'fixed',
  bottom: showGoToTop ? '20px' : '-100px', // Show/hide based on scroll position
  right: '20px',
  backgroundColor: '#3685fb', // Specific color code for the background
  color: '#0d213f', // Specific color code for the text
  padding: '8px',
  borderRadius: '50%',
  height: '40px',
  width: '40px',
  fontSize: '27px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'bottom 0.3s ease-in-out',
  marginRight: '440px',
};


  return (
    <div className='feed' ref={feedRef}>
      {/* Header */}
      <div className="feed_header">
        <h2 className='dec-h' style={{ marginLeft: "70px" }}>Embrace your strength, defy the odds!!. You're unstoppable</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />

      {posts.map(post => (
        <Post
          key={post.id} // Don't forget to add a unique key for each Post component
          displayName={post.displayName}
          userName={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

      {/* Go to Top Button */}
      <Button
        onClick={handleScrollToTop}
        className="go-to-top"
        style={buttonStyle}
      >
        <FaArrowUp color={arrowColor} />
      </Button>

      {/* Posts */}
    </div>
  );
}

export default Feed;
