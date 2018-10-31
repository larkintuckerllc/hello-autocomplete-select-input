import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import AutocompleteView from './AutocompleteView';
import debounced from '../../utils/debounced';

class Autocomplete extends Component {
  fetchOptions = null;

  lastFetchOptions = null;

  mounted = true;

  state = {
    options: [],
    value: '',
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const value = getParam('value', null);
    if (value === null) throw new Error('Autocomplete navigate must have value');
    this.fetchOptions = getParam('fetchOptions', null);
    if (this.fetchOptions === null) throw new Error('Autocomplete navigate must have fetchOptions');
    this.setState({
      value,
    });
    this.updateOptions(value);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleBlur = () => {
    const { navigation: { getParam, navigate } } = this.props;
    const returnRoute = getParam('returnRoute', null);
    if (returnRoute === null) throw new Error('Autocomplete navigate must have returnRoute');
    const { value } = this.state;
    navigate(returnRoute, { value });
  }

  handleChangeText = (value) => {
    this.setState({ value });
    this.updateOptions(value);
  };

  updateOptionsSingular = async (value) => {
    const thisFetchOptions = this.fetchOptions(value); // WEIRD - NOT ABLE TO DIRECTLY SET
    this.lastFetchOptions = thisFetchOptions;
    const optionsList = await this.lastFetchOptions;
    if (!this.mounted) return;
    if (thisFetchOptions !== this.lastFetchOptions) return;
    const options = optionsList.map(option => ({ key: option }));
    this.setState({ options });
  }

  /* eslint-disable-next-line */
  updateOptions = debounced(1000, this.updateOptionsSingular);

  render() {
    const { options, value } = this.state;
    return (
      <AutocompleteView
        onBlur={this.handleBlur}
        onChangeText={this.handleChangeText}
        options={options}
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
