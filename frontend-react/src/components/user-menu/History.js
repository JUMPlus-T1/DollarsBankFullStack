import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .t1 {
        font-size: 60%;
    }
`;

class History extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountProfile: localStorage.getItem('accountProfile')
        };
    }


    render() {
			let json = this.state.accountProfile;
			let account = JSON.parse(json);
			var historyList = account.history.split('|');
			const final = [];
			for (let history of historyList) {
				if (history !== ''){
                    let h = history.split('%'); 
                    final.push(<tr key={h}><td>{h[0]}</td><td>{h[1]}</td><td>{h[2]}</td></tr>);
                }
					
			}

            return (
                <div>
                    <Styles>
                        <table class="table table-striped table-sm" >
                            <thead className="t1">
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody className="t1">
                                {final}
                            </tbody>
                        </table>
                    </Styles>
                </div>
            )
    }
}

export default History;