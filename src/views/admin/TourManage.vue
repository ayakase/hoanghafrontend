<template>
    <div class="admin-tour-crud">
        <SortingComponent></SortingComponent>
        <button @click="router.push('/admin/them-tour')" class="btn btn-success add-tour" style="margin-bottom: 1rem;">
            Thêm tour mới <i class="fa-solid fa-plus"></i>
        </button>

        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên tour</th>
                    <th scope="col">Ngày thêm</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>

        <v-pagination v-model="page" :length="30" :total-visible="7" prev-icon="fa-solid fa-chevron-left"
            next-icon="fa-solid fa-chevron-right"></v-pagination>
        <div>{{ page }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SortingComponent from '../../components/SortingComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let page = ref()
</script>

<style lang="scss" scoped></style>