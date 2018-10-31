import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';


/* eslint-disable-next-line */
class AutocompleteOption extends PureComponent {

  handlePress = () => {
    const { onOptionPress, option: { key } } = this.props;
    onOptionPress(key);
  };

  render() {
    const { option: { key } } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.autocompleteOptionText}>{key}</Text>
      </TouchableOpacity>
    );
  }
}

AutocompleteOption.propTypes = {
  onOptionPress: PropTypes.func.isRequired,
  option: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default AutocompleteOption;
