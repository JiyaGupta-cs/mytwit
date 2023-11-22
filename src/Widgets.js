import React from 'react'
import './Widgets.css'

const Widgets = () => {
  return (
    <div className="widgets">
    <div className="widgets__input">
      {/* <SearchIcon className="widgets__searchIcon" /> */}
      <input placeholder="Search" type="text" />
    </div>

    <div className="widgets__widgetContainer">
      <h2>What's happening</h2>

      {/* <TwitTweetEmbed tweetId={"858551177860055040"} /> */}

      {/* <TwitTimelineEmbed
        sourceType="profile"
        screenName="cleverqazi"
        options={{ height: 400 }}
      />

      <TwitShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      /> */}
    </div>
  </div>
  )
}

export default Widgets
