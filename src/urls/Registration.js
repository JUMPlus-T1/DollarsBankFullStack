import React from 'react';
import styled from 'styled-components';

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
export const Registration = () => (
<Styles>
    <div>
        <form>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">First Name</label>
                    <input type="password" 
                        className="form-control" 
                        id="fname" 
                        placeholder="First Name"/>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                    <input type="password" 
                        className="form-control" 
                        id="lname" 
                        placeholder="Last Name"/>
            </div>
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
                <label htmlFor="exampleInputPassword1">Address</label>
                    <input type="password" 
                        className="form-control" 
                        id="address" 
                        placeholder="Address"/>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Phone Number</label>
                    <input type="password" 
                        className="form-control" 
                        id="pnumber" 
                        placeholder="###-###-####"/>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">SSN</label>
                    <input type="password" 
                        className="form-control" 
                        id="ssn" 
                        placeholder="###-##-####"/>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"/>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"/>
            </div>
            <div className="form-check"></div>
        </form>
    </div>
</Styles>   
)