import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bankbusiness from '../images/bankbusiness.jpg';

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome!</h1>
                    <p>I'm just happy to be here.</p>
            </Container>
        </Jumbo>
    </Styles>
)