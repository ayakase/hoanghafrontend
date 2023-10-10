<template>
    <div class="outer-container">
        <div class="access-number">
            <h4 style="text-align: center;">Tổng lượt truy cập</h4>
            <count-up class="count-number" :end-val="count" :duration="1"></count-up>
        </div>
        <div class="chart-container">
            <div class="year-chart">
                <Bar :data="yeardata" :options="options" />
            </div>
            <div class="week-chart">
                <Line :data="weekdata" :options="options" />
            </div>
        </div>
        <button @click="clicked"> A </button>
    </div>
</template>

<script setup>
import baseUrl from "../../connect";
import CountUp from 'vue-countup-v3'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js'
import { onMounted, ref } from 'vue';
import { Bar, Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, LineElement, PointElement)
let count = ref()
onMounted(() => {
    baseUrl.get('/admin/count').then((response) => {
        console.log(response.data)
        count.value = response.data.count
    }).catch((error) => {
        console.log(error)
    })
})
let yeardata = ref({
    labels: ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'],
    datasets: [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(201, 203, 207, 0.6)',

            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1,
            data: [40, 20, 12, 45, 66, 88, 43]
        }
    ]
})
let weekdata = ref({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
        {
            backgroundColor: 'red',
            borderColor: 'rgba(255, 99, 132)',
            borderWidth: 3,
            data: [40, 20, 12, 45, 66, 88, 43, 23, 45, 78, 34, 34]
        }
    ]
})
let options = {
    responsive: true
}
function clicked() {
    data.value.datasets[0].data = [20, 65, 35, 72, 86, 34, 63, 23]
    console.log(data.value.datasets[0].data)
}
</script>

<style scoped>
.access-number {
    height: 10rem;
    background-color: #cdecde;
    width: 10rem;
    padding: 0.5rem;
    padding-top: 1.5rem;
    border-radius: 1rem;

}

.count-number {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: red;
}

.year-chart,
.week-chart {
    width: 49%;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #cdecde;
}

.outer-container {
    width: 100%;
    margin-top: 2rem;
}

.chart-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
}
</style>