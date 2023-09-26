<script setup>
import PlaceModal from '../../components/PlaceModal.vue'
import { onMounted, ref } from 'vue';
import baseUrl from '../../connect';
import { useRoute } from 'vue-router';
const route = useRoute();
const tourDetail = ref()
const adultPrice = ref()
const teenagerPrice = ref()
const childPrice = ref()
let pageUrl = ref("https://dulichhoangha.com/tourdetail?id=" + route.query.id)
onMounted(() => {
    baseUrl.get("client/each-tour/" + route.query.id).then(response => {
        console.log(response.data[0])
        tourDetail.value = response.data[0]
        adultPrice.value = response.data[0].adultprice
        teenagerPrice.value = response.data[0].youngprice
        childPrice.value = response.data[0].childprice
    }).catch((error) => {
        console.error(error);
    });
})
let tabSec1 = ref()
let tabSec2 = ref()
</script>
<template>
    <PlaceModal :tourId="route.query.id" :childPrice="childPrice" :adultPrice="adultPrice" :teenagerPrice="teenagerPrice">
    </PlaceModal>
    <!-- :title="gameTitle" :description="gameDescription" :download="downloadUrl" -->
    <hr class="hr" />
    <div v-if="tourDetail" class="content-container-outer">
        <div class="main-content">
            <h2 style="margin-bottom: 2rem;"> {{ tourDetail.title }}</h2>
            <v-card class="first-section" elevation="0">
                <v-tabs class="tab-slider" v-model="tabSec1" color="white" align-tabs="start">
                    <v-tab class="each-tab" value="one">Điểm khác biệt</v-tab>
                    <p style="width: 4rem;"></p>
                    <v-tab class="each-tab" value="two">Dịch vụ đi kèm</v-tab>
                    <p style="width: 4rem;"></p>

                    <v-tab class="each-tab" value="three">Visa</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tabSec1">
                        <v-window-item value="one" v-html="tourDetail.special">
                        </v-window-item>
                        <v-window-item value="two" v-html="tourDetail.bonus">
                        </v-window-item>

                        <v-window-item value="three" v-html="tourDetail.visa">

                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
            <v-card class="second-section" elevation="0">
                <v-tabs class="tab-slider" v-model="tabSec2" color="white" align-tabs="start">
                    <v-tab class="each-tab" value="one">Lịch trình chi tiết</v-tab>
                    <p style="width: 4rem;"></p>
                    <v-tab class="each-tab" value="two">Bảng giá và dịch vụ</v-tab>
                    <p style="width: 4rem;"></p>

                    <v-tab class="each-tab" value="three">Lưu ý và hướng dẫn</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tabSec2">
                        <v-window-item value="one" v-html="tourDetail.detail">
                        </v-window-item>
                        <v-window-item value="two" v-html="tourDetail.priceservice">
                        </v-window-item>
                        <v-window-item value="three" v-html="tourDetail.guide">
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </div>
        <div class="side-bar">
            <div class="place-order" v-if="tourDetail">
                <h5> {{ tourDetail.title }}</h5>
                <p>Lịch trình: <span style="color: #ff6b00;"> {{ tourDetail.schedule }}</span></p>
                <p>Loại tour: <span style="color: #ff6b00;">{{ tourDetail.tourtype }}</span></p>
                <p>Thời gian <span style="color: #ff6b00;">{{ tourDetail.days }}N{{ tourDetail.days - 1 }}Đ</span></p>
                <p>Khởi hành: <span style="color: #ff6b00;">{{ tourDetail.departure }}</span></p>
                <p>Vận chuyển: <span style="color: #ff6b00;">{{ tourDetail.transportation }}</span></p>
                <div style="height: 5rem;"></div>
                <p>Giá tour: <span style="color: #ff6b00;">{{ numeralFormat(tourDetail.adultprice) }}</span></p>
                <div class="action-button">
                    <button class="btn place-btn" data-bs-toggle="modal" data-bs-target="#placeModal">Đặt tour</button>
                    <button class="btn advise-btn">Tư vấn</button>
                </div>
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
    <div>
        <div class="fb-comments" :data-href="pageUrl" data-width="500" data-numposts="10"></div>
    </div>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
</template>
<style>
.content-container-outer {
    padding-top: 1rem;
    margin: auto;
    padding: auto;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.first-section {
    background-color: #DBEBE1;
    padding: 2rem;
    box-sizing: border-box;
}

.second-section {
    margin-top: 4rem;
    background-color: #DBEBE1;
    padding: 2rem;
    box-sizing: border-box;
}

.tab-slider {
    width: 100%;
}

.each-tab {
    background-color: #97CBB4;
    padding: left 1rem;
    padding-right: 1rem;
}

.hr {
    width: 100%;
}

.main-content {
    width: 70%;
    display: flex;
    flex-direction: column;
}

.choose-plan {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 1rem;
}

.choose-btn {
    background-color: #a4d4be;
}

.choose-btn:hover {
    background-color: #86c5a9;
}

.side-bar {
    position: sticky;
    top: 0rem;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 1rem;
}

.hot-tour {
    background-color: #f1faf4;
    padding-top: 1rem;
}

.card-img-top {
    width: 90%;
    margin: auto;
    padding: auto;
}

.place-order {
    /* height: 20rem; */
    background-color: #DBEBE1;
    padding: 1rem;
    border-radius: 4px;
    border: 2px solid rgb(138, 138, 138);
    margin-bottom: 4rem;
}

.action-button {
    display: flex;
    justify-content: space-around;
}

.place-btn {
    background-color: #97CBB4;
    width: 6rem;
}

.place-btn:hover {
    background-color: #7fb89e;
    width: 6rem;
}

.advise-btn {
    background-color: #FF6B00;
    width: 6rem;
    color: white;
}
</style>
