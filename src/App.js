import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameDisplay from './GameDisplay';

class App extends Component {

  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  updateScore = (answer) => {
    if (answer === 1) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
        numQuestions: currentState.numQuestions + 1
      }))
    } else if (answer === 0) {
      this.setState((currentState) => ({
        numQuestions: currentState.numQuestions + 1
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>

          <GameDisplay updateScore={this.updateScore} />

          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
