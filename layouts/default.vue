<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          router
          exact
          v-for="(page, i) in pages"
          v-bind:key="i"
          :to="page.path"
        >
          <v-list-item-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="page.name"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-snackbar v-model="$store.state.snackbar">
      {{ $store.state.snackbar }}
    </v-snackbar>

    <v-footer app fixed>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark"></v-switch>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      title: 'scrapretty',
      pages: [
        {name: 'Dashboard', path: '/', icon: 'mdi-apps'},
        {name: 'Projects', path: '/projects', icon: 'mdi-folder'},
        {name: 'Spiders', path: '/spiders', icon: 'mdi-spider'},
        {name: 'Jobs', path: '/jobs', icon: 'mdi-clipboard-list-outline'}
      ]
    }
  },
  computed: {
    hosts() {
      return this.$store.state.hosts
    }
  },
  created() {
    this.$store.dispatch('init')
  }
}
</script>
