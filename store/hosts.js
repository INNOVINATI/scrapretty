export const state = () => {
  return {
    list: [],
    connected: null,
    loading: false
  }
}

export const actions = {
  addHost({ state, dispatch, commit }, { url, description }) {
    commit('setLoading', true)
    dispatch('loadHost', { url, description })
      .then(() => localStorage.setItem('hosts', JSON.stringify(state.list)))
  },
  loadHost({ rootState, dispatch, commit }, { url, description }) {
    return this.$axios.$get(url + '/daemonstatus.json', {timeout: 3000})
      .then((connection) => {
        commit('setLoading', false)
        let host = {url, description, ...connection}
        commit('addHost', host)
        dispatch('projects/loadProjects', host, { root: true })
      })
      .catch(err => {
        commit('setLoading', false)
        const name = url.split('//')[1].split(':')[0]
        commit('addHost', {url, description, node_name: name, status: 'error'})
      })
  },
  delHost({ state, commit, dispatch }, host) {
    commit('delHost', host)
    dispatch("projects/delFromHost", host, { root: true})
    localStorage.setItem('hosts', JSON.stringify(state.list))
  },
  connect({ commit }, host) {
    commit('connect', host)
  }
}

export const mutations = {
  connect(state, host) {
    state.connected = host
  },
  disconnect(state) {
    state.connected = null
  },
  addHost(state, host) {
    if (host.status === 'ok')
      state.list.unshift(host)
    else
      state.list.push(host)
  },
  delHost(state, host) {
    if (state.list.length > 1)
      state.list.splice(state.list.indexOf(host), 1)
    else
      state.list = []
  },
  setLoading(state, value) {
    state.loading = value
  }
}

