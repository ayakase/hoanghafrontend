<template>
    <div class="outer-container">
        <div class="first-section">

            <div style="display: flex;flex-direction: column;gap: 1.65rem;">
                <div class="access-number">
                    <h4 style="text-align: center;">Tổng lượt truy cập</h4>
                    <count-up class="count-number" :end-val="viewCount" :duration="1"></count-up>
                </div>
                <div class="access-number">
                    <h4 style="text-align: center;">Tổng số đặt tour</h4>
                    <count-up class="count-number" :end-val="orderCount" :duration="1"></count-up>
                </div>
                <div class="tour-number">
                    <h4 style="text-align: center;">Tổng số tour</h4>
                    <count-up class="count-number" :end-val="tourCount" :duration="1"></count-up>
                </div>
                <div class="advise-number">
                    <h4 style="text-align: center;">Tổng yêu cầu tư vấn</h4>
                    <count-up class="count-number" :end-val="adviseCount" :duration="1"></count-up>
                </div>
            </div>
            <div class="notification">
                <div
                    style="width: 100%;display: flex;justify-content: space-between;margin-bottom: 1rem;align-items: start;">
                    <h4>Thông báo &nbsp; <i class="fa-solid fa-bell fa-shake"></i></h4>
                    <button @click="fetchNotification" class="btn-success" style="margin-right: 2rem;font-size: large;"><i
                            class="fa-solid fa-arrow-rotate-right"></i></button>
                </div>
                <div class=" noti-container">
                    <div v-if="notification" class="each-noti" v-for="item in notification" :key="item.id">
                        <p v-html="item.action"></p>
                        <p style="color: rgb(75, 75, 75);text-align: end;">vào lúc {{
                            formatDate(item.createdAt) }}</p>
                    </div>
                    <TableLoading v-else></TableLoading>
                </div>
                <v-pagination @click="fetchNotification" v-model="notiPage" :length="notiTotalPage" :total-visible="3"
                    prev-icon="fa-solid fa-chevron-left" next-icon="fa-solid fa-chevron-right"></v-pagination>
            </div>
            <div class="notification">
                <div>
                    <h4>Thong bao</h4>
                </div>
                <div class="noti-container">
                    <div class="each-noti" v-for="item in 10" :key="item.id">
                        <p class="action" style="font-weight: bold;">User x has done something</p>
                        <p>vao luc a</p>
                    </div>
                </div>
                <v-pagination @click="fetchNotification" v-model="notiPage" :length="notiTotalPage" :total-visible="3"
                    prev-icon="fa-solid fa-chevron-left" next-icon="fa-solid fa-chevron-right"></v-pagination>
            </div>
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
import TableLoading from '../../components/TableLoading.vue';

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
let viewCount = ref()
let orderCount = ref()
let tourCount = ref()
let adviseCount = ref()
let notification = ref()
let notiTotalPage = ref()
let notiPage = ref(1)
function fetchNotification() {
    notification.value = null
    baseUrl.get('/admin/notification/' + notiPage.value).then((response) => {
        console.log(response.data)
        notification.value = response.data.rows
        notiTotalPage.value = response.data.count / 10 + 1
    }).catch((error) => {
        console.log(error)
    });
}
onMounted(() => {
    baseUrl.get('/admin/count/view').then((response) => {
        console.log(response.data)
        viewCount.value = response.data.count
    }).catch((error) => {
        console.log(error)
    })
    baseUrl.get('/admin/count/order').then((response) => {
        console.log(response.data)
        orderCount.value = response.data
    }).catch((error) => {
        console.log(error)
    })
    baseUrl.get('/admin/count/tour').then((response) => {
        console.log(response.data)
        tourCount.value = response.data
    }).catch((error) => {
        console.log(error)
    })
    baseUrl.get('/admin/count/advise').then((response) => {
        console.log(response.data)
        adviseCount.value = response.data
    }).catch((error) => {
        console.log(error)
    })
    fetchNotification()

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
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(date).toLocaleString('vi-VN', options).replace(' tháng ', '/').replace('lúc', '').replace(', ', '/');
}
</script>

<style scoped>
p {
    margin: 0;
    padding: o;
}

.first-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.notification {
    width: 40rem;
    height: 51rem;
    background-color: #cdecde;
    border-radius: 1rem;
    overflow: hidden;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.noti-container {
    height: 88%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

}

.each-noti {
    width: 98%;
    border-radius: 0.3rem;
    /* height: 8rem; */
    background-color: #bbdccd;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.access-number {
    height: 10rem;
    background-color: #cdecde;
    width: 10rem;
    padding: 0.5rem;
    padding-top: 1.5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.tour-number {
    height: 10rem;
    background-color: #cdecde;
    width: 10rem;
    padding: 0.5rem;
    padding-top: 1.5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.advise-number {
    height: 10rem;
    background-color: #cdecde;
    width: 10rem;
    padding: 0.5rem;
    padding-top: 1.5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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

.each-noti p:first-child {
    width: 33rem;
    white-space: nowrap;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    white-space: initial;
}
</style>