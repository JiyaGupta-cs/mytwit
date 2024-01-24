import React, { useRef } from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed'
const Widgets = ({searchQuery, setSearchQuery}) => {
  const inputRef = useRef(null);
 
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="widgets">
    <div className="widgets__input">
      <img className='widgets_search_icon' width={'25px'} src={'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png'} alt="" onClick={() => inputRef.current.focus()} />
      <input placeholder="Search" type="text" value={searchQuery} onChange={handleSearchQueryChange} ref={inputRef} />
    </div>

    <div className="widgets__widgetContainer">
      <h2>What's happening ?</h2>

      <TwitterTweetEmbed tweetId={"1730189541250883947"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="APD_India"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://twitter.com/APD_India"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      />
    </div>
  </div>
  )
}

export default Widgets
