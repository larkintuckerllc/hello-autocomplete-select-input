import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

class FormView extends PureComponent {
  render() {
    const {
      onAChangeText,
      onBChangeText,
      onCChangeText,
      onDPress,
      valueA,
      valueB,
      valueC,
      valueD,
    } = this.props;
    return (
      <KeyboardAwareScrollView style={styles.form}>
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text style={styles.formLabel}>A</Text>
        <TextInput
          onChangeText={onAChangeText}
          style={styles.formTextInput}
          value={valueA}
        />
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text style={styles.formLabel}>B</Text>
        <TextInput
          onChangeText={onBChangeText}
          style={styles.formTextInput}
          value={valueB}
        />
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text style={styles.formLabel}>C</Text>
        <TextInput
          onChangeText={onCChangeText}
          style={styles.formTextInput}
          value={valueC}
        />
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text style={styles.formLabel}>D</Text>
        <TouchableOpacity onPress={onDPress}>
          <Text style={styles.formAutocomplete}>{valueD}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}

FormView.propTypes = {
  onAChangeText: PropTypes.func.isRequired,
  onBChangeText: PropTypes.func.isRequired,
  onCChangeText: PropTypes.func.isRequired,
  onDPress: PropTypes.func.isRequired,
  valueA: PropTypes.string.isRequired,
  valueB: PropTypes.string.isRequired,
  valueC: PropTypes.string.isRequired,
  valueD: PropTypes.string.isRequired,
};

export default FormView;
