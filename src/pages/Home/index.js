
import '../../utlis/styles/App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from '../authentication/login/login.component';
import SignUp from '../authentication/signup/signup.component';
import Error from '../../components/shared/Error/index';
import Dashboard from '../dashboard/index';
import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };
  return (
    <><div className="App">
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">

              {currentUser ? (
                <><li className="nav-item">
                  <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
                </li><li className="nav-item">
                    <a href="/login" className="nav-link" onClick={logOut}>
                      LogOut
                    </a>
                  </li></>
              ):(
              <><li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li><li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li></>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
        <Routes>
         <Route path="/" element={<Login />} /> 
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="*" element={<Error />} /> 
         <Route path="/sign-in" element={<Login />} />
         <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
    
    </>
  );
}

export default App;
