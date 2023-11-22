import React from 'react'
import './TweetBox.css'

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
      <div className="tweetBox_input">
        <input placeholder="What's happening?" type="text" />
        
      </div>
      <input className='tweetBox_imageInput' placeholder="Optional: Enter image URL" type="text" />
      <button className='tweetBox_tweetButton'>Tweet</button>
    </form>      
    </div>
  )   
}
      
export default TweetBox