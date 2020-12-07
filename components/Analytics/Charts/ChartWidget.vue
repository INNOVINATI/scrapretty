<template>
  <v-card class="text-center pa-3" width="520">
    <component :is="chartType" :chartData="data" :options="options"></component>
  </v-card>
</template>

<script>
import DonutChart from "@/components/Analytics/Charts/DonutChart";

export default {
  name: "ChartWidget",
  components: {DonutChart},
  props: {
    data: Object,
    chartType: String,
    options: Object
  }
}
</script>

<style scoped>

</style>
