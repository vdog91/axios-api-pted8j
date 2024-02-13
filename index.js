import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      users: []
    };
  }

  componentDidMount() {
    let self = this;
    axios.get('https://599d6a620a785b0011f4f6c8.mockapi.io/users')
      .then(function (response) {
        self.setState({
          users: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        {this.state.users.map(item => <p>{item.name}</p>)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
