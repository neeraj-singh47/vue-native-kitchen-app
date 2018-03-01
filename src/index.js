import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './views/Login';
import Home from './views/Home';

// Home.navigationOptions = {
//   title: 'Hacker News',
//   headerTitleStyle: {
//     color: '#ff6600'
//   }
// };

Login.navigationOptions = ({ navigation }) => {
  return {
    title: 'Login',
    headerTitleStyle: {
      color: '#ff6600'
    }
  };
};

Home.navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerTitleStyle: {
        color: '#ff6600'
      }
    };
  };

export default StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home}
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

