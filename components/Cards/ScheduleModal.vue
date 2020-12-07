<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <slot :dialog="dialog" :on="on" :attrs="attrs"></slot>
    </template>
    <v-card>
      <v-card-title class="headline">
        Schedule
      </v-card-title>
      <v-card-text>
        Add any parameters for this spider run
        <v-divider></v-divider>
        <v-row v-for="(param, i) in params" :key="i">
          <v-col cols="5">
            <v-text-field label="Key" v-model="param.key"></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field label="Value" v-model="param.value"></v-text-field>
          </v-col>
          <v-col cols="2" align-self="center">
            <v-btn
              small
              icon
              class="elevation-2"
              :disabled="i === 0"
              @click="params.splice(params.indexOf(param), 1)"
            ><v-icon small>mdi-delete</v-icon></v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn
              icon
              class="elevation-2"
              @click="params.push({key: '', value: ''})"
            ><v-icon>mdi-plus</v-icon></v-btn>
          </v-col>
        </v-row>

      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          text
          @click="dialog = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="submit()"
        >
          Schedule
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ScheduleModal",
  props: {
    callback: Function
  },
  data() {
    return {
      dialog: false,
      params: [{key: '', value: ''}]
    }
  },
  methods: {
    submit() {
      this.callback(this.params)
      this.dialog = false
      this.$router.push('/jobs')
    }
  }
}
</script>

<style scoped>

</style>
