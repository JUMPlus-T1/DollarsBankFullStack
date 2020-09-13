import React from 'react';

class Information extends React.Component {

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
                <h1>User Info</h1>
            </div>
        )
    }
}

export default Information;