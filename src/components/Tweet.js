import React from 'react';
import { useSelector } from 'react-redux';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from 'react-icons/ti';

export default function Tweet({ id }) {
  const tweets = useSelector((state) => state.tweets);
  const users = useSelector((state) => state.users);
  const tweet = tweets[id];

  const getFormatedTimeDate = (timestamp) => {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString();
    const formattedTime = time.substring(0, time.length - 6);
    const meridian = time.substring(time.length - 2);
    const formattedDate = date.toLocaleDateString();
    return `${formattedTime} ${meridian} | ${formattedDate}`;
  };

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={users[tweet.author].avatarURL} alt={tweet.author} />
      </div>
      <div className="tweet-content">
        <div className="tweet-info">
          <p>{users[tweet.author].name}</p>
          <span>{getFormatedTimeDate(tweet.timestamp)}</span>
        </div>
        <div className="tweet-text">
          <p>{tweet.text}</p>
        </div>
        <div className="tweet-actions">
          <span className="tweet-reply">
            <TiArrowBackOutline /> {tweet.replies.length}
          </span>
          <span className="tweet-like">
            <TiHeartOutline /> {tweet.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}
