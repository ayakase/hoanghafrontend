<template>
    <div class="library-container">
        <div class="images-section">
            <div style="display: flex;flex-direction: row;gap: 2rem; height:4rem;width: 80%;">
                <v-file-input v-model="files" placeholder="Upload your documents" label="Ảnh" multiple
                    prepend-icon="fa-solid fa-images" class="image-upload">
                    <template v-slot:selection="{ fileNames }">
                        <template v-for="fileName in fileNames" :key="fileName">
                            <v-chip size="small" label color="#006400" class="me-2">
                                {{ fileName }}
                            </v-chip>
                        </template>
                    </template>
                </v-file-input>
                <button class="btn btn-success" style="height: 90%;" @click="uploadImage">Tải ảnh lên &nbsp;<i
                        class="fa-solid fa-cloud-arrow-up"></i></button>
            </div>
            <div class="image-grid">
                <div v-for="image in 30" class="each-image">
                    <img style="width: 100%;height: 100%; object-fit: cover;border: 1px solid rgb(95, 95, 95);"
                        src="https://res.cloudinary.com/dxkmteupm/image/upload/v1695811427/slider-place-holder/awdwsr7ea2zysv4e2tak.jpg"
                        alt="">
                    <button class="delete-button"><i class="fa-regular fa-circle-xmark"
                            style="color: #cb3a3a;"></i></button>
                </div>
            </div>
        </div>
        <div class="action-section">
            <h3>URL</h3>
            <textarea readonly name="" id="" rows="8" placeholder=""
                value="https://res.cloudinary.com/dxkmteupm/image/upload/v1695811427/slider-place-holder/awdwsr7ea2zysv4e2tak.jpg">
            </textarea>
            <button style="justify-self: end;align-self: end;font-size:x-large"><i class="fa-regular fa-copy"></i></button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import baseUrl from '../../connect';
let files = ref([])
let pageNumber = ref(1)
function uploadImage() {
    console.log(files)
}
onMounted(() => {
    baseUrl.get('/admin/library/' + pageNumber.value).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
})
</script>

<style scoped>
.library-container {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.images-section {
    width: 80%;
}

.image-grid {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem
}

.each-image {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    background-color: rebeccapurple;
}

.action-section {
    margin-top: 4rem;
    display: flex;
    width: 20%;
    flex-direction: column;
}

textarea {
    resize: none;
    border: 2px solid gray;
    width: 100%;
}

.image-upload {}

.delete-button {
    position: relative;
    left: 0.2rem;
    top: 0.8rem;
}
</style>