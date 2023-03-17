import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';             //  tool to tell that the app provides store
import store from './redux/store';                  //  store itself

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>                        {/* Includes the store inside App */}
      <App />
    </Provider>
  </React.StrictMode>
);

