import React from 'react';
import TodoService from '../services/TodoService';

class TodoComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            todos:[]
        }
    }

    componentDidMount(){
        TodoService.getTodos().then((response) => {
            this.setState({ todos: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Todo List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Todo Id</td>
                            <td> Todo Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                <tr key = {todo.id}>
                                     <td> {todo.id}</td>   
                                     <td> {todo.description}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default TodoComponent