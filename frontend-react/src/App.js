import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/user-menu/Home';
import Deposit from './components/user-menu/Deposit';
import Withdraw from './components/user-menu/Withdraw';
import Transfer from './components/user-menu/Transfer';
import Information from './components/user-menu/Information';
import History from './components/user-menu/History';
import About from './components/About';
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
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/home" component={Home}/>
          <Route path="/deposit" component={Deposit}/>
          <Route path="/withdraw" component={Withdraw}/>
          <Route path="/transfer" component={Transfer}/>
          <Route path="/information" component={Information}/>
          <Route path="/history" component={History}/>
          <Route path="/error" component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
