import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
    displayName: "あああ",
    username: "あああ",
    verified: true,
    text: tweetMessage,
    avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
    image: tweetImage,
    timestamp: serverTimestamp(),
  });

  setTweetMessage("");
  setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox-input">
          <Avatar />
          <input value={tweetMessage} ype="text" placeholder='いまどうしてる？' onChange={(e) => setTweetMessage(e.target.value)}/>
        </div>
        <input value={tweetImage} type="text" className='tweetBox__imageInput' placeholder='画像のURLを入力して下さい' onChange={(e) => setTweetImage(e.target.value)}/>
        <Button type='submit' className='tweetBox__tweetButton' onClick={sendTweet}>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox