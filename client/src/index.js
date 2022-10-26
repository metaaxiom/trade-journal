import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/common.scss";
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
