import React, { Component } from 'react';
import './App.css';
import vegetables from './images/vegetables.jpg'
import forks from './images/forked.jpg'
class App extends Component {
  render() {
    return (
      <div className="main-box">

        <img src={vegetables} />
        <div className="content">

          <div className="left">
            <img src={forks}/>
            <text>Welcome To</text>
            <text>Good Eats</text>
          </div>

          <div className="right">
            <div className="login">
              <div className="username">
                <text>Username: </text>
                <input/>
              </div>
              <div className="password">
                <text>Password:</text>
                <input/>
              </div>
            </div>
            <div className="buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
