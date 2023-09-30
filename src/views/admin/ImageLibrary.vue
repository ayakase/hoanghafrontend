<template>
    <div class="library-container">
        <div class="images-section">
            <div style="display: flex;flex-direction: row;gap: 2rem;width: 80%;">
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
                <div v-for="image in images" :key="image" class="each-image">
                    <v-img cover class="each-image" :src=image.url @click="toggleUrl(image.url)">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template></v-img>
                </div>
                <button @click="nextPage"> Next page</button>

            </div>
        </div>
        <div class="action-section">
            <h3>URL</h3>
            <textarea readonly name="" id="" rows="8" placeholder="" :value=copyUrl>
            </textarea>
            <button style="justify-self: end;align-self: end;font-size:x-large"><i class="fa-regular fa-copy"></i></button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import baseUrl from '../../connect';
import galleryData from '../../../gallery.json'
let images = ref()
let files = ref([])
let pageNumber = ref(2)
let copyUrl = ref()

function showUrl(url) {
    console.log(url)
    copyUrl.value = url
}
function toggleUrl(url) {
    let toggleState = ref()
    if (toggleState.value) {
        copyUrl.value = url
        toggleState.value = !toggleState.value
    } else {
        copyUrl.value = ''
        toggleState.value = !toggleState.value
    }

}

// function uploadImage() {
//     console.log(files)
//     baseUrl
// }
let nextCursor = ref(null)
onMounted(() => {
    // console.log("a")
    // images.value = galleryData
    baseUrl.get('/admin/library/' + nextCursor.value || '')
        .then((response) => {
            console.log(response.data)
            images.value = response.data.resources
            nextCursor.value = response.data.next_cursor
        }).catch((error) => {
            console.log(error)
        })
})
function nextPage() {
    baseUrl.get('/admin/library/' + nextCursor.value)
        .then((response) => {
            console.log(response.data.resources)
            images.value = response.data.resources
        }).catch((error) => {
            console.log(error)
        })
}
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
    background-color: rgb(91, 91, 91);
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