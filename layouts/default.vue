<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
        <v-list>
          <v-list-item
            router
            exact
            :active-class="$vuetify.theme.dark ? 'primary' : 'primary--text'"
            to="/dashboard"
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
            <v-list-item
              router
              exact
              v-for="(page, i) in pages"
              :key="i"
              :to="page.path"
              :active-class="$vuetify.theme.dark ? 'primary' : 'primary--text'"
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
          <span class="px-3">Resources</span>
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
      <v-spacer></v-spacer>
      <v-chip
        color="primary"
        dark
        v-if="$store.state.hosts.connected"
        close
        @click:close="$router.push('/dashboard')"
      >
        <v-icon small>mdi-server-network</v-icon>
        <span class="mx-1">{{ $store.state.hosts.connected.node_name }}</span>
      </v-chip>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in actions"
            :key="i"
            @click="item.callback()"
          >
            <v-list-item-avatar><v-icon>{{ item.icon }}</v-icon></v-list-item-avatar>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app fixed>
      <span>© {{ new Date().getFullYear() }} <a class="secondary--text" href="https://innovinati.com" target="_blank">INNOVINATI</a></span>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark">
        <template v-slot:label>
          <v-img width="25px" alt="Dark Mode" src="https://www.pngkit.com/png/full/223-2230816_dark-mode-for-safari-on-the-mac-app.png"></v-img>
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
      ],
      actions: [
        {text: 'Reload', icon: 'mdi-reload', callback: () => location.reload()},
        {text: 'Clear local storage', icon: 'mdi-delete', callback: () => {
            localStorage.clear()
            location.reload()
          }}
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
  async created() {
    await this.$store.dispatch('init')
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
