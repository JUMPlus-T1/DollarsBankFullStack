import React from 'react';
import { Redirect } from 'react-router-dom';
import AccountService from '../../services/AccountService';

class Deposit extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile'),
            deposit: 0
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        let json = this.state.accountProfile;
        let account = JSON.parse(json);
        var deposit = this.state.deposit;
        AccountService.depositAccount(account.id + '=' + deposit);
    }

    handleDepositChange = event => {
        this.setState({ deposit: event.target.value });
    }

    onHome = () => {
        this.props.history.push('/home');
    }

    render() {
        if (this.state.isLoggedIn === 'true') {
            return (
                <div>
                    <h1>Deposit</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label for="deposit">Deposit amount:</label>
                        <input type="number" id="deposit" name="deposit" step=".01" min="0.01" max="100000" onChange={this.handleDepositChange}/>
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

export default Deposit;