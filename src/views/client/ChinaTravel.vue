<template>
    <div class="china-container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="fa-solid fa-house"></i> <a href="/" class="home-breadcrumb">Trang
                        chủ</a></li>
                <li class="breadcrumb-item">Du lịch Trung Quốc</li>
            </ol>
        </nav>
        <div class="tour-container">
            <div class="tour-section-header">
                <!-- <img src="../assets/icon_title 1.png" alt=""> -->
            </div>
            <div class="sort-container">
                <p>Sắp xếp theo: </p>
                <div class="sort-types">
                    <div class="sort-type">Hoàng Hà đề xuất</div>
                    <div class="sort-type">Mới nhất</div>
                    <div class="sort-type">Thời lượng tour</div>
                    <div class="sort-type">Giá tour</div>
                </div>
            </div>
            <div v-if="posts" v-for="post in posts" :key="post" class="tour-individual" @click="router.push('/tourdetail')">
                <div class=" image-container">
                    <!-- <img src="" style="width: 100%;" alt=""> -->
                    <v-img :width="300" aspect-ratio="16/9" cover
                        src="https://blog.wego.com/wp-content/uploads/shutterstock_449250082_zi32oc.jpg"></v-img>
                </div>
                <div class="tour-detail-container">
                    <div class="title"> {{ post.title }}</div>
                    <div class="schedule"><b>Lịch trình: </b><span style="color: orange;">{{ post.schedule }}</span>
                    </div>
                    <div class="tourtype"><b>Loại tour: </b> <span style="color: green;">{{ post.tourtype }} </span>
                    </div>
                    <div class="days"><b>Thời gian: </b>{{ post.days }}N{{ post.days - 1 }}Đ</div>
                    <div class="departure"><b>Khởi hành: </b>{{ post.departure }}</div>
                    <div class="transportation"><b>Vận chuyển: </b>{{ post.transportation }}</div>
                </div>
                <div class="price"><span style="font-size: x-large; color: orangered;"><b>{{ numeralFormat(post.price)
                }} </b></span>
                    <span style="color: orangered; font-weight: 100;"> VNĐ</span>
                </div>
            </div>
            <LoadingComponent v-else />
        </div>
    </div>
</template>

<script setup>
import LoadingComponent from '../../components/LoadingComponent.vue';
import baseUrl from '../../connect';
import { onMounted, ref } from 'vue';
let posts = ref()
onMounted(() => {
    baseUrl.get("/").then((response) => {
        console.log(response)
    })
    setTimeout(() => {
        posts.value = [
            {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 323480000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 348000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            }, {
                title: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA - CÔN MINH (6N5Đ)",
                schedule: "LÀO CAI - ĐẠI LÝ - LỆ GIANG - SHANGRILA",
                days: 6,
                transportation: "Ô tô/Tàu",
                price: 300000,
                tourtype: "Ghép/đoàn riêng",
                departure: "Lào Cai"

            },]
    }, 1000);
})
</script>

<style>
.china-container {
    padding-top: 2rem;
    width: 100%;
    margin: auto;
    padding: auto;
}

.breadcrumb-item {
    font-size: large;
}

.home-breadcrumb {
    text-decoration: none !important;
    font-weight: bold;
    color: black;
}

p {
    margin: 0 !important;
    padding: 0 !important;
}

.outer-container {
    padding-top: 2rem;
    width: 90%;
    margin: auto;
    padding: auto;
}

.breadcrumb-item {
    font-size: large;
}

.home-breadcrumb {
    text-decoration: none !important;
    font-weight: bold;
    color: black;
}

.tour-detail-container {
    width: 35rem;

}

.title {
    font-size: 22px;
    font-weight: bold;
    color: #045B48;
}

.tour-container {
    width: 80%;
}

.tour-individual {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #F1FAF4;
    margin-bottom: 1rem;
    padding: 1rem;
}



.inner-container {
    display: flex;
    flex-direction: row;
}

.price {
    width: 12rem;
    text-align: end;
}

.tour-section-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
}

.hot-tour-sidebar {
    background-color: #F1FAF4;
    width: 18%;
    margin-right: 2rem;
}

.sort-container {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.sort-types {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.sort-type {
    width: 10rem;
    background-color: #DBEBE1;
    text-align: center;
    padding: 0.8rem;
}

.hot-tour-sidebar {
    display: flex;
    flex-direction: column;
}

.hot-tour-sidebar-item {
    padding-left: 1rem;
    height: 2.5rem;
    padding-top: 0.5rem;
}

.hot-tour-sidebar-item:hover {
    background-color: #97CBB4;
}

.image-container {
    width: 16rem;
}
</style>