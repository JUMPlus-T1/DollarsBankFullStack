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

    render() {
        
        console.log();
        if (this.state.isLoggedIn === 'true') {
            var json = this.state.accountProfile;
            var account = JSON.parse(json);
            return (  
                <div>
                    <h1>Hello {account.name}!</h1>

                    
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Home;