<template>
    <div class="slider-manage-container">
        <div class="img-section">
            <div class="mb-3 thumbnail">
                <label for="formFile" class="form-label">Slider 1</label>
                <input class="form-control" accept="image/*" type="file" id="formFile" @change="processImg">
                <div style="width: 25rem;margin-top: 1rem;">
                    <img :src=thumbnailSrc alt="" style="width: 100%;">
                </div>
            </div>
            <div class="mb-3 thumbnail">
                <label for="formFile" class="form-label">Slider 2</label>
                <input class="form-control" accept="image/*" type="file" id="formFile" @change="processImg">
                <div style="width: 25rem;margin-top: 1rem;">
                    <img :src=thumbnailSrc alt="" style="width: 100%;">
                </div>
            </div>
            <div class="mb-3 thumbnail">
                <label for="formFile" class="form-label">Slider 3</label>
                <input class="form-control" accept="image/*" type="file" id="formFile" @change="processImg">
                <div style="width: 25rem;margin-top: 1rem;">
                    <img :src=thumbnailSrc alt="" style="width: 100%;">
                </div>
            </div>
        </div>
        <div class="img-section">
            <div class="mb-3 thumbnail">
                <label for="formFile" class="form-label">Slider 1</label>
                <input class="form-control" accept="image/*" type="file" id="formFile" @change="processImg">
                <div style="width: 25rem;margin-top: 1rem;">
                    <img :src=thumbnailSrc alt="" style="width: 100%;">
                </div>
            </div>
            <div class="mb-3 thumbnail">
                <label for="formFile" class="form-label">Slider 2</label>
                <input class="form-control" accept="image/*" type="file" id="formFile" @change="processImg">
                <div style="width: 25rem;margin-top: 1rem;">
                    <img :src=thumbnailSrc alt="" style="width: 100%;">
                </div>
            </div>
            <div class="mb-3 thumbnail">
                <label for="formFile" class="form-label">Slider 3</label>
                <input class="form-control" accept="image/*" type="file" id="formFile" @change="processImg">
                <div style="width: 25rem;margin-top: 1rem;">
                    <img :src=thumbnailSrc alt="" style="width: 100%;">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.img-section {
    width: 40%;
}
</style>