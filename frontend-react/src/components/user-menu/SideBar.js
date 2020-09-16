import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .sidenav {
        color: #efefef;
		height: 100%;
		width: 180px;
		position: fixed;
		background: #eee;
		text-align: left;
		padding-right: 5px;
		padding-left: 5px;
		margin-right: auto;
		margin-left: auto;
		font-size: .875rem;
	}
	
	.sidenav a {
		color: #6d6d6d
	}

	.sidenav a:hover {
		color: #7291ff;
	  }
`;

class SideBar extends React.Component{

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
    
    render() {
        return (
			<Styles>
				<nav class="col-md-2 d-none d-md-block bg-light sidebar" className="sidenav">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="/home">
									&#10224; Dashboard <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/deposit">
									&#8679; Deposit
                                </a>
							</li>
                            <li class="nav-item">
                                <a class="nav-link" href="/withdraw">
									&#8681; Withdraw
                                </a>
                            </li>
							<li class="nav-item">
                                <a class="nav-link" href="/transfer">
									&#8660; Transfer
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/information">
									&#9786; User Information
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
			</Styles>
        )
    }
}

export default SideBar;