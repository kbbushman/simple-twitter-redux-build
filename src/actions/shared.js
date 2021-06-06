import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'kbbushman';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading);
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading);
  };
}
