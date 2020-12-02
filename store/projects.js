export const state = () => {
  return {
    list: [],
    connected: null
  }
}

export const actions = {
  loadProjects({ dispatch, commit }, { url }) {
    this.$axios.$get(url + '/listprojects.json')
      .then(({ projects }) => {
        projects.forEach(async name => {
          let project = {
            name,
            spiders: await this.$axios.$get(url + '/listspiders.json' + '?project=' + name),
            versions: await this.$axios.$get(url + '/listversions.json' + '?project=' + name),
            jobs: await this.$axios.$get(url + '/listjobs.json' + '?project=' + name),
          }
          commit('loadProject', project)
        })

      })
      .catch(err => console.log(err))
  },
}

export const mutations = {
  loadProject(state, project) {
    state.hosts.push(project)
  }
}

