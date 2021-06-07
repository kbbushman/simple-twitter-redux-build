import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

export default function Feed() {
  const tweets = useSelector((state) => state.tweets);
  const sortedTweets = Object.keys(tweets).sort((a, b) => {
    return tweets[b].timestamp - tweets[a].timestamp;
  });

  return (
    <div className="feed-container">
      {sortedTweets.map((key) => (
        <Tweet key={key} id={key} />
      ))}
    </div>
  );
}
