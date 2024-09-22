import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox-input">
          <Avatar />
          <input type="text" placeholder='いまどうしてる？'/>
        </div>
        <input type="text" className='tweetBox__imageInput' placeholder='画像のURLを入力して下さい' />
        <Button type='submit' className='tweetBox__tweetButton'>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox