import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Dimensions, Keyboard, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AutocompleteView from './AutocompleteView';
import debounced from '../../utils/debounced';

const DEBOUNCE_MS = 500;
const NAVIGATION_HEIGHT_LANDSCAPE = 32;
const NAVIGATION_HEIGHT_PORTRAIT = 64;
const STATUS_BAR_HEIGHT = 20;
const TEXT_INPUT_HEIGHT = 80;
class Autocomplete extends Component {
  fetchOptions = null;

  keyboardDidShowSub = null;

  keyboardDidHideSub = null;

  keyboardHeight = 0;

  lastFetchOptions = null;

  mounted = true;

  navigating = false;

  state = {
    options: [],
    optionsListHeight: 200,
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
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
  }

  componentWillUnmount() {
    this.mounted = false;
    this.keyboardDidHideSub.remove();
    this.keyboardDidShowSub.remove();
  }

  handleChangeText = (value) => {
    this.setState({ value });
    this.updateOptions(value);
  };

  handleInputBlur = () => {
    if (this.navigating) return;
    const { value } = this.state;
    const { options } = this.state;
    const optionStrings = options.map(option => option.key);
    const checkValue = optionStrings.length === 1
      ? optionStrings[0]
      : value;
    if (!optionStrings.includes(checkValue)) return;
    this.returnWithValue(checkValue);
  }

  handleKeyboardDidHide = () => {
    this.keyboardHeight = 0;
    this.updateOptionsListHeight();
  }

  handleKeyboardDidShow = ({ endCoordinates: { height } }) => {
    this.keyboardHeight = height;
    this.updateOptionsListHeight();
  }

  handleLayout = () => {
    this.updateOptionsListHeight();
  };

  handleOptionPress = (value) => {
    this.returnWithValue(value);
  }

  handleWillBlur = () => {
    this.navigating = true;
  }

  returnWithValue = (value) => {
    const { navigation: { getParam, navigate } } = this.props;
    const returnRoute = getParam('returnRoute', null);
    if (returnRoute === null) throw new Error('Autocomplete navigate must have returnRoute');
    navigate(returnRoute, { value });
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
  updateOptions = debounced(DEBOUNCE_MS, this.updateOptionsSingular);

  updateOptionsListHeight = () => {
    const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
    const portrait = windowHeight > windowWidth;
    const optionsListHeight = portrait
      ? windowHeight
        - this.keyboardHeight
        - STATUS_BAR_HEIGHT
        - NAVIGATION_HEIGHT_PORTRAIT
        - TEXT_INPUT_HEIGHT
      : windowHeight
        - this.keyboardHeight
        - NAVIGATION_HEIGHT_LANDSCAPE
        - TEXT_INPUT_HEIGHT;
    this.setState({ optionsListHeight });
  }

  render() {
    const { options, optionsListHeight, value } = this.state;
    return (
      <View
        onLayout={this.handleLayout}
      >
        <NavigationEvents
          onWillBlur={this.handleWillBlur}
        />
        <AutocompleteView
          onBlur={this.handleInputBlur}
          onChangeText={this.handleChangeText}
          onOptionPress={this.handleOptionPress}
          options={options}
          optionsListHeight={optionsListHeight}
          value={value}
        />
      </View>
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
