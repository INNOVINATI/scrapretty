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

    </v-col>
  </v-row>
</template>

<script>
import DashboardCard from "~/components/DashboardCard";
import AddHostDialog from "@/components/AddHostDialog";
import HostCard from "@/components/HostCard";

export default {
  components: {
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
  },
  mounted() {
    this.$store.state.hosts.connected = null
  }
}
</script>
