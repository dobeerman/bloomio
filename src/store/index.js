import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;
