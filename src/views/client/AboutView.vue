<template>
  <div class="about-container">
    <div class="about-sidebar">
      <RouterLink class="about-sidebar-item" to="/about/introduction"
        >Giới thiệu</RouterLink
      >
      <RouterLink class="about-sidebar-item" to="/about/aboutus"
        >Về chúng tôi</RouterLink
      >
      <RouterLink class="about-sidebar-item" to="/about/chinh-sach-va-quy-dinh"
        >Chính sách và quy định chung</RouterLink
      >
      <RouterLink class="about-sidebar-item" to="/about/bao-hiem-dich-vu"
        >Bảo hiểm dịch vụ</RouterLink
      >
      <RouterLink class="about-sidebar-item" to="/about/quy-trinh"
        >Quy trình đặt dịch vụ và thanh toán</RouterLink
      >
    </div>
    <div class="about-content">
      <!-- <RouterView></RouterView> -->
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.chatbox-enter-active {
  animation: bounce-in 0.5s;
}

.chatbox-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
.about-container {
  padding-top: 5rem;
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.about-sidebar {
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: #f1faf4;
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
  background-color: #97cbb4;
  border-right: #ff6b00 solid 6px;
}

.router-link-active {
  background-color: #97cbb4;
  border-right: #ff6b00 solid 6px;
}

.about-content {
  background-color: #f1faf4;
  width: 72%;
  padding: 2rem;
  height: 50rem;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 2rem;
  border-radius: 2rem;
}
</style>
