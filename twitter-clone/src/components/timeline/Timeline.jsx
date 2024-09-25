import React from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      <TweetBox />

      <Post
      displayName="プログラミングチュートリアル"
      username="shin_engineer"
      verified={true}
      text="初めてのツイート"
      avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
      image="http://shincode.info/wp-content/uploads/2021/12/icon.png"
      />
    </div>
  )
}

export default Timeline