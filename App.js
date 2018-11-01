/* eslint-disable */
import React from 'react';
import { Platform, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import RootStack from './RootStack';

export default class App extends React.Component {
  render() {
    const androidStyle = Platform.OS === 'android'
      ? { paddingTop: StatusBar.currentHeight }
      : {};
    return (
      <SafeAreaView style={[styles.container, androidStyle]}>
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
