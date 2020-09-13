import React from 'react';
import styled from 'styled-components';
import AccountService from '../services/AccountService';

const Styles = styled.div`
.login-card {
    min-height: 60vh;
}

.registerMessage {
    margin-top: 10vh;
}

.form-control{
    color: blue;
}
`;

class Register extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            account: localStorage.getItem('accountProfile'),
            fname: '',
            lname: '',
            address: '',
            phone: '',
            email: '',
            password: '',
            cpassword: ''
        }
    }

    handleFirstNameChange = event => {
        this.setState({ fname: event.target.value });
    }
    
    handleLastNameChange = event => {
        this.setState({ lname: event.target.value });
    }

    handleAddressChange = event => {
        this.setState({ address: event.target.value });
    }

    handlePhoneChange = event => {
        this.setState({ phone: event.target.value });
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }
    
    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordChange = event => {
        this.setState({ cpassword: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        let fullname = this.state.fname + ' ' + this.state.lname;
        const account = { 
            name: fullname,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        };

        AccountService.createAccount(account);
    
    }

    render() {
        return (
            <Styles>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputFirstName1">First Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="fname"
                                    onChange={this.handleFirstNameChange}
                                    placeholder="First Name"/>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputLastName1">Last Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="lname"
                                    onChange={this.handleLastNameChange}
                                    placeholder="Last Name"/>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputAddress1">Address</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="address" 
                                    onChange={this.handleAddressChange}
                                    placeholder="Address"/>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPhone1">Phone Number</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="phone"
                                    onChange={this.handlePhoneChange}
                                    placeholder="###-###-####"/>
                        </div>
                        <div className="form-group text-left">  
                            <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email"
                                    onChange={this.handleEmailChange}
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="password" 
                                    onChange={this.handlePasswordChange}
                                    placeholder="Password"/>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                                <input type="password" 
                                    className="form-control" 
                                    id="confirm-password" 
                                    onChange={this.handleConfirmPasswordChange}
                                    placeholder="Password"/>
                        </div>
                        <div className="form-check"></div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Styles>
        )
    }
}

export default Register;