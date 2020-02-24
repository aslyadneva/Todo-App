import React, {Component} from 'react';
import uuid from 'uuid/v4';

import './NewTodoForm.css';


class NewTodoForm extends Component {
  constructor (props) {
    super (props);
    this.state = {task: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.createTodo({...this.state, id: uuid(), completed: false});
    this.setState({task: ""});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <input
          onChange={this.handleChange}
          placeholder="New Task"
          value={this.state.task}
          type="text"
          name="task"
        />
        <button>Create Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
