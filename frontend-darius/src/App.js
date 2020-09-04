import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Login} from './Login';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import {ImageStrip} from './components/ImageStrip';

class App extends Component {
    render() {
      return (
        /*React.Fragment serves as a wrapper to prevent multiple divs*/
        <React.Fragment>
          <NavigationBar/>
          <ImageStrip/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route component={NoMatch}/>
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
    );
  }
}

export default App;
