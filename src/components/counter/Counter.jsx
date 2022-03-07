import React, { Component } from 'react';

import './Counter.css';

import Display from './Display';
import Buttons from './Buttons';
import StepFrom from './StepForm';

class Counter extends Component {

    state = {
        number: this.props.startNumber || 0,
        step: this.props.startStep || 5,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step,
        })
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step,
        })
    };

    setNumber = (e) => {
        this.setState({
            number: +e.target.value
        });
    };

    setStep = (e) => {
        this.setState({
            step: +e.target.value
        });
    };

    render() {

        return (

            <div className="Contador">
                <h2>Contador</h2>
                <Display number={this.state.number} step={this.state.step} />
                <StepFrom number={this.state.number} step={this.state.step} setStateNumber={this.setNumber} setStateStep={this.setStep}/>
                <Buttons incremento={this.inc} decremento={this.dec} />
            </div>

        )

    }
    
}

export default Counter;