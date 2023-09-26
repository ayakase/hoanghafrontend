<template>
    <div class="order-manage-container">
        <div class="sorting-container">
            <div style="font-size: larger;">Bộ lọc:</div>
            <div class="sorting-button-container">
                <form class="d-flex search-container">
                    <button class="btn btn-outline-success" @click.prevent=""><i class="fas fa-search"></i></button>
                    <input @keydown.enter.prevent="" class="form-control me-2 search-box" type="search"
                        placeholder="Tìm kiếm theo tên" aria-label="Search">
                </form>

                <!-- <div class="btn-group">
                    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" style="color: white;">
                        Danh mục &nbsp; <i class="fa-solid fa-book"> :</i> {{ categoryLabel }}
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" @click="categoryChina">Trung Quốc &nbsp;<i
                                class="fa-solid fa-vihara"></i></button>
                        <button class="dropdown-item" @click="categoryDomestic">Trong nước &nbsp; <i
                                class="fa-solid fa-flag"></i> </button>
                        <button class="dropdown-item" @click="categoryGlobal">Quốc tế &nbsp; <i
                                class="fa-solid fa-globe"></i></button>
                    </div>
                </div> -->
                <div class="btn-group">
                    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" style="color: white;">
                        Trạng thái &nbsp; <i class="fa-solid fa-check-to-slot">: </i> {{ stateLabel }}
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" @click="unsolved">Chưa xử lí &nbsp; <i class="fa-solid fa-xmark"></i>
                        </button>
                        <button class="dropdown-item" @click="solved">Đã xử lí &nbsp;<i
                                class="fa-solid fa-check"></i></button>
                    </div>
                </div>
                <button class="sort-button btn btn-success" @click="Newest">Mới nhất &nbsp; <i
                        class="fa-solid fa-arrow-up-wide-short"></i></button>
                <button class="sort-button btn btn-success" @click="Oldest">Cũ nhất &nbsp; <i
                        class="fa-solid fa-arrow-down-wide-short"></i></button>
                <button class="btn btn-success" @click="reRender"><i class="fa-solid fa-rotate-right"></i></button>
                <!-- <button class="sort-button btn btn-success">Chưa xử lý &nbsp; <i
                        class="fa-solid fa-hourglass fa-spin"></i></button>
                <button class="sort-button btn btn-success">Đã xử lí &nbsp; <i
                        class="fa-solid fa-check fa-beat"></i></button> -->
            </div>
        </div>
        <table class="table table-success table-striped" style="width: 80vw;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            <thead>
                <tr>
                    <th style="vertical-align: top;" scope="col">Tên tour</th>
                    <th style="vertical-align: top;" scope="col">Khách hàng</th>
                    <th style="vertical-align: top;" scope="col">SĐT</th>
                    <th style="vertical-align: top;" scope="col">Ngày đặt</th>
                    <th style="vertical-align: top;" scope="col">Email</th>
                    <th style="vertical-align: top;" scope="col">Trẻ em (dưới 5)</th>
                    <th style="vertical-align: top;" scope="col">Trẻ em (5-11) tuổi</th>
                    <th style="vertical-align: top;" scope="col"> Người lớn (trên 12 tuổi) </th>
                    <th style="vertical-align: top;" scope="col"> Ghi chú</th>
                    <th style="vertical-align: top;" scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orderTable" :key="order" class="each-tour-row">
                    <td>{{ order.Tour.title }}</td>
                    <td>{{ order.name }}</td>
                    <td>{{ order.phone }}</td>
                    <td>{{ formatDate(order.createdAt) }}</td>
                    <td>{{ order.email }}</td>
                    <td>{{ order.children }}</td>
                    <td>{{ order.teenager }}</td>
                    <td>{{ order.adult }}</td>
                    <td>{{ order.note }}</td>
                    <td> <button class="solve-btn"><i class="fa-solid fa-check-to-slot"></i></button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import baseUrl from '../../connect';
let page = ref(1)
let sortOrder = ref("DESC");
let orderTable = ref()
let stateLabel = ref("Chưa xử lý")
function solved() {
    stateLabel.value = "Đã xử lý"
}
function unsolved() {
    stateLabel.value = "Chưa xử lý"
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(date).toLocaleString('vi-VN', options).replace(' tháng ', '/').replace('lúc', '').replace(', ', '/');
}
onMounted(() => {
    baseUrl.get("/admin/order/" + sortOrder.value + "/" + 1)
        .then(response => {
            console.log(response.data)
            orderTable.value = response.data.rows
            // formInfo.value = response.data.count / 10 + 1
            console.log(orderTable.value)
        }).catch((error) => {
            console.error(error);
        });
})

</script>

<style scoped>
.order-manage-container {
    margin-top: 2rem;
    width: 100%;
    /* background-color: blueviolet; */
}

.sorting-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
}

.sorting-button-container {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.sort-button {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.solve-btn {
    width: 100%;
}

.solve-btn:hover {
    color: white;
}
</style>