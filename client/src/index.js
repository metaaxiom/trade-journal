import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/common.scss";
import axios from 'axios';
import App from './App';

// set default for axios requests made to the backend
if(process.env.NODE_ENV == 'production') axios.defaults.baseURL = 'api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);