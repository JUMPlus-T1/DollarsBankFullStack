import React from 'react';

class Deposit extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    render() {
        return (
            <div>
                <h1>Deposit</h1>
            </div>
        )
    }
}

export default Deposit;