import __react__vue__Vue, {
  observer as __react__vue__observer
} from 'react-vue'
import __react__vue__ReactNative from 'react-native'
import __react__vue__PropType from 'prop-types'
import {
  buildNativeComponent as __react__vue__buildNativeComponent
} from 'react-vue-helper'
import {
  bindNativeClass as __react__vue__bindClass,
  bindNativeStyle as __react__vue__bindStyle,
  mergeProps as __react__vue__mergeProps
} from 'react-vue-helper'
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react'

import {
  AsyncStorage
} from 'react-native';
import Vue from 'react-vue';
import store from '../../store';
// import router from '../../wrapper/router.js';

// Vue.use(router)
const __react__vue__options = {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      username: "",
      password: "",
      text: ""
    };
  },
  methods: {
    OnChange(type, value) {
      this[type] = value.nativeEvent.text;
    },
    _onPress() {
      //   alert('Username:' + this.username + ' Password' + this.password)
      this.login(this.username, this.password);
    },
    login(username, password) {
      return store.dispatch('USER_LOGIN', {
        username,
        password,
        navigation: this.navigation
      });
    }
  },
  created() {
    console.log(navigator.product, this.myAddedProperty);
    AsyncStorage.getItem('loggedIn').then((value) => {
      console.log(value);
    })
  }
};

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(vm.$options.components['View'], __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    style: [__react__vue__bindClass.call(this, {
      staticClass: "score",
      parentClass: this.props.style
    }), __react__vue__bindStyle(undefined, undefined, undefined)]
  }), __react__vue__createElement(vm.$options.components['TextInput'], {
    placeholder: "edit me",
    value: vm['username'],
    onChange: value => vm['username'] = value.nativeEvent.text,
    style: [__react__vue__bindClass.call(this, {
      staticClass: ""
    })]
  }), __react__vue__createElement(vm.$options.components['TextInput'], {
    placeholder: "edit me",
    value: vm['password'],
    onChange: value => vm['OnChange']('password', value),
    style: [__react__vue__bindClass.call(this, {
      staticClass: ""
    })]
  }), __react__vue__createElement(vm.$options.components['TouchableOpacity'], {
    onPress: () => vm['navigation'].navigate('Home'),
    style: []
  }, __react__vue__createElement(vm.$options.components['Text'], {
    style: []
  }, "Go to Foo")), __react__vue__createElement(vm.$options.components['TouchableOpacity'], {
    onPress: vm['_onPress'],
    style: []
  }, __react__vue__createElement(vm.$options.components['Text'], {
    style: []
  }, "Login")));
};

const __react__vue__css = {
  "container": {
    "backgroundColor": "#f6f6ef"
  }
}

const __react__vue__ComponentBuilded = __react__vue__buildNativeComponent(__react__vue__render, __react__vue__options, {
  Component: __react__vue__Component,
  PropTypes: __react__vue__PropType,
  Vue: __react__vue__Vue,
  ReactNative: __react__vue__ReactNative,
  css: __react__vue__css
})

export default __react__vue__observer(__react__vue__ComponentBuilded)