import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import database from './modules/database';
Vue.use(Vuex);
export default new Vuex.Store({
	actions,
	modules: {
		database,
	}
})