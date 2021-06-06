import React from 'react';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return <div className="container">Twitter</div>;
}
