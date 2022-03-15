import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/index';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/shared/Header/index';
import Footer from './components/shared/Footer/index';
import Dashboard from './pages/dashboard'; 
import Login from './pages/authentication/login/login.component';
import SignUp from './pages/authentication/signup/signup.component';
import Error from './components/shared/Error/index';
ReactDOM.render(
  <React.StrictMode>
  <Router>
      <Header />
        <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Error />} /> 
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      <Footer />

  </Router>
</React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
