import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Animal from './Animal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: ''
    };
  }

  componentDidMount() {
    return fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(data => this.setState({animals: data}))
  }

  render () {
    if(this.state.animals === '') {
      return <h2>Loading...</h2>
    } else {
      return (
        <section>
          <h1>Animals</h1>
          <Form />
          {this.state.animals.map(animal => <Animal {...animal}/>)}
        </section>
      )
    }
  };
}

export default App;
