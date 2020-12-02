<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" v-for="(host, i) in hosts" v-bind:key="i">
          <DashboardCard
            :title="host.node_name"
            :subtitle="host.description"
            :items="[{pending: host.pending, running: host.running, errors: host.running}]"
            :action="{text: 'Connect', callback: () => alert()}"
          ></DashboardCard>
        </v-col>
        <v-col cols="12" md="4">
          <AddHostDialog/>
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" md="6">

    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import DashboardCard from "~/components/DashboardCard";
import AddHostDialog from "@/components/AddHostDialog";

export default {
  components: {
    AddHostDialog,
    DashboardCard
  },
  computed: {
    hosts() {
      return this.$store.state.hosts.list
    },
    projects() {
      return this.$store.state.projects.list
    },
  }
}
</script>
