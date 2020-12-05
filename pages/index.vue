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
            :title="stat.key"
            :value="stat.value"
          ></NumberWidget>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <DonutChartWidget :data="chartData"></DonutChartWidget>
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
import DonutChartWidget from "@/components/Analytics/DonutChartWidget";

export default {
  components: {
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
    stats() {
      return [
        {key: 'Hosts', value: this.$store.state.hosts.list.length},
        {key: 'Projects', value: this.$store.state.projects.list.length},
        {key: 'Jobs', value: this.$store.state.jobs.list.length},
      ]
    },
    chartData() {
      let datasets = [{data: []}]
      let labels = []
      this.$store.state.hosts.list.forEach(host => {
        labels.push(host.node_name)
        datasets[0].data.push(this.$store.state.jobs.list.filter(job => job.hostUrl === host.url).length)
      })
        return {datasets, labels}
    }
  },
  mounted() {
    this.$store.commit('hosts/disconnect')
  }
}
</script>
