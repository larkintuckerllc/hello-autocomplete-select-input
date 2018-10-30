import { PropTypes } from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const AutocompleteView = ({
  onBlur,
  onChangeText,
  value,
}) => (
  <TextInput
    autoFocus
    onBlur={onBlur}
    onChangeText={onChangeText}
    style={styles.autocompleteTextInput}
    value={value}
  />
);

AutocompleteView.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AutocompleteView;
