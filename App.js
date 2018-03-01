import React, {Component} from 'react';
import Vue from 'react-vue';
import router from './src/wrapper/router';
import StackNavigator from './src';

class App extends Component {
  
    componentDidMount() {
      Vue.use(router, this.navigator);
    }

    render() {
        return (
            <StackNavigator ref={nav => { this.navigator = nav; }} />
        )
    }
}

export default App;

