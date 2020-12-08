<template>
  <v-row>
    <v-col cols="12" lg="8" md="8" sm="8" xs="12">
      <v-row justify="center">
        <v-col cols="12" lg="6" md="12" sm="12" v-for="(project, i) in projects" v-bind:key="i" >
          <ProjectCard :project="project"></ProjectCard>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" v-if="$store.state.settings.showUploadNotice">
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
    <v-col cols="12" lg="4" md="4" sm="4" xs="12">
      <v-row>
        <v-col
          v-for="(stat, i) in stats"
          :key="i"
          cols="12" lg="6" md="6" sm="12"
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
            :data="$store.getters['charts/projectChartData']"
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
import ProjectCard from "@/components/Cards/ProjectCard";
import DashboardCard from "@/components/Cards/DashboardCard";
import NumberWidget from "@/components/Analytics/NumberWidget";
import ChartWidget from "@/components/Analytics/Charts/ChartWidget";
export default {
name: "projects",
  components: {DashboardCard, ProjectCard, NumberWidget, ChartWidget},
  computed: {
    host() {
      return this.$store.state.hosts.connected
    },
    projects() {
      return this.$store.state.projects.list.filter(p => p.hostUrl === this.host.url)
    },
    spiders() {
      return this.projects.reduce((acc, next) => acc + next.spiders.length, 0)
    },
    jobs() {
      return this.$store.state.jobs.list.filter(j => j.hostUrl === this.host.url)
    },
    avgJobDuration() {
      let finishedJobs = this.jobs.filter(j => j.status === 'finished')
      const avg = finishedJobs.reduce((total, next) => total + this.timeDelta(next.start_time, next.end_time), 0) / finishedJobs.length
      return (avg / 1000).toPrecision(2)
    },
    stats() {
      return [
        {key: 'Projects', value: this.projects.length},
        {key: 'Jobs', value: this.jobs.length},
        {key: 'Spiders', value: this.spiders},
        {key: 'Avg. job duration', value: Number(this.avgJobDuration) || 0, suffix: 's'}
      ]
    },

  },
  methods: {
    dismissInfo() {
      this.$store.dispatch('changeSetting', {key: 'showUploadNotice', value: false})
    },
    readMore() {
      window.open('https://github.com/scrapy/scrapyd-client#scrapyd-deploy', '_blank')
    },
    timeDelta(ts1, ts2) {
      const start = new Date(ts1)
      const end = new Date(ts2)
      return end - start  // milliseconds
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
