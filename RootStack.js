import { createStackNavigator } from 'react-navigation';
import Autocomplete from './components/Autocomplete';
import Home from './components/Home';

const RootStack = createStackNavigator({
  Autocomplete,
  Home,
}, {
  initialRouteName: 'Home',
});

export default RootStack;
