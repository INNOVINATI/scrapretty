<template>
  <DashboardCard
    :contents="['Last updated: ' + convertTimestamp(project.versions[project.versions.length - 1])]"
    :details="details"
    :actions="actions"
  >
    <template v-slot:header>
      <v-app-bar>
        <v-toolbar-title>{{ project.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          title="Download snapshot"
          @click="downloadProjectSnapshot(project)"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </v-app-bar>
    </template>
  </DashboardCard>
</template>

<script>
import DashboardCard from "@/components/Cards/DashboardCard";
export default {
  name: "ProjectCard",
  components: {DashboardCard},
  props: {
    project: Object
  },
  data() {
    return {
      selected: null
    }
  },
  computed: {
    actions() {
      return [
        {text: 'Schedule', icon: 'mdi-send', callback: this.scheduleProject},
        {text: 'Delete', icon: 'mdi-delete', callback: () => this.$store.dispatch('projects/delProject', this.project)}
      ]
    },
    details() {
      let details = []
      this.project.spiders.forEach(spider => details.push({
        text: spider,
        icon: 'mdi-spider',
        title: 'Click to schedule',
        callback: params => this.$store.dispatch(
          'projects/scheduleOne',
          {project: this.project, spider, params},
          { root: true }
        ),
        modal: true
      }))
      return details
    }
  },
  methods: {
    scheduleProject() {
      this.$store.dispatch('projects/scheduleAll', this.project).then(() => this.$router.push('/jobs'))
    },
    downloadProjectSnapshot(project) {
      let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project));
      let node = document.createElement('a');
      node.setAttribute("href",     dataStr);
      node.setAttribute("download", project.name + ".json");
      document.body.appendChild(node); // required for firefox
      node.click();
      node.remove();
    },
    convertTimestamp(ts) {
      let a = new Date(ts * 1000)
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      let year = a.getFullYear()
      let month = months[a.getMonth()]
      let date = a.getDate() < 10 ? '0' + a.getDate() : a.getDate()
      let hour = a.getHours() < 10 ? '0' + a.getHours() : a.getHours()
      let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
      return `${date}-${month}-${year} ${hour}:${min}h`;
    }
  }
}
</script>

<style scoped>

</style>
