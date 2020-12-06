<template>
  <v-row>
    <v-col cols="12" md="">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" sm="12" v-for="(host, i) in hosts" v-bind:key="i" >
          <HostCard :host="host"/>
        </v-col>
        <v-col cols="6">
          <AddHostDialog/>
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="4">
      <v-row>
        <v-col
          v-for="(stat, i) in stats"
          :key="i"
        >
          <NumberWidget
            class="mx-auto"
            :title="stat.key"
            :value="stat.value"
          ></NumberWidget>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <ChartWidget :data="chartData" chart-type="DonutChart"></ChartWidget>
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
import DonutChartWidget from "@/components/Analytics/DonutChart";
import ChartWidget from "@/components/Analytics/ChartWidget";

export default {
  components: {
    ChartWidget,
    DonutChartWidget,
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
      let colors = []
      let datasets = [{label: 'Jobs per Host', data: [], backgroundColor: []}]
      let labels = []
      for (let host of this.hosts) {
        labels.push(host.node_name)
        datasets[0].data.push(this.jobs.filter(job => job.hostUrl === host.url).length)
        datasets[0].backgroundColor.push("rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")")
      }
      return {datasets, labels}
    }
  },
  mounted() {
    this.$store.commit('hosts/disconnect')
  }
}
</script>
