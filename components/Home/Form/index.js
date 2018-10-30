import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import FormView from './FormView';

class Form extends Component {
  state = {
    valueA: '',
    valueB: '',
    valueC: '',
    valueD: '',
  };

  handleAChangeText = text => this.setState({ valueA: text });

  handleBChangeText = text => this.setState({ valueB: text });

  handleCChangeText = text => this.setState({ valueC: text });

  handleDPress = () => {
    const { navigation: { navigate } } = this.props;
    const { valueD } = this.state;
    navigate('Autocomplete', {
      returnRoute: 'Home',
      value: valueD,
    });
  }

  handleDidFocus = ({ state: { params: { value } = {} } }) => {
    if (value === undefined) return;
    this.setState({
      valueD: value,
    });
  }

  render() {
    const {
      valueA,
      valueB,
      valueC,
      valueD,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onDidFocus={this.handleDidFocus}
        />
        <FormView
          onAChangeText={this.handleAChangeText}
          onBChangeText={this.handleBChangeText}
          onCChangeText={this.handleCChangeText}
          onDPress={this.handleDPress}
          valueA={valueA}
          valueB={valueB}
          valueC={valueC}
          valueD={valueD}
        />
      </View>
    );
  }
}

Form.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Form;
