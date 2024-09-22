import React from 'react';
import "./Timeline.css";
import TweetBox from './TweetBox';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      <TweetBox />
    </div>
  )
}

export default Timeline