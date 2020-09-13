import React from 'react';

class Withdraw extends React.Component {

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
                <h1>Withdraw</h1>
            </div>
        )
    }
}

export default Withdraw;