import React, { Component } from 'react'

class GameDisplay extends Component {

    constructor(props) {
        super(props)

        const arrayOfValues = this.makeQuestion();
        this.state = {
            value1: arrayOfValues[0],
            value2: arrayOfValues[1],
            value3: arrayOfValues[2],
            proposedAnswer: arrayOfValues[3],
            realAnswer: arrayOfValues[4],
        };
    }

    makeQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        const realAnswer = value1 + value2 + value3

        return [value1, value2, value3, proposedAnswer, realAnswer]
    }

    updateState = () => {
        const newValues = this.makeQuestion();
        this.setState((currentState) => ({
            value1: currentState.value1 = newValues[0],
            value2: currentState.value2 = newValues[1],
            value3: currentState.value3 = newValues[2],
            proposedAnswer: currentState.proposedAnswer = newValues[3],
            realAnswer: currentState.realAnswer = newValues[4],
        }))
    }

    validateAnswer = (answer) => {
        if (answer === 1) {
            if (this.state.proposedAnswer === this.state.realAnswer) {
                this.props.updateScore(1);
                this.updateState();
            } else {
                this.props.updateScore(0);
                this.updateState();
            }
        } else if (answer === 0) {
            if (this.state.proposedAnswer !== this.state.realAnswer) {
                this.props.updateScore(1)
                this.updateState();
            } else if (this.state.proposedAnswer === this.state.realAnswer) {
                this.props.updateScore(0);
                this.updateState();
            }
        }
    }

    render() {
        const {value1, value2, value3, proposedAnswer} = this.state

        return (

            <div>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>

                <button onClick={(e) => this.validateAnswer(1)}>
                    True
                </button>

                <button onClick={(e) => this.validateAnswer(0)}>
                    False
                </button>
            </div>
        );
    }
}

export default GameDisplay
