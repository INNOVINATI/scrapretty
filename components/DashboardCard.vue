<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://icons-for-free.com/iconfiles/png/512/database+host+hosting+server+settings+share+icon-1320137028122777541.png"
      width="50px"
      class="mx-auto"
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="action.callback"
      >
        {{ action.text }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "DashboardCard",
  props: {
    image: {type: String, default: () => 'https://icons-for-free.com/iconfiles/png/512/database+host+hosting+server+settings+share+icon-1320137028122777541.png'},
    title: String,
    subtitle: String,
    action: {
      text: String,
      callback: Function
    }
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

</style>
