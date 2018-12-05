import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

class FormView extends PureComponent {
  render() {
    const {
      onABlur,
      onAChangeText,
      onBBlur,
      onBChangeText,
      onBInputRef,
      onBLabelRef,
      onCBlur,
      onCInputRef,
      onCLabelRef,
      onCChangeText,
      onDPress,
      onDRef,
      onEBlur,
      onEChangeText,
      onEInputRef,
      onELabelRef,
      onScrollerRef,
      valueA,
      valueB,
      valueC,
      valueD,
      valueE,
    } = this.props;
    return (
      <KeyboardAwareScrollView
        ref={onScrollerRef}
        style={styles.form}
      >
        <Text
          style={styles.formText}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text style={styles.formLabel}>A</Text>
        <TextInput
          autoFocus
          onBlur={onABlur}
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
        <Text
          ref={onBLabelRef}
          style={styles.formLabel}
        >
          B
        </Text>
        <TextInput
          onBlur={onBBlur}
          onChangeText={onBChangeText}
          ref={onBInputRef}
          style={styles.formTextInput}
          value={valueB}
        />
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text
          ref={onCLabelRef}
          style={styles.formLabel}
        >
          C
        </Text>
        <TextInput
          onBlur={onCBlur}
          onChangeText={onCChangeText}
          ref={onCInputRef}
          style={styles.formTextInput}
          value={valueC}
        />
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text
          ref={onDRef}
          style={styles.formLabel}
        >
          D
        </Text>
        <TouchableOpacity onPress={onDPress}>
          <Text style={styles.formAutocomplete}>{valueD}</Text>
        </TouchableOpacity>
        <Text style={styles.formText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas quis tincidunt ex. Nulla vulputate nulla quam,
          sed rutrum magna dignissim ut. Praesent eu ante at risus
          efficitur pellentesque.
        </Text>
        <Text
          ref={onELabelRef}
          style={styles.formLabel}
        >
          E
        </Text>
        <TextInput
          onBlur={onEBlur}
          onChangeText={onEChangeText}
          ref={onEInputRef}
          style={styles.formTextInput}
          value={valueE}
        />
      </KeyboardAwareScrollView>
    );
  }
}

FormView.propTypes = {
  onABlur: PropTypes.func.isRequired,
  onBBlur: PropTypes.func.isRequired,
  onAChangeText: PropTypes.func.isRequired,
  onBChangeText: PropTypes.func.isRequired,
  onBInputRef: PropTypes.func.isRequired,
  onBLabelRef: PropTypes.func.isRequired,
  onCBlur: PropTypes.func.isRequired,
  onCInputRef: PropTypes.func.isRequired,
  onCLabelRef: PropTypes.func.isRequired,
  onCChangeText: PropTypes.func.isRequired,
  onDPress: PropTypes.func.isRequired,
  onDRef: PropTypes.func.isRequired,
  onEBlur: PropTypes.func.isRequired,
  onEChangeText: PropTypes.func.isRequired,
  onEInputRef: PropTypes.func.isRequired,
  onELabelRef: PropTypes.func.isRequired,
  onScrollerRef: PropTypes.func.isRequired,
  valueA: PropTypes.string.isRequired,
  valueB: PropTypes.string.isRequired,
  valueC: PropTypes.string.isRequired,
  valueD: PropTypes.string.isRequired,
  valueE: PropTypes.string.isRequired,
};

export default FormView;
