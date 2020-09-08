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
					localStorage.setItem('isLoggedIn', true);
					localStorage.setItem('accountProfile', response.data);
				}
			});
	}

	createAccount(postData){
		axios.post(ACCOUNT_REST_API_URL + '/add-account', postData)
			.then(response => {
				console.log(response);
				console.log(response.data); //Handle account info to frontend
			});
	}
}

export default new AccountService();