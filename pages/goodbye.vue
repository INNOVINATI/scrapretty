<template>
  <div style="height: 100%; width: 100%">
    <v-card
      class="mx-auto"
      width="100%"
      v-if="quote"
    >
      <v-img
        class="white--text align-center"

        height="100vh"
        :src="quote.background"
      >
        <v-card-title>
          <p class="px-5 display-2" style="word-break: keep-all; font-family: monospace;">{{ quote.quote }}</p>
        </v-card-title>
        <v-card-subtitle class="px-5 pb-0">
          <v-chip color="primary">{{ quote.author }}</v-chip>
          <v-chip v-for="tag in quote.tags" :key="tag" class="mx-2">#{{ tag }}</v-chip>
        </v-card-subtitle>
        <v-card-text class="text--primary my-5">

        </v-card-text>
      </v-img>
    </v-card>
  </div>

</template>

<script>

  export default {
    name: 'goodbye',
    layout: 'homepage',
    data() {
      return {
        quote: null
      }
    },
    async created() {
      const response = await this.$axios.$get('https://quotes.rest/qod?language=en')
      console.log(response)
      this.quote = response.contents.quotes[0]
    }
  }
</script>

<style scoped>
  .wrap-word {
    -webkit-hyphens: none;
    -moz-hyphens:    none;
    -ms-hyphens:     none;
    hyphens:         none;
  }
</style>
