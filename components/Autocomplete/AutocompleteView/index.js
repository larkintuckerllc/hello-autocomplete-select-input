import { PropTypes } from 'prop-types';
import React from 'react';
import { FlatList, TextInput, View } from 'react-native';
import AutocompleteOption from './AutocompleteOption';
import styles from './styles';

const AutocompleteView = ({
  onBlur,
  onChangeText,
  onOptionPress,
  options,
  optionsListHeight,
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
    <View style={{ height: optionsListHeight }}>
      <FlatList
        data={options}
        keyboardShouldPersistTaps="always"
        renderItem={({ item }) => (
          <AutocompleteOption
            onOptionPress={onOptionPress}
            option={item}
          />
        )}
        style={{ flex: 1 }}
      />
    </View>
  </View>
);

AutocompleteView.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onOptionPress: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
  })).isRequired,
  optionsListHeight: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default AutocompleteView;
