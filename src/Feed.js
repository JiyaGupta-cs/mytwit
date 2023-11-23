import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed'>
      {/* Header */}
      <div className="feed_header">
      <h2>Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Posts */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
