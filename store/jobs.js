export const state = () => {
  return {
    list: [],
  }
}


export const actions = {
  loadJobs({ rootState, state, commit }, host ) {
    if (state.list.length > 0)
      commit('flush', host)
    rootState.projects.list.filter(x => x.hostUrl === host.url).forEach(project => {
      this.$axios.$get(project.hostUrl + '/listjobs.json?project=' + project.name)
        .then(({ running, pending, finished }) => {
          let jobs = [
            ...running.map(job => ({...job, status: 'running', projectName: project.name, hostUrl: project.hostUrl})),
            ...pending.map(job => ({...job, status: 'pending', projectName: project.name, hostUrl: project.hostUrl})),
            ...finished.map(job => ({...job, status: 'finished', projectName: project.name, hostUrl: project.hostUrl}))
          ]
         commit('loadJobs', jobs)
        })
        .catch(err => console.log(err))
    })
  },
}

export const mutations = {
  loadJobs(state, jobs) {
    jobs.forEach(job => state.list.push(job))
  },
  flush(state, host) {
    if (host)
      state.list = state.list.filter(x => x.hostUrl !== host.url)
    else
      state.list = []
  }
}

