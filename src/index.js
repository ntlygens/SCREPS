import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/magnific-popup/dist/magnific-popup.css';
import './assets/fonts/flaticon/flaticon.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './index.css';


ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>,
  document.getElementById('screpsllc')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
