import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './styles/_index.scss';
import Root from './Root';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
