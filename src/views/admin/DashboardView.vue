<template>
    <div class="admin-container">
        <div class="admin-side-nav">
            <RouterLink class="admin-side-item" to="/admin/tai-khoan-admin">Tài khoản<i class="fa-solid fa-user"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/thong-ke"><span>Thống kê</span> <i
                    class="fa-solid fa-chart-line"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/dat-tour">Đặt Tour<i class="fa-solid fa-box-archive"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/dang-ky-tu-van">Đăng ký tư vấn<i class="fa-solid fa-headset"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/quan-ly-tour">Quản Lí Tour <i
                    class="fa-regular fa-paper-plane"></i></RouterLink>
            <RouterLink class="admin-side-item" to="/admin/quan-ly-hot-tour">Tour Hot <i class="fa-solid fa-fire"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/quan-ly-slider">Ảnh Slider<i class="fa-regular fa-image"></i>
            </RouterLink>
            <RouterLink class="admin-side-item" to="/admin/bai-viet">Bài viết<i class="fa-regular fa-newspaper"></i>
            </RouterLink>

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
    width: 11rem;
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
    width: 11rem;

}

.admin-side-item:hover {
    background-color: #b6e4cf;
    width: 13.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.router-link-active {
    background-color: #b6e4cf;
    width: 13.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.admin-content {
    padding-left: 4rem;
}
</style>