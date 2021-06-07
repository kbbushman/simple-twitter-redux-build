import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authedUser from './authedUser';

export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
});
