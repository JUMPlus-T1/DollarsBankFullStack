import React from 'react';
import { Redirect } from 'react-router-dom';

class Information extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    onHome = () => {
        this.props.history.push('/home');
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            let json = this.state.accountProfile;
            let account = JSON.parse(json);
            return (
                <div>
                    <h1>User Info</h1>
                    <h2>Name: {account.name}</h2>
                    <h2>Address: {account.address}</h2>
                    <h2>Phone Number: {account.phone}</h2>
                    <h2>Email: {account.email}</h2>
                    <button onClick={this.onHome}>Back</button>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
        
    }
}

export default Information;