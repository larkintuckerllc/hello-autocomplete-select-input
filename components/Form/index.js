import React, { Component } from 'react';
import FormView from './FormView';

class Form extends Component {
  state = {
    valueA: '',
    valueB: '',
    valueC: '',
  };

  handleAChangeText = text => this.setState({ valueA: text });

  handleBChangeText = text => this.setState({ valueB: text });

  handleCChangeText = text => this.setState({ valueC: text });

  render() {
    const { valueA, valueB, valueC } = this.state;
    return (
      <FormView
        onAChangeText={this.handleAChangeText}
        onBChangeText={this.handleBChangeText}
        onCChangeText={this.handleCChangeText}
        valueA={valueA}
        valueB={valueB}
        valueC={valueC}
      />
    );
  }
}

export default Form;
