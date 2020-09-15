import React from 'react';
import styled from 'styled-components';
import coins from '../images/coins.jpg';

const Styles = styled.div`
    .about {
        background: url(${coins}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 280px;
        position: relative;
        z-index: -2;
    }
`;

class About extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            account: localStorage.getItem('accountProfile')
        }
    }

    render() {
        return (
            <div>
                <Styles>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" className="about">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal">About Us</h1>
                        <p class="lead font-weight-normal">Our mission is to provide you all your banking needs.</p>
                    </div>
                    <div class="product-device box-shadow d-none d-md-block"></div>
                    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>
                <i class="fas fa-h1 ">We are dedicated to helping you manage your money the way you want. So you don't have to worry much, okay?</i>
                </Styles>
            </div>
        )
    }
}

export default About;