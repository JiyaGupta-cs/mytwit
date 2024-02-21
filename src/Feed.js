import React, { useEffect, useState, useRef } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from './firebase';

const Feed = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const feedRef = useRef(null);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setAllPosts(snapshot.docs.map(doc => doc.data()))
    ));

    const handleScroll = () => {
      if (feedRef.current.scrollTop > 400) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    feedRef.current.addEventListener('scroll', handleScroll);

    return () => {
      feedRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchQuery !== null) {
      const filteredPosts = allPosts.filter(post =>
        post.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  }, [searchQuery, allPosts]);

  const handleScrollToTop = () => {
    feedRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='feed' ref={feedRef}>
      {/* Header */}
      <div className="feed_header">
        <h2 className='dec-h' style={{ marginLeft: "70px" }}>
          Embrace your strength, defy the odds!!. You're unstoppable
        </h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />

      {/* Posts */}
      {posts.map(post => (
        <Post
          displayName={post.displayName}
          userName={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

      {/* Go to Top Button */}
      {showGoToTop && <button className="go-to-top" onClick={handleScrollToTop}>&#8593;</button>}
    </div>
  );
};

export default Feed;

