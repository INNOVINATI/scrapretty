export const state = () => {
  return {
    snackbar: '',
  }
}

export const actions = {
  init({ dispatch }) {
    let hosts = JSON.parse(localStorage.getItem('hosts'))
    if (!!hosts)
      hosts.forEach(host => dispatch('hosts/loadHost', host))
  },
  snackbar({ commit }, { msg }) {
    commit('snackbar', msg)
  },

}

export const mutations = {
  snackbar(state, msg) {
    state.application.snackbar = msg
  }
}

