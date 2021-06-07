import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Feed from './Feed';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return <div className="container">{loading ? null : <Feed />}</div>;
}
