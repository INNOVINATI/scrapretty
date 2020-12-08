<template>
  <v-row>
    <v-col cols="12" md="8" sm="12">
      <v-data-table
        class="elevation-1"
        show-group-by
        :items="jobs"
        item-key="id"
        :headers="headers"
        :search="search"
      >
        <template v-slot:top>
          <v-layout>
            <v-text-field
              v-model="search"
              label="Search job(s)"
              class="mx-4"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="ma-2"
              @click="reload()"
            >
              <v-icon>mdi-reload</v-icon>
            </v-btn>
          </v-layout>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="item.status === 'finished' ? 'green' : item.status === 'running' ? 'primary' : 'grey'"
            dark
            small
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.projectName="{ item }">
          <v-chip small>
            {{ item.projectName }}
          </v-chip>
        </template>
        <template v-slot:item.spider="{ item }">
          <v-chip small>
            {{ item.spider }}
          </v-chip>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12" lg="4" md="4" sm="4" xs="12">
      <v-row>
        <v-col
          v-for="(stat, i) in stats"
          :key="i"
          cols="12" lg="4" md="6" sm="12"
        >
          <NumberWidget
            class="mx-auto"
            :title="stat.key"
            :value="stat.value"
            :suffix="stat.hasOwnProperty('suffix') ? stat.suffix : null"
          ></NumberWidget>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ChartWidget
            :data="chartData"
            :options="$store.getters['charts/chartOptions']"
            chart-type="DonutChart"
            v-if="jobs.length"
            class="mx-auto"
          ></ChartWidget>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "jobs",
  data() {
    return {
      search: '',
    }
  },
  computed: {
    host() {
      return this.$store.state.hosts.connected
    },
    jobs() {
      return this.$store.state.jobs.list.filter(job => job.hostUrl === this.host.url)
    },
    projects() {
      return this.$store.state.projects.list.filter(project => project.hostUrl === this.host.url)
    },
    headers() {
      return [
        {text: 'ID', value: 'id', groupable: false},
        {text: 'Project', value: 'projectName'},
        {text: 'Spider', value: 'spider'},
        {text: 'Status', value: 'status'}
      ]
    },
    stats() {
      return [
        {key: 'Pending', value: this.jobs.filter(job => job.status ==='pending').length},
        {key: 'Running', value: this.jobs.filter(job => job.status ==='running').length},
        {key: 'Finished', value: this.jobs.filter(job => job.status ==='finished').length}
      ]
    },
    chartData() {
      let datasets = [{label: 'Jobs', data: [], backgroundColor: []}]
      let labels = []
      for (let project of this.projects) {
        for (let spider of project.spiders) {
          const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
          labels.push(`${project.name}/${spider}`)
          const jobs = this.jobs.filter(job => job.spider === spider)
          datasets[0].data.push(jobs.length)
          datasets[0].backgroundColor.push(color)
        }
      }
      return { datasets, labels }
    }
  },
  methods: {
    reload() {
      this.$store.dispatch('jobs/loadJobs', this.$store.state.hosts.connected, { root: true })
    }
  },
  mounted() {
    if (!this.$store.state.hosts.connected)
      this.$router.push('/')
    else {
      this.reload()
    }
  }
}
</script>

<style scoped>

</style>
