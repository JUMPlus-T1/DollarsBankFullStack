import React from 'react';
import styled from 'styled-components';
import ImageStrip from './ImageStrip';
import { Redirect } from 'react-router-dom';
import AccountService from '../services/AccountService';

const Styles = styled.div`
.login-card {
    min-height: 60vh;
}

.registerMessage {
    margin-top: 10vh;
}
`;

class Login extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            email: '',
            password: ''
        }
    }
    

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }
    
    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const account = { 
            email: this.state.email,
            password: this.state.password
        };

        AccountService.getAccount(account);

        setTimeout(() => window.location.reload(false), 500); //TODO
    
    }

    onRegister = () => {
        this.props.history.push('/register');
    }

    render() {
        if(this.state.isLoggedIn === 'true')
            return (<Redirect to="/home" />);
        else {
            return (
                <Styles>
                    <ImageStrip />
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div>  
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email"
                                        name="email"
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
                                        name="password"
                                        onChange={this.handlePasswordChange}
                                        placeholder="Password"/>
                            </div>
                            <div className="form-check"></div>
                            <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                >Submit</button>
                        </form>
                        <div className="registerMessage">
                            <span>Dont have an account? </span>
                            <button className="btn btn-primary" onClick={this.onRegister}>Register Here!</button>
                        </div>
                    </div>
                </Styles>   
            )
        }
    }
}

export default Login;