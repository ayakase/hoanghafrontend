<template>
    <div class="footer-form-manage">
        <div class="solve-btn-container"
            style="display: flex;flex-direction: row; width:15%; justify-content: space-between;">
            <button class="btn btn-success">
                Chưa xử lí
            </button>
            <button class="btn btn-success">
                Đã xử lí
            </button>
        </div>
        <table class="table table-success table-striped" style="width: 80vw;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Họ và Tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Ghi chú</th>
                    <th scope="col"> Chi tiết</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="info in formInfo" :key="info" class="each-tour-row">
                    <td scope="row">{{ info.id }}</td>
                    <td scope="row">{{ info.name }}</td>
                    <td scope="row">{{ info.phone }}</td>
                    <td scope="row">{{ info.email }}</td>
                    <td scope="row">{{ info.note }}</td>
                    <td scope="row">{{ info.id }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import baseUrl from '../../connect';
let sortOrder = ref("DESC");
let page = ref(1)
let formInfo = ref()
onMounted(() => {
    baseUrl.get("/admin/footer/" + sortOrder.value + "/" + 1)
        .then(response => {
            console.log(response.data)
            formInfo.value = response.data.rows
            // formInfo.value = response.data.count / 10 + 1
            console.log(formInfo.value)
        }).catch((error) => {
            console.error(error);
        });
    // console.log(formatDate("2023-08-29T19:20:29.000Z"))
})
</script>

<style scoped></style>