<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name: "DonutChartWidget",
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>

</style>
