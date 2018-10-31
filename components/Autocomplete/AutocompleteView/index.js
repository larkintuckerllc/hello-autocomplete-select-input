import { PropTypes } from 'prop-types';
import React from 'react';
import { FlatList, TextInput, View } from 'react-native';
import AutocompleteOption from './AutocompleteOption';
import styles from './styles';

const AutocompleteView = ({
  onBlur,
  onChangeText,
  options,
  value,
}) => (
  <View style={{ flex: 1 }}>
    <TextInput
      autoFocus
      onBlur={onBlur}
      onChangeText={onChangeText}
      style={styles.autocompleteTextInput}
      value={value}
    />
    <FlatList
      data={options}
      renderItem={({ item }) => <AutocompleteOption option={item} />}
      style={{ flex: 1 }}
    />
  </View>
);

AutocompleteView.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string.isRequired,
};

export default AutocompleteView;
