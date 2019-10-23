// import component from react
import React, { Component } from 'react';
import axios from 'axios';

// create EditTodo component
class EditTodo extends Component {
    constructor(props) {
        super(props);
        // bind this
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoAssigned = this.onChangeTodoAssigned.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // set the components initial state
        this.state = {
            todo_description: '',
            todo_assigned: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    // use the componentdidmount lifecycle method to req data from server and set the state of the component
    componentDidMount() {
        axios.get(`http://localhost:5000/todos/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_assigned: response.data.todo_assigned,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            // get the value from the corresponding input element from the form and assign it to the todo_description
            todo_description: e.target.value
        })
    }

    onChangeTodoAssigned(e) {
        this.setState({
            todo_assigned: e.target.value
        })
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        })
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        })
    }

    onSubmit(e) {
        // prevent the page from reloading on submit
        e.preventDefault();
        // create an object containing the updates based on the components current state
        const updatedTodo = {
            todo_description: this.state.todo_description,
            todo_assigned: this.state.todo_assigned,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        // send the update object to our server to be updated in the database
        axios.patch(`http://localhost:5000/todos/${this.props.match.params.id}`, updatedTodo)
            .then(response => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

            this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <h3>Update to Todo Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_description}
                               onChange={this.onChangeTodoDescription}
                               />
                    </div>
                    <div className="form-group">
                        <label>Assigned:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_assigned}
                               onChange={this.onChangeTodoAssigned}
                               />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.todo_priority === 'Low'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">Low</label> 
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.todo_priority === 'Medium'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">Medium</label> 
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.todo_priority === 'High'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">High</label> 
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="completedCheckbox"
                                   name="completedCheckbox"
                                   onChange={this.onChangeTodoCompleted}
                                   checked={this.state.todo_completed}
                                   value={this.state.todo_completed}
                                   />
                            <label className="form-check-lable" htmlFor="completedCheckbox">Completed</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Todo" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

// export EditTodo component
export default EditTodo;