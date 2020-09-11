import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.login-card {
    min-height: 60vh;
}

.registerMessage {
    margin-top: 10vh;
}
`;
export const Login = () => (
<Styles>
    <div>
        <form>
            <div>  
                <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"/>
            </div>
            <div className="form-check"></div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >Login</button>
        </form>
        
        <div className="registerMessage">
            <span>Dont have an account? </span>
                <button type="submit" className="btn btn-primary">Register Here!</button>
        </div>
    </div>
</Styles>   
)