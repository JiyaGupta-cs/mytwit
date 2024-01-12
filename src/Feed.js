import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import {db} from './firebase'

const Feed = () => {
  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  },[]);

  return (
    <div className='feed'>
      {/* Header */}
      <div className="feed_header">
      <h2 className='dec-h' style={{marginLeft: "70px"}}>Embrace your strength, defy the odds. You're unstoppable</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />

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

      {/* Posts */}
      {/* <Post displayName="Sonny Sangha" username="ssssangha" verified={true} text="Yes it's working" avatar="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" image="https://arts.giphy.com/wp-content/uploads/2017/11/giphy-14.gif"/> */}
      
    </div>
  )
}

export default Feed
