<template>
  <div class="about-container">
    <div class="about-sidebar">
      <RouterLink class="about-sidebar-item" to="/about/introduction">Giới thiệu</RouterLink>
      <RouterLink class="about-sidebar-item" to="/about/aboutus">Về chúng tôi</RouterLink>
      <RouterLink class="about-sidebar-item" to="/about/chinh-sach-va-quy-dinh">Chính sách và quy định chung</RouterLink>
      <RouterLink class="about-sidebar-item" to="/about/bao-hiem-dich-vu">Bảo hiểm dịch vụ</RouterLink>
      <RouterLink class="about-sidebar-item" to="/about/quy-trinh">Quy trình đặt dịch vụ và thanh toán</RouterLink>
    </div>
    <div class="about-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
.about-container {
  padding-top: 5rem;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: #F1FAF4;
  height: fit-content;
}

.about-sidebar-item {
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  height: 3rem;
  padding-top: 0.7rem;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.about-sidebar-item:hover {
  background-color: #97CBB4;
  border-right: #FF6B00 solid 6px;

}

.router-link-active {
  background-color: #97CBB4;
  border-right: #FF6B00 solid 6px;
}

.about-content {
  background-color: #F1FAF4;
  width: 72%;
  padding: 2rem;
}
</style>