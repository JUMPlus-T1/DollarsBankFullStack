import React from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from './SideBar';
import styled from 'styled-components';

const Styles = styled.div`
    .dash {
        margin-left: 200px; /* Same width as the sidebar + left position in px */
        font-size: 28px; /* Increased text to enable scrolling */
        padding: 0px 10px;
    }
    .t1 {
        font-size: 80%;
        padding: 20px 30px;
    }
`;

class Information extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    onHome = () => {
        this.props.history.push('/home');
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            let json = this.state.accountProfile;
            let account = JSON.parse(json);
            return (
                <div>
                    <SideBar/>
                    <Styles>
                    <div className="dash">
                        <h1 class="h2">User Information</h1>
                        <hr/>
                        <div className="t1">
                            <div class="bg-light d-flex justify-content-between">
                                <div>Name</div>
                                <div><strong>{account.name}</strong></div>
                            </div>
                            <div class="bg-light d-flex justify-content-between">
                                <div>Address</div>
                                <div><strong>{account.address}</strong></div>
                            </div>
                            <div class="bg-light d-flex justify-content-between">
                                <div>Phone Number</div>
                                <div><strong>{account.phone}</strong></div>
                            </div>
                            <div class="bg-light d-flex justify-content-between">
                                <div>Email</div>
                                <div><strong>{account.email}</strong></div>
                            </div>
                        </div>
                        
                    </div>
                    </Styles>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
        
    }
}

export default Information;