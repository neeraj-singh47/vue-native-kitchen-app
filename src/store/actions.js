import { login } from './fetch';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

// ensure data for rendering given list type
export function USER_LOGIN ({ commit, dispatch }, { type, navigation, username, password }) {
    return login({username, password})
        .then(() => 
          AsyncStorage.setItem('loggedIn', 'true')
        ).then(() => {
            commit('USER_LOGGED_IN');
            navigation.navigate('Home');
        }).catch((error) => {
            console.log(error);
        })
  }