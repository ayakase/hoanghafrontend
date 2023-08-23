<template>
    <div class="add-container">
        <div class="mb-3">
            <label for="" class="form-label">Tiêu đề tour</label>
            <input type="text" class="form-control" id="" placeholder="">
        </div>
        <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
            plugins: 'lists advlist link image table code help wordcount autosave emoticons',
            toolbar: 'undo redo | styleselect | bold italic | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'outdent indent | numlist bullist | emoticons',
        }" />
    </div>
    <div v-html="Tiny" style="width: 80%;
"></div>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue'
let Tiny = ref()
</script>

<style  scoped>
.add-container {
    width: 80%;
    background-color: aliceblue;
}
</style>