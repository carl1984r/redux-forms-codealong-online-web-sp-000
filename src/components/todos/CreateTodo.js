import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };
  
  render() {
    return(
      <div>
        Create Todo Component
      </div>
    )
  }
}

export default CreateTodo;
