<template>
  <v-row>
    <v-col cols="12" md="8" sm="12">
      <v-data-table
        class="elevation-2"
        dense
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
  data() {
    return {
      search: '',
      loading: false,
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.list
    },
    headers() {
      return [
        {text: 'ID', value: 'id', groupable: false},
        {text: 'Project', value: 'projectName'},
        {text: 'Spider', value: 'spider'},
        {text: 'Status', value: 'status'}
      ]
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
