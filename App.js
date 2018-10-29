/* eslint-disable */
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Form />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffaa',
  },
});
