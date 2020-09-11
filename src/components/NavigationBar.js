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

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">React Bank | Your experience, our future.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nl-auto">
                        <Nav.Item><Nav.Link href="/Home">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Account">Account</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Contact">Contacts</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </Styles>
)
