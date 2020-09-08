import React from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        };
    }

    componentDidMount() {
        this.timeout = setTimeout(() => window.location.reload(false), 3000);
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {

        localStorage.clear();
        localStorage.setItem('isLoggedIn', false);

        if(this.state.isLoggedIn === 'true') {
            return (
                <div>
                    <h1>You have successfully logged out.</h1>
                </div>
            )
        } else {
            return (<Redirect to="/about" />)
        }        
    }
}

export default Logout;