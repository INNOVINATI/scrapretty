export const state = () => {
  return {
    list: [],
  }
}

export const actions = {
  loadProjects({ dispatch, commit, state }, host) {
    return this.$axios.$get(host.url + '/listprojects.json')
      .then(async ({ projects }) => {
        let list = await Promise.all(projects.map(async name => ({
          name,
          hostUrl: host.url,
          spiders: await this.$axios.$get(host.url + '/listspiders.json' + '?project=' + name).then(res => res.spiders),
          versions: await this.$axios.$get(host.url + '/listversions.json' + '?project=' + name).then(res => res.versions)
        })));
        commit('loadProjects', list)
        dispatch('jobs/loadJobs', host, { root: true })
      })
      .catch(err => console.log(err))
  },
  delProject({rootState, commit}, project) {
    this.$axios.$get(project.hostUrl + '/delproject.json?project=' + project.name)
      .then(res => commit('delProject', project))
      // Todo: catch error
  },
  delFromHost({state, dispatch, commit}, host) {
    dispatch("jobs/flush", host, { root: true })
    for (let project of state.list.filter(p => p.hostUrl === host.url)) {
      commit('delProject', project)
    }
  },
  scheduleAll({dispatch}, project) {
    project.spiders.forEach(spider => dispatch('scheduleOne', { project, spider}))
  },
  scheduleOne({ dispatch, commit, rootState }, payload) {
    let url = payload.project.hostUrl + '/schedule.json?project=' + payload.project.name + '&spider=' + payload.spider
    if (payload.hasOwnProperty('params')) {
      for (let param of payload.params) {
        if (param.key && param.value)
          url += `&${param.key}=${param.value}`
      }
    }
    this.$axios.$post(url)
      .then(res => commit('jobs/loadJobs', rootState.hosts.connected, { root: true }))
      .catch(err => console.log(err))
  }
}

export const mutations = {
  loadProjects(state, projects) {
    projects.forEach(p => state.list.push(p))
  },
  delProject(state, project) {
    if (state.list.length > 1)
      state.list = state.list.splice(state.list.indexOf(project), 1)
    else
      state.list = []
  }
}

