export const state = () => {
  return {
    snackbar: {
      show: false,
      text: ''
    },
    settings: {
      showUploadNotice: true,
    }
  }
}


export const actions = {
  init({ dispatch, commit }) {
    let settings = JSON.parse(localStorage.getItem('settings'))
    if (!!settings)
      commit('loadSettings', settings)

    let hosts = JSON.parse(localStorage.getItem('hosts'))
    if (!!hosts) {
      for (let host of hosts)
        dispatch('hosts/loadHost', host)
    }
  },
  changeSetting({ dispatch, commit }, {key, value}) {
    commit('changeSetting', {key, value})
    dispatch('saveSettings')
  },
  saveSettings({ state }) {
    localStorage.setItem('settings', JSON.stringify(state.settings))
  }

}

export const mutations = {
  loadSettings(state, settings) {
    state.settings = settings
  },
  changeSetting(state, {key, value}) {
    state.settings[key] = value
  }
}

