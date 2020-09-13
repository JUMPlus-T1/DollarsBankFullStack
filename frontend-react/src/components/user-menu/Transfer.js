import React from 'react';
class Contact extends React.Component {

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
                <h1>Transfer</h1>
            </div>
        )
    }
}

export default Contact;