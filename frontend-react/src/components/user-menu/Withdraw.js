import React from 'react';
import { Redirect } from 'react-router-dom';

class Withdraw extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            return (
                <div>
                    <h1>Withdraw</h1>
    
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Withdraw;