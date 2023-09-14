<template>
    <div class="admin-container">
        <div class="admin-side-nav">
            <div class="admin-side-item"><i class="fa-solid fa-user"></i></div>
            <RouterLink class="admin-side-item" to="/admin/thong-ke"><span>Thống kê</span> <i
                    class="fa-solid fa-chart-line"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/anh-slider">Ảnh Slider</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/dat-tour">Đặt Tour</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/quan-ly-tour">Quản Lí Tour</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/bai-viet">Bài viết</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/dang-ky-tu-van">Đăng ký tư vấn</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/dang-ky-tu-van">Tour Hot</RouterLink>

        </div>
        <div class="admin-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>
.admin-container {
    display: flex;
    flex-direction: row;
}

.admin-side-nav {
    display: flex;
    flex-direction: column;
    background-color: #97CBB4;
    width: 10rem;
    height: inherit;
    box-shadow: rgba(0, 0, 0, 0.24) 5px 3px 8px;
}

.admin-side-item {
    height: 3rem;
    text-decoration: none;
    padding: 1rem;
    color: black;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: width 0.1s ease-in-out;
    width: 10rem;

}

.admin-side-item:hover {
    background-color: #b6e4cf;
    width: 13rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.router-link-active {
    background-color: #b6e4cf;
    width: 13rem;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


}

.admin-content {
    padding-left: 5rem;
}
</style>