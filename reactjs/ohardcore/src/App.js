import React, { Component } from 'react'
//import './App.css'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:3001/posts')
      .then(response => this.setState({username: response.data[0].title}))
      //.then(response => console.log(response.data[0].title))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}
export default App