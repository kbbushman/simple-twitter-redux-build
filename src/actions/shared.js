import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';
import { getInitialData } from '../utils/api';
import { setUsers } from './users';
import { setTweets } from './tweets';

const AUTHED_ID = 'kbbushman';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, tweets }) => {
      dispatch(setUsers(users));
      dispatch(setTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
