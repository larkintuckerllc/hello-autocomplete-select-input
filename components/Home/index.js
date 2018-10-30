import { PropTypes } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import Form from './Form';
import Header from './Header';
import styles from './styles';

const Home = ({ navigation }) => (
  <View style={styles.home}>
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
