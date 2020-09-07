import axios from 'axios';

const ACCOUNT_REST_API_URL = 'http://localhost:8080/api';

let axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		"Access-Control-Allow-Origin": "*",
	}
  };

class AccountService {
	
	
	getAccount(postData){
		axios.post(ACCOUNT_REST_API_URL + '/account', postData, axiosConfig)
			.then(response => {
				console.log(response);
				console.log(response.data);
			});
	}
}

export default new AccountService();