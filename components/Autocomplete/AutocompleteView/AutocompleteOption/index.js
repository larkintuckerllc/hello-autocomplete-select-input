import { PropTypes } from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const AutocompleteOption = ({ option }) => (
  <Text style={styles.autocompleteOptionText}>{option.key}</Text>
);

AutocompleteOption.propTypes = {
  option: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default AutocompleteOption;
