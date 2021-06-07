import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';
import { getInitialData } from '../utils/api';
import { setUsers } from './users';

const AUTHED_ID = 'kbbushman';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading);

    return getInitialData().then(({ users, tweets }) => {
      dispatch(hideLoading);
      dispatch(setUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
