<template>
    <div class="china-container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="fa-solid fa-house"></i> <a href="/" class="home-breadcrumb">Trang
                        chủ</a></li>
                <li class="breadcrumb-item">Du lịch Trung Quốc</li>
            </ol>
        </nav>
        <h2 style="color: #ff6b00;">Du lịch Trung Quốc</h2>
        <div class="section-container">
            <div class="tour-container">
                <div class="sort-container">
                    <p>Sắp xếp theo: </p>
                    <div class="sort-types">
                        <div class="sort-type">Hoàng Hà đề xuất</div>
                        <div class="sort-type">Mới nhất</div>
                        <div class="sort-type">Thời lượng tour</div>
                        <div class="sort-type">Giá tour</div>
                    </div>
                </div>
                <div v-if="tourList" v-for="tour in  tourList " :key="tour" class="tour-individual">
                    <div class="image-container" @click="router.push({ path: '/tourdetail', query: { id: tour.id } })">
                        <!-- <img src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_245773270v2.jpg"
                            style="width: 100%;" alt=""> -->
                        <v-img cover :width="50" class="thumbnail" :src=tour.thumbnail>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template></v-img>
                    </div>
                    <div class="tour-detail-container">
                        <div class="title" @click="router.push({ path: '/tourdetail', query: { id: tour.id } })"> {{
                            tour.title }}</div>
                        <div class="below-section" style="">
                            <div class="schedule"><b>Lịch trình: </b><span style="color: orange;">{{ tour.schedule }}</span>
                            </div>
                            <div class="tourtype"><b>Loại tour: </b> <span style="color: green;">{{ tour.tourtype }} </span>
                            </div>
                            <div class="days"><b>Thời gian: </b>{{ tour.days }}N{{ tour.days - 1 }}Đ</div>
                            <div class="departure"><b>Khởi hành: </b>{{ tour.departure }}</div>
                            <div class="transportation"><b>Vận chuyển: </b>{{ tour.transportation }}</div>
                        </div>
                    </div>
                    <div class="price"><span style="font-size: x-large; color: orangered;"><b>{{
                        numeralFormat(tour.adultprice)
                    }} </b></span>
                        <span style="color: orangered; font-weight: 100;"> VNĐ</span>
                    </div>
                </div>
                <LoadingComponent v-else />
                <v-pagination @click="getTourbyPage" v-model="pageNumber" :length="totalPage" :total-visible="5"
                    prev-icon="fa-solid fa-chevron-left" next-icon="fa-solid fa-chevron-right"></v-pagination>
                <div>{{ pageNumber }}</div>
            </div>
            <div class="hot-tour">
                <h2 style="padding-left: 1rem;">Tour hot</h2>
                <div class="card" style="background: none;border: none;">
                    <img src="../../assets/images/img2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5>
                        <p>Giá: <span style="font-weight: bold; color: #ff6b00;">3.600.000</span> VNĐ </p>
                        <hr class="hr" />
                    </div>
                </div>
                <div class="card" style="background: none;border: none;">
                    <img src="../../assets/images/img2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5>
                        <p>Giá: <span style="font-weight: bold; color: #ff6b00;">3.600.000</span> VNĐ </p>
                        <hr class="hr" />
                    </div>
                </div>
                <div class="card" style="background: none;border: none;">
                    <img src="../../assets/images/img2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5>
                        <p>Giá: <span style="font-weight: bold; color: #ff6b00;">3.600.000</span> VNĐ </p>
                        <hr class="hr" />
                    </div>
                </div>
                <div class="card" style="background: none;border: none;">
                    <img src="../../assets/images/img2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5>
                        <p>Giá: <span style="font-weight: bold; color: #ff6b00;">3.600.000</span> VNĐ </p>
                        <hr class="hr" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import LoadingComponent from '../../components/LoadingComponent.vue';
import baseUrl from '../../connect';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

// let posts = ref()
let totalPage = ref()
let pageNumber = ref(1)
let tourList = ref()
let sortOrder = ref("DESC")
let orderBy = ref("recommented")
onMounted(() => {
    baseUrl.get("/client/tour/" + 1 + "/" + sortOrder.value + "/" + pageNumber.value)
        .then((response) => {
            tourList.value = response.data.rows
        })
})
function getTourbyPage() {
    baseUrl.get("/client/tour/" + 1 + "/" + sortOrder.value + "/" + pageNumber.value)
        .then(response => {
            console.log(response.data)
            tourTable.value = response.data.rows
            totalPage.value = response.data.count / 10 + 1
        }).catch((error) => {
            console.error(error);
        });
}
</script>
<style scoped>
.china-container {
    padding-top: 2rem;
    width: 90%;
    margin: auto;
    padding: auto;
}

.section-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.title {
    font-size: 22px;
    font-weight: bold;
    color: #045B48;
    cursor: pointer;
}

.title:hover {
    color: #ff6b10;
}

.tour-container {
    width: 75%;
}

.tour-individual {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
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

.image-container {
    width: 18rem;
    display: inline-block;
    cursor: pointer;
    overflow: hidden !important;
}

.thumbnail {
    width: 100% !important;
    transition: .3s ease-in-out;
}

.thumbnail:hover {
    opacity: 0.6;
    filter: alpha(opacity=30);
    transform: scale(1.3);
}

.hot-tour {}
</style>