<template>
  <v-row>
    <v-col cols="12" md="8" sm="12">
      <v-data-table
        :items="jobs"
        :headers="headers"
      >
      </v-data-table>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" md="4" sm="12">

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "jobs",
  computed: {
    jobs() {
      return this.$store.state.jobs.list
    },
    headers() {
      return [
        {text: 'ID', value: 'id'},
        {text: 'Project', value: 'project'},
        {text: 'Spider', value: 'spider'},
        {text: 'Status', value: 'status'}
      ]
    }
  },
  mounted() {
    if (!this.$store.state.hosts.connected)
      this.$router.push('/')
    else
      this.$store.dispatch('jobs/loadJobs', this.$store.state.hosts.connected, { root: true })
  }
}
</script>

<style scoped>

</style>
