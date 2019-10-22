import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';

// import logo
import logo from './assets/xTask.png';

class App extends Component {
  render() {
      return (
        <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
              <img src={logo} width="85" height="30" alt="xTask" />
            </div>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>


          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' exact component={EditTodo} />
          <Route path='/create' exact component={CreateTodo} />
        </div>
        </Router>
    );
  }
}

export default App;
