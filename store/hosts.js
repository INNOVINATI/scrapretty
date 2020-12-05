export const state = () => {
  return {
    list: [],
    connected: null
  }
}

export const actions = {
  addHost({ state, dispatch }, { url, description }) {
    dispatch('loadHost', { url, description })
      .then(() => localStorage.setItem('hosts', JSON.stringify(state.list)))
  },
  loadHost({ rootState, dispatch, commit }, { url, description }) {
    return this.$axios.$get(url + '/daemonstatus.json')
      .then((connection) => {
        let host = {url, description, ...connection}
        commit('addHost', host)
        dispatch('projects/loadProjects', host, { root: true })
      })
      .catch(err => {
        console.log(err)
        const name = url.split('//')[1].split(':')[0]
        commit('addHost', {url, description, node_name: name, status: 'error'})
      })
  },
  delHost({ state, commit }, host) {
    commit('delHost', host)
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
      state.list = state.list.splice(state.list.indexOf(host), 1)
    else
      state.list = []
  },
  updateList(state, list) {
    state.list = list
  }
}

