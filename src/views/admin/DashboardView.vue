<template>
    <div class="admin-container">
        <div class="admin-side-nav">
            <RouterLink class="admin-side-item" to="/admin/dat-tour">Đặt Tour</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/quan-ly-tour">Quản Lí Tour</RouterLink>
            <RouterLink class="admin-side-item" to="/admin/bai-viet">Bài viết</RouterLink>
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
    display: flex;
    justify-content: space-between;
}

.admin-side-nav {
    display: flex;
    flex-direction: column;
    background-color: #97CBB4;
    width: 10%;
    height: 100%;
}

.admin-side-item {
    height: 3rem;
    text-decoration: none;
    padding: 1rem;
    color: black;
    font-weight: bold;
}
.admin-side-item:hover {
    background-color: #b6e4cf;
}
.admin-content {
    width: 88%;
}
</style>