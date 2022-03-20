const state = {
  money: 4,
}

const getters = {}

const mutations = {
  setState(state, data) {
    for( const key in data) {
      state[key] = data[key];
    }
  }
}

const actions = {
  buy({ commit, state }, { total }) {
    const newMoneyTotal = state.money - total;
    commit('setState', { money: newMoneyTotal });
  },
  collect({ commit, state }, { total }) {
    const newMoneyTotal = state.money + total;
    commit('setState', { money: newMoneyTotal });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}