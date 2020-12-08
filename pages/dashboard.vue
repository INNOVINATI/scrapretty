<template>
  <v-row>
    <v-col cols="12" lg="8" md="8" sm="8" xs="12">
      <v-row justify="center" align="center">
        <v-col
          v-for="(host, i) in hosts"
          v-bind:key="i"
          cols="12" lg="6" md="12"
        >
          <HostCard class="mx-auto" :host="host"/>
        </v-col>
        <v-col cols="12" lg="6" md="12">
          <v-skeleton-loader
            v-if="$store.state.hosts.loading"
            type="article, actions"
          >
          </v-skeleton-loader>
          <AddHostDialog v-on:submit="loading = true" v-else/>
        </v-col>
      </v-row>
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
  import DashboardCard from "@/components/Cards/DashboardCard";
  import AddHostDialog from "@/components/AddHostDialog";
  import HostCard from "@/components/Cards/HostCard";
  import NumberWidget from "@/components/Analytics/NumberWidget";
  import ChartWidget from "@/components/Analytics/Charts/ChartWidget";
  import Widget from "@/components/Analytics/Widget";

  export default {
    name: 'dashboard',
    components: {
      Widget,
      ChartWidget,
      NumberWidget,
      HostCard,
      AddHostDialog,
      DashboardCard,
    },
    computed: {
      hosts() {
        return this.$store.state.hosts.list
      },
      projects() {
        return this.$store.state.projects.list
      },
      jobs() {
        return this.$store.state.jobs.list
      },
      stats() {
        return [
          {key: 'Hosts', value: this.hosts.length},
          {key: 'Projects', value: this.projects.length},
          {key: 'Jobs', value: this.jobs.length},
        ]
      },
      chartData() {
        let datasets = [
          {label: 'Jobs', data: [], backgroundColor: []},
          {label: 'Projects', data: [], backgroundColor: []},
        ]
        let labels = []
        let hosts = this.$store.state.hosts.list
        for (let host of hosts) {
          labels.push(host.node_name)
          const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
          datasets[1].data.push(this.$store.state.projects.list.filter(project => project.hostUrl === host.url).length)
          datasets[1].backgroundColor.push(color)
          datasets[0].data.push(this.$store.state.jobs.list.filter(job => job.hostUrl === host.url).length)
          datasets[0].backgroundColor.push(color)
        }
        return {datasets, labels}
      },
    },
    mounted() {
      this.$store.commit('hosts/disconnect')
    }
  }
</script>
