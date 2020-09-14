import React from 'react';
import { Redirect } from 'react-router-dom';
import AccountService from '../../services/AccountService';

class Withdraw extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile'),
            withdraw: 0
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        let json = this.state.accountProfile;
        let account = JSON.parse(json);
        var withdraw = this.state.withdraw;
        AccountService.withdrawAccount(account.id + '=' + withdraw);
    }

    handleWithdrawChange = event => {
        this.setState({ withdraw: event.target.value });
    }

    onHome = () => {
        this.props.history.push('/home');
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            return (
                <div>
                    <h1>Withdraw</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label for="withdraw">Withdraw amount:</label>
                        <input type="number" id="withdraw" name="withdraw" step=".01" min="0.01" max="100000" onChange={this.handleWithdrawChange}/>
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

export default Withdraw;