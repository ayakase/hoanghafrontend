<script setup>
import PlaceModal from '../../components/PlaceModal.vue'

</script>
<template>
    <PlaceModal></PlaceModal>
    <!-- :title="gameTitle" :description="gameDescription" :download="downloadUrl" -->
    <hr class="hr" />
    <div class="content-container-outer">
        <div class="main-content">
            <h2 style="margin-bottom: 2rem;"> Khám phá đảo quốc Sư Tử Singapore 4N3Đ</h2>
            <div class="image-gallery">
                <!-- Gallery -->
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                            class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                            class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                    </div>
                </div>
                <!-- Gallery -->
            </div>
        </div>
        <div class="side-bar">
            <div class="place-order">
                <h5> Khám phá đảo quốc Sư Tử Singapore 4N3Đ</h5>
                <p>Lịch trình: <span style="color: #ff6b00;"> Lào Cai-Nội Bài-Singapore-Hà Nội</span></p>
                <p>Loại tour: <span style="color: #ff6b00;">Ghép đoàn</span></p>
                <p>Thời gian <span style="color: #ff6b00;">4N3Đ</span></p>
                <p>Khởi hành: <span style="color: #ff6b00;">Lào Cai</span></p>
                <p>Vận chuyển: <span style="color: #ff6b00;">Ô tô/ Máy bay</span></p>
                <div style="height: 5rem;"></div>
                <p>Giá tour: <span style="color: #ff6b00;">121212</span></p>
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



.hr {
    width: 100%;
}

.main-content {
    width: 70%;
    display: flex;
    flex-direction: column;
}

.first-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f1faf4;
    border-radius: 1rem;
    padding-top: 1rem;
    padding-left: 1rem;
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

.first-section-detail {
    background-color: #a4d4be;
    height: 60%;
    border-radius: 1rem;
    padding: 2rem;
    box-sizing: border-box;
}

.first-section-content {
    margin-left: 1rem;
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
    border: 2px solid rgb(80, 80, 80);
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
