import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'; // Your custom CSS
import './assets/js/function.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);