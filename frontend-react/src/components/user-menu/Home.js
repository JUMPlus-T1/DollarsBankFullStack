import React from 'react';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    componentDidMount() {
        //fix accountprofile variable
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            return (  
                <div>
                    <h1>Hi {this.state.accountProfile}!</h1>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Home;