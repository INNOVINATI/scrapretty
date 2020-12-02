export const state = () => {
  return {
    list: [],
    connected: null
  }
}

export const actions = {
  addHost({ state, dispatch }, { url, description }) {
    dispatch('loadHost', { url, description }).then(() => localStorage.setItem('hosts', JSON.stringify(state.list)))
  },
  loadHost({ dispatch, commit }, { url, description }) {
    return this.$axios.$get(url + '/daemonstatus.json')
      .then((connection) => {
        let host = {url, description, ...connection}
        commit('addHost', host)
        dispatch('projects/loadProjects', { url: host.url }, { root: true })
      })
      .catch(err => console.log(err))
  },
  connect({ commit }, host) {
    commit('connect', host)
  }
}

export const mutations = {
  connect(state, host) {
    state.connected = host
  },
  addHost(state, host) {
    state.list.push(host)
  }
}

