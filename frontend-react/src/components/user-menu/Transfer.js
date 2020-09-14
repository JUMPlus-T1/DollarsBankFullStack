import React from 'react';
import { Redirect } from 'react-router-dom';
import AccountService from '../../services/AccountService';

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

    onHome = () => {
        this.props.history.push('/home');
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            return (
                <div>
                    <h1>Transfer</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label for="acct">Recipient's Account ID:</label>
                        <input type="number" id="acct" name="acct" step="any" min="0" onChange={this.handleTransferIdChange}/>
                        <label for="amount">Transfer amount:</label>
                        <input type="number" id="amount" name="amount" step=".01" min="0.01" max="100000" onChange={this.handleAmountChange}/>
                        <button>Submit</button>
                    </form>
                    <button onClick={this.onHome}>Back</button>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Contact;