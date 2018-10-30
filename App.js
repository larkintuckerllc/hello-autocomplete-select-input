/* eslint-disable */
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import RootStack from './RootStack';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RootStack />
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
