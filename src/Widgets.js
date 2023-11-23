import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed'
const Widgets = () => {
  return (
    <div className="widgets">
    <div className="widgets__input">
      {/* <SearchIcon className="widgets__searchIcon" /> */}
      <img className='widgets_search_icon' width={'25px'} src={'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png'} alt="" />
      <input placeholder="Search" type="text" />
    </div>

    <div className="widgets__widgetContainer">
      <h2>What's happening - Widgets</h2>

      <TwitterTweetEmbed tweetId={"858551177860055040"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="cleverqazi"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      />
    </div>
  </div>
  )
}

export default Widgets
