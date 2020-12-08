<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="300px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          <p class="display-1 mb-5">Welcome to scra<i>pretty</i></p>
          This application uses the scrapyd API to monitor and interact with your servers.<br>
          We only store connection data locally on <b>your device</b>.<br>
          Get started by adding a scrapyd host!
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
name: "FirstUsageInfo",
  data() {
    return {
      sheet: false
    }
  },
  mounted() {
    this.sheet = !localStorage.hasOwnProperty('hosts')
  }
}
</script>

<style scoped>

</style>
