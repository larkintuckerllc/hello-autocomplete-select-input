import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import AutocompleteView from './AutocompleteView';

class Autocomplete extends Component {
  state = {
    value: '',
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const value = getParam('value', null);
    if (value === null) throw new Error('Autocomplete navigate must have value');
    this.setState({
      value,
    });
  }

  handleBlur = () => {
    const { navigation: { getParam, navigate } } = this.props;
    const returnRoute = getParam('returnRoute', null);
    if (returnRoute === null) throw new Error('Autocomplete navigate must have returnRoute');
    const { value } = this.state;
    navigate(returnRoute, { value });
  }

  handleChangeText = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <AutocompleteView
        onBlur={this.handleBlur}
        onChangeText={this.handleChangeText}
        value={value}
      />
    );
  }
}

Autocomplete.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Autocomplete;
