<template>
    <div class="add-container">
        <h2 style="text-align: center; padding-top: 2rem;">Thêm Tour mới</h2>
        <div class="mb-3">
            <label for="" class="form-label">Tiêu đề tour</label>
            <input type="text" class="form-control" id="" placeholder="">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Lịch Trình</label>
            <input type="text" class="form-control" id="" placeholder="">
        </div>
        <div class="type-date-from">
            <div class="mb-3 w-25">
                <label for="" class="form-label">Loại tour </label>
                <input type="text" class="form-control" id="" placeholder="">
            </div>
            <div class="mb-3 w-25">
                <label for="" class="form-label">Thời gian (Ngày)</label>
                <input type="number" class="form-control" id="" placeholder="">
            </div>
            <div class="mb-3 w-25">
                <label for="" class="form-label">Khởi hành từ</label>
                <input type="text" class="form-control" id="" placeholder="">
            </div>
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Vận chuyển</label>
            <input type="text" class="form-control" id="" placeholder="">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Giá Tour</label>
            <input type="text" class="form-control" id="" placeholder="">
        </div>
        <div class="accordion" id="">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-special" aria-expanded="true" aria-controls="accordion-special">
                        Điểm khác biệt
                    </button>
                </h2>
                <div id="accordion-special" class="accordion-collapse collapse show">
                    <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
                        plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
                        toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'outdent indent | numlist bullist | emoticons',
                    }" />
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-bonus" aria-expanded="false" aria-controls="accordion-bonus">
                        Dịch vụ đi kèm
                    </button>
                </h2>
                <div id="accordion-bonus" class="accordion-collapse collapse">
                    <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
                        plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
                        toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'outdent indent | numlist bullist | emoticons',
                    }" />
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-visa" aria-expanded="false" aria-controls="accordion-visa">
                        Visa
                    </button>
                </h2>
                <div id="accordion-visa" class="accordion-collapse collapse">
                    <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
                        plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
                        toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'outdent indent | numlist bullist | emoticons',
                    }" />
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-detail" aria-expanded="false" aria-controls="accordion-detail">
                        Lịch trình chi tiết
                    </button>
                </h2>
                <div id="accordion-detail" class="accordion-collapse collapse">
                    <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
                        plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
                        toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'outdent indent | numlist bullist | emoticons',
                    }" />
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-price-service" aria-expanded="false"
                        aria-controls="accordion-price-service">
                        Bảng giá và dịch vụ
                    </button>
                </h2>
                <div id="accordion-price-service" class="accordion-collapse collapse">
                    <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
                        plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
                        toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'outdent indent | numlist bullist | emoticons',
                    }" />
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-guide" aria-expanded="false" aria-controls="accordion-guide">
                        Lưu ý và hướng dẫn
                    </button>
                </h2>
                <div id="accordion-guide" class="accordion-collapse collapse">
                    <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
                        plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
                        toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'outdent indent | numlist bullist | emoticons',
                    }" />
                </div>
            </div>
        </div>
        <!-- <Editor v-model="Tiny" api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6" :init="{
            plugins: ' textcolor lists advlist link image table code help wordcount autosave emoticons',
            toolbar: ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'outdent indent | numlist bullist | emoticons',
        }" /> -->
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
    width: 75vw;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: aliceblue;
}

.type-date-from {
    display: flex;
    justify-content: space-between;
}

* {
    color: rgb(75, 75, 75);
}
</style>