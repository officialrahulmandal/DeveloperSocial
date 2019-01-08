import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'
import Landing from '../src/components/layout/Layout'
import Login from '../src/components/auth/Login'
import Register from '../src/components/auth/Register'
class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
              <Navbar/>
              <Route exact path="/" component={Landing}/>
          <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>

          </div>
              <Footer />
      </div>
        </Router>
    );
  }
}

export default App;
