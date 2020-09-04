import axios from 'axios';

const TODOS_REST_API_URL = 'http://localhost:8080/api/todos';

class TodoService {

    getTodos(){
        return axios.get(TODOS_REST_API_URL);
    }
}

export default new TodoService();