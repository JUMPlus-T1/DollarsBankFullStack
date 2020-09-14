import React from 'react';
import { Redirect } from 'react-router-dom';

class History extends React.Component {

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
			var history = account.history.split('|');
			const final = [];
			for (let h of history) {
				if (h !== '')
					final.push(<li key={h}>{h}</li>);
			}

            return (
                <div>
                    <h1>Transaction History</h1>
					<ul>{final}</ul>
					<button onClick={this.onHome}>Back</button>
                </div>
            )
        } else {
            return ( <Redirect to="/error" /> )
        }
    }
}

export default History;