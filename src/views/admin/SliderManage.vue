<template>
    <div class="slider-manage-container">
        <button @click="router.push('quan-li-slider/them-slide')" style="margin-bottom: 2rem;" class="btn btn-success">
            Thêm Slider
        </button>
        <div class="slider-list">
            <div class="slider-item" v-for="(item, index) in 5" :key="index">
                <div class="slider-item-img">
                    <v-img class="slider-img"
                        src="https://res.cloudinary.com/dxkmteupm/image/upload/v1696536816/slider-images/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF_offzn1.jpg"
                        alt="" style="width: 100%;"></v-img>
                </div>
                <div class="slider-content">
                    <p>ID: </p>
                    <p>Tiêu đề:</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
const thumbnailSrc = ref()
function processImg(event) {
    if (event.target.files.length) {
        thumbnailSrc.value = URL.createObjectURL(event.target.files[0]);
    }
    tourThumbnail.value = event.target.files[0]
}
</script>

<style scoped>
.slider-manage-container {
    margin-top: 2rem;
}

.slider-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}

.slider-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.slider-content {
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.slider-item-img {
    width: 20rem;
    overflow: hidden;
}

.slider-img {
    border-radius: 1rem;
    object-fit: cover;
}
</style>