import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions'
import { Provider } from 'react-redux';
import store from './store'

import './App.css';
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'
import Landing from '../src/components/layout/Layout'
import Login from '../src/components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/create-profile/createProfile'
import Register from '../src/components/auth/Register'
import  { logoutUser } from './actions/authActions'
import  { clearCurrentProfile } from './actions/profileActions';


import PrivateRoute from './components/common/PrivateRoute';


// Check for token
if(localStorage.jwtToken) {
    //Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    //Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        // Logout the user
        store.dispatch(logoutUser());
        // TODO: Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login'

    }
}


class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Router>
      <div className="App">
              <Navbar/>
              <Route exact path="/" component={Landing}/>
          <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              </Switch>
              <Switch>
                  <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
              </Switch>


          </div>
              <Footer />
      </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
