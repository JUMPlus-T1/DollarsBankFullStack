import React from 'react';

class Register extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            account: localStorage.getItem('accountProfile'),
            name: '',
            address: '',
            phone: '',
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Register;