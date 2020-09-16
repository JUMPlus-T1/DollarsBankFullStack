import React from 'react';
import {Redirect} from 'react-router-dom';
import SideBar from './SideBar';
import History from './History';
import styled from 'styled-components';

const Styles = styled.div`
    .dash {
        margin-left: 200px; /* Same width as the sidebar + left position in px */
        font-size: 28px; /* Increased text to enable scrolling */
        padding: 0px 10px;
    }
    .t1 {
        font-size: 60%;
    }
`;

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    render() {
        
        console.log();
        if (this.state.isLoggedIn === 'true') {
            var json = this.state.accountProfile;
            var account = JSON.parse(json);
            return (  
                <div>
                    <SideBar/>
                    <Styles>
                    <div className="dash">
                        <h1 class="h2">Dashboard</h1>
                        <hr/>
                        <div class="card">
                            <h5 class="card-header"><a href="#">CHECKINGS ACCOUNT ..xx{account.id}</a></h5>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div className="t1">
                                        Available Balance:
                                    </div>
                                    <div>
                                        ${Number(account.balance).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <h1 class="h4">Transaction History</h1>
                        <History/>
                    </div>
                    </Styles>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Home;