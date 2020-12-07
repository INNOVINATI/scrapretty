<template>
  <v-card class="text-center pa-3" width="150">
    <div>
      <span class="display-1">
        {{ value }}
        <span v-html="suffix || ''"></span>
      </span>
    </div>

    <span class="subtitle-2 secondary--text">{{title}}</span>
  </v-card>
</template>

<script>
export default {
name: "NumberWidget",
props: {
  title: String,
  value: Number,
  suffix: String,
}
}
</script>

<style scoped>

</style>
