import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import FormView from './FormView';
import fetchStates from '../../../apis/states';

const DELAY = 500;
const delay = () => new Promise(resolve => setTimeout(() => resolve(), DELAY));

class Form extends PureComponent {
  refBLabel = null;

  refBInput = null;

  refCLabel = null;

  refCInput = null;

  refD = null;

  refScroller = null;

  refELabel = null;

  refEInput = null;

  state = {
    valueA: '',
    valueB: '',
    valueC: '',
    valueD: '',
    valueE: '',
  };

  measureRefBY = () => new Promise(resolve => this.refBLabel.measure((_, y) => resolve(y)));

  measureRefCY = () => new Promise(resolve => this.refCLabel.measure((_, y) => resolve(y)));

  measureRefDY = () => new Promise(resolve => this.refD.measure((_, y) => resolve(y)));

  measureRefEY = () => new Promise(resolve => this.refELabel.measure((_, y) => resolve(y)));

  handleAChangeText = text => this.setState({ valueA: text });

  handleBChangeText = text => this.setState({ valueB: text });

  handleCChangeText = text => this.setState({ valueC: text });

  handleDPress = () => {
    const { navigation: { navigate } } = this.props;
    const { valueD } = this.state;
    navigate('Autocomplete', {
      fetchOptions: fetchStates,
      returnRoute: 'Home',
      value: valueD,
    });
  }

  handleEChangeText = text => this.setState({ valueE: text });

  handleABlur = async () => {
    await delay();
    const refBY = await this.measureRefBY();
    this.refScroller.scrollToPosition(0, refBY);
    await delay();
    this.refBInput.focus();
  };

  handleBBlur = async () => {
    await delay();
    const refCY = await this.measureRefCY();
    this.refScroller.scrollToPosition(0, refCY);
    await delay();
    this.refCInput.focus();
  };

  handleCBlur = async () => {
    await delay();
    const refDY = await this.measureRefDY();
    this.refScroller.scrollToPosition(0, refDY);
  };

  handleEBlur = async () => {
    await delay();
    this.refScroller.scrollToEnd();
  };

  handleBLabelRef = (ref) => {
    this.refBLabel = ref;
  };

  handleBInputRef = (ref) => {
    this.refBInput = ref;
  };

  handleCLabelRef = (ref) => {
    this.refCLabel = ref;
  };

  handleCInputRef = (ref) => {
    this.refCInput = ref;
  };

  handleDRef = (ref) => {
    this.refD = ref;
  };

  handleELabelRef = (ref) => {
    this.refELabel = ref;
  };

  handleEInputRef = (ref) => {
    this.refEInput = ref;
  };

  handleScrollerRef = (ref) => {
    this.refScroller = ref;
  }

  handleDidFocus = async ({ state: { params: { value } = {} } }) => {
    if (value === undefined) return;
    this.setState({
      valueD: value,
    });
    const refEY = await this.measureRefEY();
    this.refScroller.scrollToPosition(0, refEY);
    await delay();
    this.refEInput.focus();
  }

  render() {
    const {
      valueA,
      valueB,
      valueC,
      valueD,
      valueE,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onDidFocus={this.handleDidFocus}
        />
        <FormView
          onABlur={this.handleABlur}
          onAChangeText={this.handleAChangeText}
          onBBlur={this.handleBBlur}
          onBChangeText={this.handleBChangeText}
          onBInputRef={this.handleBInputRef}
          onBLabelRef={this.handleBLabelRef}
          onCBlur={this.handleCBlur}
          onCInputRef={this.handleCInputRef}
          onCLabelRef={this.handleCLabelRef}
          onCChangeText={this.handleCChangeText}
          onDPress={this.handleDPress}
          onDRef={this.handleDRef}
          onEBlur={this.handleEBlur}
          onEInputRef={this.handleEInputRef}
          onELabelRef={this.handleELabelRef}
          onEChangeText={this.handleEChangeText}
          onScrollerRef={this.handleScrollerRef}
          valueA={valueA}
          valueB={valueB}
          valueC={valueC}
          valueD={valueD}
          valueE={valueE}
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
