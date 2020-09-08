import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/user-menu/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/error" component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
