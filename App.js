import React from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import RootStack from './RootStack';
import styles from './styles';

const androidStyle = Platform.OS === 'android'
  ? { paddingTop: StatusBar.currentHeight }
  : {};

const App = () => (
  <SafeAreaView style={[styles.app, androidStyle]}>
    <RootStack />
  </SafeAreaView>
);

export default App;
