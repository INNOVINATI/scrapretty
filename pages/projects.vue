<template>
  <v-row>
    <v-col cols="12" md="8" sm="12">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" sm="12" v-for="(project, i) in projects" v-bind:key="i" >
          <ProjectCard :project="project"></ProjectCard>
        </v-col>
        <v-col cols="12" md="6" sm="12" v-if="$store.state.settings.showUploadNotice">
          <DashboardCard
            :contents="['Upload a project/version using <code>scrapyd-deploy</code>']"
            :actions="[{text: 'Read more', icon: 'mdi-info', callback: readMore}]"
          >
            <template v-slot:header>
              <v-app-bar>
                <v-toolbar-title>Adding/updating projects</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="dismissInfo()"
                >
                  <v-icon>mdi-bell-remove</v-icon>
                </v-btn>
              </v-app-bar>
            </template>
          </DashboardCard>
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" md="4" sm="12">

    </v-col>
  </v-row>
</template>

<script>
import ProjectCard from "@/components/Cards/ProjectCard";
import DashboardCard from "@/components/Cards/DashboardCard";
export default {
name: "projects",
  components: {DashboardCard, ProjectCard},
  computed: {
    projects() {
      return this.$store.state.projects.list
    }
  },
  methods: {
    dismissInfo() {
      this.$store.dispatch('changeSetting', {key: 'showUploadNotice', value: false})
    },
    readMore() {
      window.open('https://github.com/scrapy/scrapyd-client#scrapyd-deploy', '_blank')
    }
  },
  mounted() {
    if (!this.$store.state.hosts.connected)
      this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
