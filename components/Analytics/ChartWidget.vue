<template>
  <v-card class="text-center pa-3">
    <component :is="chartType" :chartData="data"></component>
  </v-card>
</template>

<script>
import DonutChart from "@/components/Analytics/DonutChart";

export default {
  name: "ChartWidget",
  components: {DonutChart},
  props: {
    data: Object,
    chartType: String
  }
}
</script>

<style scoped>

</style>
