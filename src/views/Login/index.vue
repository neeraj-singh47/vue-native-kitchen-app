<template>
    <view class="score">
        <text-input
            class=""
            placeholder="edit me"
            v-model="username"
        >
        </text-input>
        <text-input
            class=""
            placeholder="edit me"
            :value="password"
            :on-change="(value) => OnChange('password', value)"
        >
        </text-input>
        <router-link to="/Home"><text>Go to Foo</text></router-link>
        <touchable-opacity
            :on-press="_onPress"
        >
            <text>Login</text>
        </touchable-opacity>
    </view>
</template>

<script>

import {AsyncStorage} from 'react-native';
import Vue from 'react-vue';
import store from '../../store';
// import router from '../../wrapper/router.js';

// Vue.use(router);

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data () {
    return {
        username: "",
        password: "",
        text: ""
    };
  },
  methods: {
      OnChange (type, value) {
          this[type] = value.nativeEvent.text;
      },
      _onPress () {
        //   alert('Username:' + this.username + ' Password' + this.password)
          this.login(this.username, this.password);
      },
      login (username, password) {
        return store.dispatch('USER_LOGIN', {
            username, 
            password,
            navigation: this.navigation
        });
      }
  },
  created () {
        console.log(navigator.product, this.myAddedProperty);
        AsyncStorage.getItem('loggedIn').then((value) => {
          console.log(value);
      })
  }
};
</script>

<style>
.container {
  background-color: #f6f6ef;
}
</style>

