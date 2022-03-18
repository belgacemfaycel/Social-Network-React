


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/index';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import Header from './components/shared/Header/index';
import Footer from './components/shared/Footer/index';

ReactDOM.render(
  <React.StrictMode>
  <Router>
      <Header />
        <App />
      <Footer />

  </Router>
</React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
