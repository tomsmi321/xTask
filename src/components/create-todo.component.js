// import component from react
import React, { Component } from 'react';

// create CreateTodo component
class CreateTodo extends Component {
    constructor(props) {
        super(props);
        // bind event handling methods to 'this' object
        // neccessary to get at the state within our methods
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoAssigned = this.onChangeTodoAssigned.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_assigned: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
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

    onSubmit(e) {
        e.preventDefault();
        // insert submit logic
        console.log('From submitted successfully');
        console.log(`todo_description: ${this.state.todo_description}`);
        console.log(`todo_assigned: ${this.state.todo_assigned}`);
        console.log(`todo_priority: ${this.state.todo_priority}`);
        console.log(`todo_completed: ${this.state.todo_completed}`);

        // when the user presses submit we want to display a new clear form
        this.setState({
            todo_description: '',
            todo_assigned: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.todo_description} 
                               onChange={this.onChangeTodoDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Assigned: </label>
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
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary"/>
                        
                    </div>
                </form>
            </div>
        )
    }
}

// export CreateTodo component
export default CreateTodo;