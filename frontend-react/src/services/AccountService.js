import axios from 'axios';

const ACCOUNT_REST_API_URL = 'http://localhost:8080/api';

class AccountService {

	getAccount(){
		return axios.get(ACCOUNT_REST_API_URL + '/login');
	}
}

export default new AccountService();