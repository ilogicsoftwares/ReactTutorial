import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      tittle: '',
      tarea: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.agregaTask(this.state);
      this.setState({
      tittle: '',
      tarea: ''
     });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card mt-4">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="tittle"
              className="form-control"
              value={this.state.tittle}
              onChange={this.handleInputChange}
              placeholder="tittle"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="tarea"
              className="form-control"
              value={this.state.tarea}
              onChange={this.handleInputChange}
              placeholder="tarea"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
