import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styles from './styles';

/* eslint-disable-next-line */
class AutocompleteOption extends PureComponent {
  render() {
    const { option: { key } } = this.props;
    return (
      <Text style={styles.autocompleteOptionText}>{key}</Text>
    );
  }
}

AutocompleteOption.propTypes = {
  option: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default AutocompleteOption;
