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
  scheduleAll({dispatch}, project) {
    project.spiders.forEach(spider => dispatch('scheduleOne', { project, spider}))
  },
  scheduleOne({ dispatch, commit }, {project, spider}) {
    this.$axios.$post(project.hostUrl + '/schedule.json?project=' + project.name + '&spider=' + spider)
      .then(res => commit('jobs/loadJob', {id: res.jobid, project: project.name, spider: spider, status: 'pending'}, { root: true }))
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

