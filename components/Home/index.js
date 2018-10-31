import { PropTypes } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import Form from './Form';
import Header from './Header';

const Home = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Header />
    <Form navigation={navigation} />
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
