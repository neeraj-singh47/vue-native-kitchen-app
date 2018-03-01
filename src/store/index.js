import Vue from 'react-vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    mutations,

    state: {
        user: {
            loggedIn: false
        }
    }
});

export default store;