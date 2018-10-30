import { PropTypes } from 'prop-types';
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

  handleDPress = () => {
    const { navigation: { navigate } } = this.props;
    navigate('Autocomplete');
  }

  render() {
    const { valueA, valueB, valueC } = this.state;
    return (
      <FormView
        onAChangeText={this.handleAChangeText}
        onBChangeText={this.handleBChangeText}
        onCChangeText={this.handleCChangeText}
        onDPress={this.handleDPress}
        valueA={valueA}
        valueB={valueB}
        valueC={valueC}
      />
    );
  }
}

Form.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Form;
