import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .navbar-NavbarBrand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: withTheme;
        }
    } 
`;

class NavigationBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        };
    }
    
    render() {
        let navbar;
        if (this.state.isLoggedIn === 'true') {
            navbar = <Nav className="nl-auto">
                        <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item>
                    </Nav>;
            
        } else {
            navbar = <Nav className="nl-auto">
                        <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    </Nav>;
        }
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">DollarsBank | Your experience, our future.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            {navbar}
                        </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}

export default NavigationBar;