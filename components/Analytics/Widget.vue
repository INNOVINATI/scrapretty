<template>
  <v-card class="elevation-2">
    <slot name="header"></slot>
    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
name: "Widget"
}
</script>

<style scoped>

</style>
