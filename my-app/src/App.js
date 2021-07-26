import './App.css';
import Form from './components/Form/Form'

import React, { Component } from 'react'

export default class App extends Component {

  state={
    image:''
  }

handleFormSubmit = image=> {
    this.setState({image})
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}></Form>
      </div>
    )
  }
}
