import React from 'react';
import ImageStrip from './ImageStrip';

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
                <ImageStrip />
                <h1>Because I'm on the way to being great!</h1>
            </div>
        )
    }
}

export default Contact;