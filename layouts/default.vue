<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
        <v-list>
          <v-list-item
            router
            exact
            to="/"
          >
            <v-list-item-action>
              <v-icon>mdi-apps</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div v-if="$store.state.hosts.connected">
            <v-divider></v-divider>
            <v-subheader>{{ $store.state.hosts.connected.node_name }}</v-subheader>
            <v-list-item
              router
              exact
              v-for="(page, i) in pages"
              :key="i"
              :to="page.path"
            >
              <v-list-item-action>
                <v-icon>{{ page.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ page.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>

        <template v-slot:append>
          <v-subheader>Useful links</v-subheader>
          <v-list dense>
            <v-list-item
              v-for="(item, i) in supportLinks"
              :key="i"
              @click="openTab(item.url)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
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

    <v-footer app fixed>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark">
        <template v-slot:label>
          <v-img width="25px" src="https://www.pngkit.com/png/full/223-2230816_dark-mode-for-safari-on-the-mac-app.png"></v-img>
        </template>
      </v-switch>
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
        {name: 'Projects', path: '/projects', icon: 'mdi-folder'},
        {name: 'Jobs', path: '/jobs', icon: 'mdi-clipboard-list'}
      ],
      supportLinks: [
        {title: 'Source (GitHub)', url: 'https://github.com/innovinati/scrapretty'},
        {title: 'Bug reports', url: 'https://github.com/innovinati/scrapretty/issues'},
        {title: 'scrapyd-deploy', url: 'https://github.com/scrapy/scrapyd-client#scrapyd-deploy'}
      ]
    }
  },
  computed: {
    hosts() {
      return this.$store.state.hosts
    }
  },
  methods: {
    openTab(url) {
      window.open(url, '_blank')
    }
  },
  created() {
    this.$store.dispatch('init')
  }
}
</script>
