import Vue from 'vue'
import Vuex from 'vuex'

const modules = getAllStoreModules();

function getAllStoreModules() {
  const r = require.context('./modules', /* include subdirectories */ false, /\.js$/);
  const objects = r.keys().map(id => ({
    [moduleIdToName(id)]: r(id).default,
  }));
  return Object.assign({}, ...objects);
};

function moduleIdToName(id) {
  return id.replace(/^\.\//, '').replace(/\.js$/, '');
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
