<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          rounded
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add host
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add scrapyd host</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-row>
                <v-col cols="12" sm="8" md="10">
                  <v-text-field
                    v-model="form.url"
                    label="URL"
                    :rules="urlRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="2">
                  <v-text-field
                    v-model="form.port"
                    label="Port"
                    type="number"
                    value="6800"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="form.description"
                    label="Description"
                  ></v-text-field>
                </v-col>
              </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submit()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddHostDialog",
  data: () => ({
    dialog: false,
    form: {
      url: '',
      port: 6800,
      description: 'Scrapyd server'
    },
    urlRules: [
      v => !!v || 'URL is required',
      v => (!!v && v.startsWith('http')) || 'URL must start with "http(s)://"'
    ],
  }),
  methods: {
    submit() {
      const url = this.form.url.endsWith('/') ? this.form.url.substring(0, this.form.url.length - 1) + ':6800' : this.form.url + ':6800'
      this.$store.dispatch('hosts/addHost', {url, description: this.form.description})
        .then(() => {
          this.form.url = ''
          this.form.description = 'Scrapyd server'
          this.dialog = false
        })
    }
  }
}
</script>

<style scoped>

</style>
