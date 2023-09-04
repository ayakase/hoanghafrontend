<script>
import { RouterLink, RouterView } from 'vue-router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, onMounted } from 'vue';
import PageFooter from './components/PageFooter.vue'
import scrollToTop from './components/ScrollToTop.vue'
export default {
  components: { PageFooter, scrollToTop },
  name: "App",
  setup() {
    const notify = () => {
      toast.warn("Trang web đang trong quá trình xây dựng, còn nhiều thiết sót mong bạn thông cảm", {
        autoClose: 60000,
        theme: "dark",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

    let searchText = ref("")
    function searchSend() {
      toast.success("Đang tìm kiếm " + searchText.value, {
        autoClose: 5000,
        theme: "dark",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    onMounted(() => {
      showChatbox = false;
      // notify()
    })
    let chatBoxValue = ref(false)
    let showChatbox = () => {
      if (chatBoxValue.value == false) {
        chatBoxValue.value = true;
      } else if (chatBoxValue.value == true) {
        chatBoxValue.value = false;
      }
    }
    return { searchSend, searchText, showChatbox, chatBoxValue };
  }
};

</script>

<template>
  <div class="header-container">
    <RouterLink class=" btn btn-success active admin-button" to="/admin" aria-current="page" href="#">Admin
    </RouterLink>
    <!-- <div class="banner-text"> -->
    <!-- <p class="company-name">HOÀNG HÀ</p>
      <p class="subtext-1">travel and tourism</p> -->
    <!-- </div> -->
    <img src="./assets/stamp.png" alt="" class="stamp">
    <img src="./assets/header1.jpg" alt="" class="banner">
    <nav class="navbar navbar-expand-lg custom-bg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-5 mb-lg-0">
            <!-- <li class="nav-item">
              <RouterLink class="nav-link active" to="/" aria-current="page" href="#">Trang Chủ</RouterLink>
            </li> -->
            <div class="vl"></div>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DANH MỤC
              </a>

              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="nav-link active" to="/" aria-current="page" href="#">Trang chủ</RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/about/chinh-sach-va-quy-dinh" aria-current="page" href="#">Về
                    chúng tôi
                  </RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/hottour" aria-current="page" href="#">Tour Hot &nbsp;<i style="color: orangered;" class="fa-solid fa-fire fa-bounce"></i>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/domestictravel" aria-current="page" href="#">Du lịch trong nước
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/chinatravel" aria-current="page" href="#">Du lịch Trung Quốc
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/foreigntravel" aria-current="page" href="#">Du lịch quốc tế
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/foreigntravel" aria-current="page" href="#">Dịch vụ du lịch
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/foreigntravel" aria-current="page" href="#">Cẩm nang
                  </RouterLink>
                </li>

              </ul>
            </li>
            <div class="vl"></div>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link active" to="/register" aria-current="page" href="#">Đăng ký</RouterLink>
            </li> -->
            <form class="d-flex search-container">
              <button class="btn btn-outline-success" @click.prevent="searchSend"><i class="fas fa-search"></i></button>
              <input @keydown.enter.prevent="searchSend" v-model="searchText" class="form-control me-2 search-box"
                type="search" placeholder="Search" aria-label="Search">
            </form>

            <li class="nav-item hotline">
              <a class="nav-link active" to="/" aria-current="page" href="tel:0124 3.855.158">HOTLINE: <span
                  style="color: rgb(255, 208, 0);">02143855158</span>
                <img src="./assets/call-center.png" alt="" class="call-icon">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="content-container">
    <RouterView />
  </div>

  <!-- <div class="spacer" style="height: 8rem;"></div> -->
  <PageFooter></PageFooter>
  <scrollToTop></scrollToTop>
  <!-- <div class="chat-btn">
    <button @click="showChatbox" type="button" class="btn btn-success scroll-button"><i
        class="fa-solid fa-message"></i></button>
    <Transition name="chatbox">
      <div class="chat-box" v-if="chatBoxValue">
        <div class="chat-header">
          <i class="fa-solid fa-user-tie chat-user"></i>
          <h3>Hỗ trợ trực tuyến</h3>
        </div>
        <div class="chat-section">
          <p> Xin chao </p>
          <p> Xin chao </p>
          <p> Xin chao </p>
          <p> Xin chao </p>
          <p> Xin chao </p>
          <p> Xin chao </p>
          <p> Xin chao </p>
        </div>
        <input type="text" class="chat-text">
      </div>
    </Transition>
  </div> -->
</template>

<style scoped>
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

.header-container {
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-47%, -70%);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.company-name {
  color: #045B48;
  font-size: 5em;
  font-weight: bold;
}

.vl {
  width: 1rem;
  border-left: 1px solid #045B48;
}

.subtext-1 {
  color: #045B48;

  font-size: larger;
  padding-left: 1rem;
  padding-bottom: 1.3rem;
}

.stamp {
  display: none;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.call-icon {
  width: 2.2rem;
  padding-bottom: 0.2rem;
}

nav {
  padding: 0.35rem;
  padding-left: 3rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 9999;
  position: absolute;
  bottom: 0;
}

.custom-bg {
  background-color: rgba(255, 255, 255, 0.247);
  ;
}

.banner {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.nav-link {
  color: #045B48 !important;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  font-size: larger;
  font-weight: 500;
  transition: border-bottom 0.2s linear color 0.2s linear;
  border-bottom: 1px solid transparent;
}

.dropdown-menu {
  /* margin-top: 1rem; */
  background-color: #dbebe1;
  width: 12rem;
}

.nav-link:hover {
  border-bottom: 1px solid #ffffff;
  color: white;
}


.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

.chat-btn {
  position: fixed;
  bottom: 2rem;
  right: 6rem;
}

.chat-box {
  position: absolute;
  right: 4rem;
  bottom: 1rem;
  width: 20rem;
  height: 26rem;
  background-color: antiquewhite;
  border-radius: 1rem;
  border: #afafaf solid 2px;
  z-index: 99999 !important;
}

.chat-section {
  overflow: hidden;
  width: 100%;
  background-color: wheat;
}

.chat-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  padding-left: 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;

}

.search-box {
  background: none;
  margin-left: 1rem;
}

.search-container {
  margin-left: 2rem;
}

.hotline {
  position: absolute;
  right: 5rem;
}

@media screen and (max-width: 1214px) {
  .company-name {
    font-size: 3em;
  }
}

@media screen and (max-width: 860px) {
  .company-name {
    font-size: 2em;
  }
}

@media screen and (max-width: 992px) {
  .header-container {
    display: none;
  }

  .banner {
    display: none;
  }
}

.chat-user {
  box-sizing: border-box;
  padding-top: 0.3rem;
  font-size: 2rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  background-color: rgb(192, 192, 192);
  border-radius: 10rem;
  border: solid 1px white;

}

.chat-header {
  background-color: #1bb392;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.6rem;
  padding-left: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.home-breadcrumb {
  text-decoration: none !important;
}

.admin-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
