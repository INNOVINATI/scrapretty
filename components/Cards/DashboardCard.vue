<template>
  <v-card
    class="mx-auto d-flex flex-column"
    min-width="300"
    min-height="200"
  >
    <slot name="header"></slot>

    <v-card-subtitle v-for="(item, i) in contents" v-bind:key="i" v-html="item"></v-card-subtitle>
    <v-spacer></v-spacer>
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
        <v-card-text>
          <div
            v-for="(item, i) in details"
            v-bind:key="i"
            class="d-inline-flex"
          >
            <ScheduleModal
              :callback="item.callback"
              v-if="item.hasOwnProperty('modal') && item.modal"
              v-slot="slotProps"
            >
              <v-chip
                class="ma-1"
                :title="item.title || ''"
                v-bind="slotProps.attrs"
                v-on="slotProps.on"
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
            </ScheduleModal>
            <v-chip
              v-else
              class="ma-1"
              :title="item.title || ''"
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
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import ScheduleModal from "@/components/Cards/ScheduleModal";

export default {
  name: "DashboardCard",
  components: {ScheduleModal},
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
