import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from './middleware';
import reducer from './reducers';
import App from './components/App';
import './index.css';

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className="border-container">
        <li className="border-item" style={{ background: 'var(--red)' }} />
        <li className="border-item" style={{ background: 'var(--blue)' }} />
        <li className="border-item" style={{ background: 'var(--pink)' }} />
        <li className="border-item" style={{ background: 'var(--yellow)' }} />
        <li className="border-item" style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  );
}

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorfulBorder />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
