<template>
  <div id="homepage">
    <v-row
      align="center"
      justify="center"
      class="fill-height"
      style="background-image: url('hero.svg'); background-size: cover; height: 100vh; background-position: center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-4 font-weight-thin mb-4">
          scra<i>pretty</i>
        </h1>
        <h2 class="subheading" style="font-family: monospace">
          scrapyd + Nuxt + Vuetify = 💅✨
        </h2>
        <div class="mt-5">
          <v-btn class="black" outlined text large to="/dashboard">Start app</v-btn>
          <v-btn class="secondary" outlined text large @click="openTab('https://github.com/innovinati/scrapretty')">GitHub</v-btn>
        </div>
        <br>
        <v-btn outlined class="mt-5" icon @click="$vuetify.goTo('#features')"><v-icon>mdi-arrow-down</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col cols="12" style="height: 100vh" id="features">
        <v-carousel v-model="model" height="100%" cycle hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="item.color"
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                justify="center"
                align="center"
              >
                <v-col
                  cols="12"
                  align="center"
                  style="font-family: monospace"
                >
                  <div class="display-3">
                    {{ item.title }}
                  </div>
                  <div v-html="item.text"></div>
                  <div v-if="item.hasOwnProperty('links')">
                    <div class="ma-5" v-for="link in item.links" :key="link.title">
                      <v-img
                        :src="link.logo"
                        width="200"
                        :title="link.title"
                        @click="openTab(link.url)"
                      ></v-img>
                    </div>
                  </div>
                </v-col>

              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-footer>
      <span>© MIT License</span>
      <v-spacer></v-spacer>
      <a class="mx-2 secondary--text">Imprint</a>
      <a class="mx-2 secondary--text">Privacy</a>
    </v-footer>
  </div>

</template>

<script>
  import homepage from "../layouts/homepage";

  export default {
    layout: 'homepage',
    data: () => ({
      model: 0,
      slides: [
        {
          color: 'primary',
          title: 'Schedule & monitor projects',
          text: 'Connect to your various Scrapyd hosts, schedule projects and monitor jobs.<br>Including visualizations powered by ChartJS.',
          links: [
            {title: 'Scrapyd', url: 'https://scrapy.org/', logo: 'https://www.imagescape.com/media/uploads/zinnia/2018/08/24/scrapy-logo-big_2.png.1132x452_q85_crop.png'},
          ]
        },
        {
          color: 'secondary',
          title: 'Simple & serverless',
          text: 'Build and deploy using any static site hosting service.<br>Nothing is stored on our servers.',
          links: [
            {title: 'GitHub Pages', url: 'https://pages.github.com/', logo: 'https://pngimg.com/uploads/github/github_PNG15.png'},
            {title: 'Netlify', url: 'https://www.netlify.com/', logo: 'https://flaviocopes.com/netlify/netlify-logo.png'}
          ]
        },
        {
          color: 'green lighten-1',
          title: 'Clean & responsive UI',
          text: 'Designed with a focus on user experience and accessibility.<br>Dark mode, mobile optimization and much more.',
          links: [
            {title: 'Vuetify', url: 'https://vuetifyjs.com/', logo: 'https://conmagin.de/assets/images/9/vuetify-cc6aa73a.png'}
          ]
        },
        {
          color: 'yellow darken-2',
          title: '100% Open Source',
          text: '' +
            'Everyone can view, improve and reuse the codebase.<br>Start contributing on GitHub!<br>' +
            '<img class="ma-3" alt="GitHub" src="https://img.shields.io/github/license/innovinati/scrapretty">' +
            '<img class="ma-3" alt="GitHub all releases" src="https://img.shields.io/github/downloads/innovinati/scrapretty/total">' +
            '<img class="ma-3" alt="GitHub contributors" src="https://img.shields.io/github/contributors/innovinati/scrapretty">',
          links: [
            {title: 'Source', url: 'https://github.com/innovinati/scrapretty', logo: 'https://pngimg.com/uploads/github/github_PNG15.png'}
          ]
        },
      ],
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
    methods: {
      openTab(url) {
        window.open(url, '_blank')
      }
    }
  }
</script>

<style scoped>

a {
  text-decoration: none;
}

#data-v-2a183b29 > div {
  height: 100% !important;
}

#homepage {
  webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>
