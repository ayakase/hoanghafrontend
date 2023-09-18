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

                <div class="btn-group">
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
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" style="color: white;">
                        Tình trạng &nbsp; <i class="fa-solid fa-check-to-slot">: </i> {{ categoryLabel }}
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" @click="categoryDomestic">Chưa xử lí &nbsp; <i
                                class="fa-solid fa-xmark"></i> </button>
                        <button class="dropdown-item" @click="categoryChina">Đã xử lí &nbsp;<i
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
        <table :key="componentKey" class="table table-success table-striped"
            style="width: 80vw;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên tour</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">SĐT</th>
                    <th scope="col">Ngày đặt</th>
                    <th scope="col">Email</th>
                    <th scope="col">Trẻ em(dưới 5)</th>
                    <th scope="col">Trẻ em(5-11) tuổi</th>
                    <th scope="col"> Người lớn(trên 12 tuổi)</th>
                    <th scope="col"> Số ngày</th>
                    <th scope="col"> Ghi chú</th>
                </tr>
            </thead>
            <tbody>
                <tr class="each-tour-row">
                    <th scope="row">1</th>
                    <td> Lao Cai</td>
                    <td>Bui Duc Anh</td>
                    <td>012401242412</td>
                    <td>12/8/4332</td>
                    <td>sdsd@gmail.com</td>
                    <td>2</td>
                    <td>3</td>
                    <td>5</td>
                    <td>4</td>
                    <td style="max-width: 15rem;">sdka asdd sad sd d fsd f sdf sdf ds sd f sdf sdf sdf sd fsd fs df sf sdf
                        sdf df sdf sdf sd fs dfs dfs dfsd fsd </td>
                </tr>

                <tr v-for="tour in tourTable" :key="tour" class="each-tour-row">
                    <th scope="row">{{ tour.id }}</th>
                    <td>{{ tour.title }}</td>
                    <td>{{ tour.schedule }}</td>
                    <td>{{ tour.tourcategory }}</td>
                    <td>{{ tour.departure }}</td>
                    <td>{{ tour.days }}</td>
                    <td>{{ tour.ishottour }}</td>
                    <td>{{ tour.transportation }}</td>
                    <td>{{ formatDate(tour.createdAt) }}</td>
                    <td> <button class="edit-button"><i class=" fa-solid fa-pen-to-square"></i></button>
                    </td>
                    <td> <button class="delete-button" @click="deleteTour(tour.id)"><i
                                class="fa-solid fa-trash"></i></button></td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.order-manage-container {
    width: 90em;
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
</style>