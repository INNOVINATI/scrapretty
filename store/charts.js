export const getters = {

  projectChartData: (state, getters, rootState) => {
    let datasets = [
      {label: 'Jobs', data: [], backgroundColor: []},
      {label: 'Spiders', data: [], backgroundColor: []},
    ]
    let labels = []
    let projects = rootState.projects.list.filter(p => p.hostUrl === rootState.hosts.connected.url)
    for (let project of projects) {
      labels.push(project.name)
      const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
      datasets[1].data.push(project.spiders.length)
      datasets[1].backgroundColor.push(color)
      datasets[0].data.push(rootState.jobs.list.filter(job => job.projectName === project.name).length)
      datasets[0].backgroundColor.push(color)
    }
    return {datasets, labels}
  },
  chartOptions: state => {
    return {
      legend: {
        position: 'bottom'
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';
            if (label) {
              label += ` (${tooltipItem.label}): ${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]}`;
            }
            return label;
          }
        }
      }
    }
  }
}
