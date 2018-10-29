import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
} from 'react-native';
import styles from './styles';

class Form extends Component {
  state = {
    valueA: '',
    valueB: '',
    valueC: '',
  };

  handleAChangeText = text => this.setState({ valueA: text });

  handleBChangeText = text => this.setState({ valueB: text });

  handleCChangeText = text => this.setState({ valueC: text });

  render() {
    const { valueA, valueB, valueC } = this.state;
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
          onChangeText={this.handleAChangeText}
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
          onChangeText={this.handleBChangeText}
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
          onChangeText={this.handleCChangeText}
          style={styles.formTextInput}
          value={valueC}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export default Form;
