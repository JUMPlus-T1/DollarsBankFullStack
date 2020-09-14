import axios from 'axios';

const ACCOUNT_REST_API_URL = 'http://localhost:8080/api';

class AccountService {
	
	
	getAccount(postData){
		axios.post(ACCOUNT_REST_API_URL + '/account', postData)
			.then(response => {
				console.log(response); //Handle account info to frontend
				
				if (response.data === "") {
					localStorage.setItem('isLoggedIn', false);
					console.log("Invalid with email/password combination.");
				}
				else {
					localStorage.setItem('accountProfile', JSON.stringify(response.data));
					localStorage.setItem('isLoggedIn', true);
				}
			});
	}

	createAccount(postData){
		axios.post(ACCOUNT_REST_API_URL + '/add-account', postData)
			.then(response => {
				if (response.data) {
					console.log("New account created.")
				}
				else
					console.log("Error creating account."); //Handle account info to frontend
			});
	}

	depositAccount(postData){
		console.log(postData);
		axios.post(ACCOUNT_REST_API_URL + '/deposit', postData)
			.then(response => {
				if (response.data === "") {
					console.log("Invalid input.");
				}
				else {
					localStorage.removeItem('accountProfile');
					localStorage.setItem('accountProfile', JSON.stringify(response.data));
					console.log("Deposit success.");
				}
			});
	}

	withdrawAccount(postData){
		axios.post(ACCOUNT_REST_API_URL + '/withdraw', postData)
			.then(response => {
				if (response.data === "") {
					console.log("Invalid input.");
				}
				else {
					localStorage.removeItem('accountProfile');
					localStorage.setItem('accountProfile', JSON.stringify(response.data));
					console.log("Withdraw success.");
				}
			});
	}

	transferAccount(postData){
		axios.post(ACCOUNT_REST_API_URL + '/transfer', postData)
			.then(response => {
				if (response.data === "") {
					console.log("Invalid transfer.");
				}
				else {
					localStorage.removeItem('accountProfile');
					localStorage.setItem('accountProfile', JSON.stringify(response.data));
					console.log("Transfer success.");
				}
			});
	}

}

export default new AccountService();