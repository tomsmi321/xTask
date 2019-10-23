// import component from react
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Todo(props) {
    return (
        <tr>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_assigned}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_completed}</td>
            <td>
                <Link to={`/edit/${props.todo._id}`}>Edit</Link>
            </td>
        </tr>
    )
}

// create TodoList component
class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

    }

    componentDidMount() {
        // make a get request to our server to retrieve the todos
        axios.get('http://localhost:5000/todos')
            .then(res => {
                // use the retrieved data to set the state of todos-list component
                // note the response will already be an array object
                this.setState({todos: res.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    // when the user is redirected back the page will be updated
    componentDidUpdate() {
        axios.get('http://localhost:5000/todos')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    todoList() {
        return this.state.todos.map((todo, index) => {
            return <Todo todo={todo} key={index} /> 
        })
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Assigned</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    } 
} 

// export TodosList component
export default TodosList