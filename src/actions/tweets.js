export const SET_TWEETS = 'SET_TWEETS';

export function setTweets(tweets) {
  return {
    type: SET_TWEETS,
    tweets,
  };
}
