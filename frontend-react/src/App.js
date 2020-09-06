import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ImageStrip from './components/ImageStrip';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ImageStrip />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
