import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './urls/Home';
import {Account} from './urls/Account';
import {Contact} from './urls/Contact';
import {Login} from './urls/Login';
import {Registration} from './urls/Registration';
import {NoMatch} from './urls/NoMatch';
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
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/account" component={Account}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route component={NoMatch}/>
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
    );
  }
}

export default App;
