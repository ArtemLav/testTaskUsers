import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { App } from './App';
import usersStore from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={usersStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
