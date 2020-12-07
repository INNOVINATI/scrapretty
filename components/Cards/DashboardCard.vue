<template>
  <v-card
    class="mx-auto"
    min-width="300"
  >
    <slot name="header"></slot>

    <v-card-subtitle v-for="(item, i) in contents" v-bind:key="i" v-html="item"></v-card-subtitle>

    <v-card-actions>
      <v-btn
        v-for="(action, i) in actions"
        v-bind:key="i"
        color="orange lighten-2"
        text
        @click="action.callback()"
      >
        {{ action.text }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
        :title="(show ? 'Hide' : 'Show') + ' details'"
        v-if="details"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text align="center">
          <v-chip
            v-for="(item, i) in details"
            v-bind:key="i"
            class="ma-1"
          >
            <v-icon
              v-if="item.hasOwnProperty('icon')"
              left
              small
            >
              {{ item.icon }}
            </v-icon>
            <span>{{ item.text }}</span>
          </v-chip>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "DashboardCard",
  props: {
    contents: Array,
    details: {
      type: Array,
      default: () => null
    },
    actions: Array
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

</style>
