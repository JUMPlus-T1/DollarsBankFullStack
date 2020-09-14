import React from 'react';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            accountProfile: localStorage.getItem('accountProfile')
        };
    }

    onDeposit = () => {
        this.props.history.push('/deposit');
    }

    onWithdraw = () => {
        this.props.history.push('/withdraw');   
    }

    onTransfer = () => {
        this.props.history.push('/transfer');   
    }

    onInformation = () => {
        this.props.history.push('/information');   
    }

    onHistory = () => {
        this.props.history.push('/history');   
    }

    render() {
        
        console.log();
        if (this.state.isLoggedIn === 'true') {
            var json = this.state.accountProfile;
            var account = JSON.parse(json);
            return (  
                <div>
                    <h1>Hello {account.name}!</h1>
                    <h2>Your account balance is {Number(account.balance).toFixed(2)}</h2>
                    <h2>Menu</h2>
                    <button onClick={this.onDeposit}>Deposit</button>
                    <button onClick={this.onWithdraw}>Withdraw</button>
                    <button onClick={this.onTransfer}>Transfer</button>
                    <button onClick={this.onInformation}>User Information</button>
                    <button onClick={this.onHistory}>Transaction History</button>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default Home;