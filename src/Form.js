import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      diet: '',
      fun_fact: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getAnimalInfo = (e) => {
    fetch('http://localhost:3001/api/v1/animals', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        diet: this.state.diet,
        fun_fact: this.state.fun_fact
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    this.setState({
      id: '',
      name: '',
      diet: '',
      fun_fact: ''
    })
  }

  render() { 
    return (
      <form>
        <input className='id-input'
        type='text'
        name='id'
        placeholder='id#'
        value={this.state.id}
        onChange={this.handleChange}
      />
        <input className='name-input'
        type='text'
        name='name'
        value={this.state.name}
        onChange={this.handleChange}
        placeholder='name'
      />
        <input className='diet-input'
        type='text'
        name='diet'
        value={this.state.diet}
        onChange={this.handleChange}
        placeholder='diet'
      />
        <input className='fun-fact-input'
        type='text'
        name='fun_fact'
        value={this.state.fun_fact}
        onChange={this.handleChange}
        placeholder='fun fact'
      />
      <button onClick={(event) => this.getAnimalInfo(event)}>submit</button>
      </form>
    )
  }

}

export default Form;
