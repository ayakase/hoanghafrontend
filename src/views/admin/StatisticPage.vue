<template>
    <div>
        <Bar :data="data" :options="options" />
    </div>
    <button @click="clicked"> A </button>
</template>

<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { onMounted, ref } from 'vue';
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
let data = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [{ data: [40, 20, 12, 45, 66, 88, 43, 23] }]
})
let options = {
    responsive: true
}
function clicked() {
    data.value.datasets[0].data = [20, 65, 35, 72, 86, 34, 63, 23]
    console.log(data.value.datasets[0].data)
}
</script>

<style lang="scss" scoped></style>