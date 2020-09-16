import React from 'react';
import { Redirect } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import SideBar from './SideBar';
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

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile'),
            recipient: -1,
            amount: 0
        };
    }

    handleTransferIdChange = event => {
        this.setState({ recipient: event.target.value });
    }

    handleAmountChange = event => {
        this.setState({ amount: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let json = this.state.accountProfile;
        let account = JSON.parse(json);
        let amount = this.state.amount;
        let recipient = this.state.recipient;
        var str = account.id.toString() + 'to' + recipient.toString() + '=' + amount;
        AccountService.transferAccount(str);
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            return (
                <div>
                    <SideBar/>
                    <Styles>
                    <div className="dash">
                        <h1 class="h2">Transfer</h1>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label htmlFor="recipientId">Recipient's Account ID:</label>
                                <input type="number" class="form-control" id="recipientId" aria-describedby="recipientHelp" step="any" min="0" placeholder="XXXXXXXX" onChange={this.handleTransferIdChange}/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="transferAmount">Transfer amount:</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">$</span>
                                        <span class="input-group-text">0.00</span>
                                    </div>
                                    <input type="number" id="transferAmount" class="form-control" step=".01" min="0.01" max="100000" aria-label="Amount" onChange={this.handleAmountChange}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                        </form>
                    </div>
                    </Styles>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Contact;