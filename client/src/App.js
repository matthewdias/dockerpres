import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const sayHelloFromWorld = async () => {
  try {
    let response = await fetch('http://localhost:4000/json')
    let json = await response.json()
    return json.message
  } catch (e) {
    console.log(e)
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, message: '' }
  }

  componentWillMount() {
    sayHelloFromWorld().then((message) => {
      this.setState({ loading: false, message })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.loading ? "Waiting for response..." : this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
