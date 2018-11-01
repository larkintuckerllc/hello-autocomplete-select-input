import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AutocompleteView from './AutocompleteView';
import debounced from '../../utils/debounced';

const DEBOUNCE_MS = 500;
const NAVIGATION_HEIGHT_LANDSCAPE = 32;
const IOS_NAVIGATION_HEIGHT_PORTRAIT = 64;
const ANDROID_NAVIGATION_HEIGHT = 81;
const IOS_STATUS_BAR_HEIGHT = 20;
const TEXT_INPUT_HEIGHT = 80;
class Autocomplete extends PureComponent {
  fetchOptions = null;

  keyboardDidShowSub = null;

  keyboardDidHideSub = null;

  keyboardHeight = 0;

  lastFetchOptions = null;

  lastFetchOptionsValue = null;

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
    if (options.length !== 1) return;
    if (value !== this.lastFetchOptionsValue) return;
    const completedValue = options[0].key;
    this.returnWithValue(completedValue);
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
    this.lastFetchOptionsValue = value;
  }

  /* eslint-disable-next-line */
  updateOptions = debounced(DEBOUNCE_MS, this.updateOptionsSingular);

  updateOptionsListHeight = () => {
    const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
    const portrait = windowHeight > windowWidth;
    const androidStatusBarHeight = StatusBar.currentHeight;
    let optionsListHeight;
    switch (Platform.OS) {
      case 'ios':
        optionsListHeight = portrait
          ? windowHeight
            - this.keyboardHeight
            - IOS_STATUS_BAR_HEIGHT
            - IOS_NAVIGATION_HEIGHT_PORTRAIT
            - TEXT_INPUT_HEIGHT
          : windowHeight
            - this.keyboardHeight
            - NAVIGATION_HEIGHT_LANDSCAPE
            - TEXT_INPUT_HEIGHT;
        break;
      case 'android':
        optionsListHeight = windowHeight
          - this.keyboardHeight
          - androidStatusBarHeight
          - ANDROID_NAVIGATION_HEIGHT
          - TEXT_INPUT_HEIGHT;
        break;
      default:
    }
    this.setState({ optionsListHeight });
  }

  render() {
    const { options, optionsListHeight, value } = this.state;
    return (
      <View
        onLayout={this.handleLayout}
        style={{ flex: 1 }}
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
