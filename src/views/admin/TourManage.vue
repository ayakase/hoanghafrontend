<template>
    <div class="admin-tour-crud">
        <SortingComponent></SortingComponent>
        <button @click="router.push('/admin/quan-li-tour/them-tour')" class="btn btn-success add-tour"
            style="margin-bottom: 1rem;">
            Thêm tour mới <i class="fa-solid fa-plus"></i>
        </button>

        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên tour</th>
                    <th scope="col">Lịch trình</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Khởi hành</th>
                    <th scope="col">Số ngày</th>
                    <th scope="col">Tour Hot</th>
                    <th scope="col">Phương tiện</th>

                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="tour in tourTable" :key="tour">
                    <th scope="row">{{ tour.id }}</th>
                    <td>{{ tour.title }}</td>
                    <td>{{ tour.schedule }}</td>
                    <td>{{ tour.tourcategory }}</td>
                    <td>{{ tour.departure }}</td>
                    <td>{{ tour.days }}</td>
                    <td>{{ tour.ishottour }}</td>
                    <td>{{ tour.transportation }}</td>
                    
                </tr>

            </tbody>
        </table>
        <v-pagination v-model="page" :length="30" :total-visible="7" prev-icon="fa-solid fa-chevron-left"
            next-icon="fa-solid fa-chevron-right"></v-pagination>
        <div>{{ page }}</div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SortingComponent from '../../components/SortingComponent.vue';
import { useRouter } from 'vue-router';
import baseUrl from '../../connect';

const router = useRouter();
let page = ref()
let tourTable = ref()
onMounted(() => {
    baseUrl.get("/admin/tour",)
        .then(response => {
            console.log(response.data)
            tourTable.value = response.data
            // toast.success("Đã nhận thông tin", {
            //     autoClose: 2000,
            //     theme: "dark",
            //     position: toast.POSITION.BOTTOM_RIGHT,
            // });
        })
})
</script>

<style lang="scss" scoped></style>