import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/js/function.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import ErrorBoundary from './ErrorBoundary.js';

import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <App />
  
  
</Provider>
);
