<template>
  <DashboardCard
    :contents="[host.description]"
    :details="details"
    :actions="actions"
  >
    <template v-slot:header>
      <div class="pa-2 text-right">
        <v-icon :color="host.status === 'ok' ? 'green' : 'red'">mdi-server-network</v-icon>
      </div>
      <v-card-title class="pt-0">{{ host.node_name }}</v-card-title>
    </template>

  </DashboardCard>
</template>

<script>
import DashboardCard from "@/components/DashboardCard";
export default {
  name: "HostCard",
  components: {DashboardCard},
  props: {
    host: Object
  },
  computed: {
    actions() {
      let actions = []
      if (this.host.status === 'ok')
        actions.push({text: 'Connect', callback: () => {
          this.$store.dispatch('hosts/connect', this.host)
            .then(() => this.$router.push('/projects'))
        }})
      actions.push({text: 'Delete', callback: host => this.$store.dispatch('hosts/delHost', host)})
      return actions
    },
    details() {
      return [
        {text: 'pending: ' + this.host.pending},
        {text: 'running: ' + this.host.running},
        {text: 'done: ' + this.host.finished}
      ]
    }
  }
}
</script>

<style scoped>

</style>
