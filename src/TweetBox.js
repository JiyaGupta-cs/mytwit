import React, { useState } from "react";
import "./TweetBox.css";
import { db } from "./firebase";
import GoToTopButton from '../src/components/Button/GoToTopButton'; // Import the GoToTopButton component

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage == "") {
      alert("Post cannot be empty.");
      return;
    }
    db.collection("posts").add({
      displayName: "Julie Jain",
      username: "@juliejain",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    });
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <img src="" alt="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <GoToTopButton /> {/* Use the GoToTopButton component here */}
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <button
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default TweetBox;
