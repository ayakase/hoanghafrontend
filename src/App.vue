<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, onMounted } from 'vue';
import PageFooter from './components/PageFooter.vue'
import scrollToTop from './components/ScrollToTop.vue'
import MessengerBtn from './components/MessengerBtn.vue'
import baseUrl from './connect';
import { useLoginStore } from './stores/loginstate';
import { useRouter } from 'vue-router';
const router = useRouter();
const showNav = ref(false)
const showDomestic = ref(false)
const showForeign = ref(false)
import { useCookies } from "vue3-cookies";
const loginStore = useLoginStore()
let { cookies } = useCookies()
function toggleNav() {
  showNav.value = !showNav.value
}
function toggleDomestic(event) {
  showNav.value = true
  showDomestic.value = !showDomestic.value
}
function toggleForeign(event) {
  showNav.value = true
  showForeign.value = !showForeign.value
}

let searchText = ref("")
function searchSend() {
  toast.success("Đang tìm kiếm " + searchText.value, {
    autoClose: 5000,
    theme: "dark",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
}
const domesticMenu = ref()
const foreignMenu = ref()
onMounted(() => {
  loginStore.checkLogin()
  console.log(loginStore.login)
  baseUrl.post("/client/initial/count")
  baseUrl
    .get("/client/initial/menu").then((response) => {
      domesticMenu.value = response.data[0]
      console.log(domesticMenu.value.Regions)
      foreignMenu.value = response.data[1]
      // tourCategory.value = response.data
    })
  baseUrl.get("client/initial/connect")
    .then((response) => {
      toast.success("Đã kết nối với server", {
        autoClose: 2000,
        theme: "colored",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    })
    .catch((error) => {
      console.error(error)
      toast.error("Lỗi kết nối với server", {
        autoClose: 6000,
        theme: "colored",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
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
function logout() {
  console.log("logout")
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
</script>

<template>
  <div class="mobile-nav-container">
    <div style="position: relative;" class="mobile-nav">
      <div class="logo-container" @click="router.push('/')"><img src="./assets/logo.png" alt="" class="mobile-logo"></div>
      <button class="btn mobile-btn" @click="toggleNav"><i class="fa-solid fa-bars"></i></button>
    </div>
    <Transition name="slide-fade">
      <div class="nav-category" v-if="showNav">
        <RouterLink class="mobile-nav-item" to="/" aria-current="page" href="#">Trang chủ</RouterLink>
        <hr>
        <RouterLink class="mobile-nav-item" to="/about/chinh-sach-va-quy-dinh" aria-current="page" href="#">
          Về
          chúng tôi
        </RouterLink>
        <hr>
        <RouterLink class="mobile-nav-item" to="/tour-hot" aria-current="page" href="#">Tour Hot &nbsp;<i
            style="color: orangered;" class="fa-solid fa-fire fa-bounce"></i>
        </RouterLink>
        <hr>
        <div style="display: flex;justify-content: space-between;">
          <RouterLink style="width: 18rem;" class="mobile-nav-item" to="/danh-muc/du-lich-trong-nuoc" aria-current="page"
            href="#">
            Du lịch
            trong
            nước
            &nbsp; <i class="fa-solid fa-flag"></i>
          </RouterLink>
          <div class="arrow-toggle" @click="toggleDomestic"><i v-if="!showDomestic"
              class="fa-solid fa-chevron-down"></i><i v-if="showDomestic" class="fa-solid fa-chevron-up"></i></div>
        </div>
        <hr>
        <div v-if="domesticMenu && showDomestic" v-for="region in domesticMenu.Regions">
          <div class="mobile-nav-item" style="font-weight: bold;"
            @click="router.push({ path: '/khu-vuc/' + region.slug })">
            {{ region.name }}
          </div>
          <div v-for="location in region.Locations" class="mobile-nav-item">
            <div @click="router.push({ path: '/dia-diem/' + location.slug })">
              &nbsp;&nbsp;&nbsp;{{ location.name }}</div>
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;">
          <RouterLink style="width: 18rem;" class="mobile-nav-item" to="/danh-muc/du-lich-trong-nuoc" aria-current="page"
            href="#">
            Du lịch
            quốc tế
            &nbsp; <i class="fa-solid fa-flag"></i>
          </RouterLink>
          <div class="arrow-toggle" @click="toggleForeign"><i v-if="!showForeign" class="fa-solid fa-chevron-down"></i>
            <i v-if="showForeign" class="fa-solid fa-chevron-up"></i>
          </div>
        </div>
        <hr>
        <div v-if="domesticMenu && showForeign" v-for="region in foreignMenu.Regions">
          <div class="mobile-nav-item" style="font-weight: bold;"
            @click="router.push({ path: '/khu-vuc/' + region.slug })">
            {{ region.name }}
          </div>
          <div v-for="location in region.Locations" class="mobile-nav-item">
            <div @click="router.push({ path: '/dia-diem/' + location.slug })">
              &nbsp;&nbsp;&nbsp;{{ location.name }}</div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
  <div class="black-layout" v-if="showNav" @click="toggleNav">

  </div>
  <div class="header-container">
    <button v-if="loginStore.login" @click="logout" class=" btn btn-danger active admin-button" aria-current="page"
      href="#">Logout
    </button>
    <RouterLink v-if="loginStore.login" class=" btn btn-success active logout-button" to="/admin/thong-ke"
      aria-current="page" href="#">Admin
    </RouterLink>
    <RouterLink class="stamp" to="/"><img src="./assets/stamp.png" alt="" class="">
    </RouterLink>
    <img src="./assets/images/header1.jpg" alt="" class="banner">
    <nav class="navbar navbar-expand-lg custom-bg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto ">
            <li style="z-index: 9999999;">
              <ul class="nav-menu" style="border: 0;padding: 0;">
                <li class="dropdown">
                  <a href="#" style="font-size: large; font-weight: bold; color: #045B48 !important;">DANH MUC <i
                      class="fa-solid fa-chevron-down"></i> </a>
                  <ul class="drop-one" style="margin: 0;padding: 0;">
                    <li>
                      <RouterLink class="nav-link active" to="/" aria-current="page" href="#">Trang chủ</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="nav-link active" to="/about/chinh-sach-va-quy-dinh" aria-current="page" href="#">
                        Về
                        chúng tôi
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink class="nav-link active" to="/tour-hot" aria-current="page" href="#">Tour Hot &nbsp;<i
                          style="color: orangered;" class="fa-solid fa-fire fa-bounce"></i>
                      </RouterLink>
                    </li>
                    <RouterLink class="nav-link active" to="/dia-diem/du-lich-trung-quoc" aria-current="page" href="#">Du
                      lịch
                      Trung
                      Quốc
                      &nbsp; <i class="fa-solid fa-vihara"></i>
                    </RouterLink>
                    <li>
                      <RouterLink class="nav-link active" to="/danh-muc/du-lich-trong-nuoc" aria-current="page" href="#">
                        Du lịch
                        trong
                        nước
                        &nbsp; <i class="fa-solid fa-flag"></i>
                      </RouterLink>
                      <ul class="drop-two" style="margin: 0;padding: 0;">
                        <li v-if="domesticMenu" v-for="region in domesticMenu.Regions">
                          <p style="font-size: larger;color: #045B48;" class="region-menu"
                            @click="router.push({ path: '/khu-vuc/' + region.slug })">
                            {{ region.name }}
                          </p>
                          <ul class="drop-three">
                            <li v-for="location in region.Locations" class="location-menu">
                              <p style=" color: #045B48;" @click="router.push({ path: '/dia-diem/' + location.slug })">
                                {{
                                  location.name }}</p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <RouterLink class="nav-link active" to="/danh-muc/du-lich-quoc-te" aria-current="page" href="#">
                        Du lịch quốc tế
                        &nbsp; <i class="fa-solid fa-globe"></i>
                      </RouterLink>
                      <ul class="drop-two" style="margin: 0;padding: 0;">
                        <li v-if="domesticMenu" v-for="region in foreignMenu.Regions">
                          <p style="font-size: larger;color: #045B48;" class="region-menu"
                            @click="router.push({ path: '/khu-vuc/' + region.slug })">
                            {{ region.name }}
                          </p>
                          <ul class="drop-three">
                            <li v-for="location in region.Locations" class="location-menu">
                              <p style=" color: #045B48;" @click="router.push({ path: '/dia-diem/' + location.slug })">
                                {{
                                  location.name }}</p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <RouterLink class="nav-link active" to="/dich-vu" aria-current="page" href="#">Dịch vụ du lịch
                        &nbsp; <i class="fa-solid fa-vihara"></i>
                      </RouterLink>
                      <ul class="drop-two-special">
                        <li @click="router.push('/thue-xe')" class="service-item"><a href="#">Thue xe</a></li>
                        <li @click="router.push('/dat-ve-may-bay')" class="service-item"><a href="#">Booking ve may
                            bay</a>
                        </li>
                        <li @click="router.push('/dat-phong-khach-san')" class="service-item"><a href="#">Dat phong khach
                            san</a></li>
                        <li @click="router.push('/dich-vu-ho-chieu')" class="service-item"><a href="#">Dich vu lam ho
                            chieu</a></li>
                        <li @click="router.push('/dat-ve-cap-treo')" class="service-item"><a href="#">Dat ve cap treo
                            fansipan</a>
                        </li>
                      </ul>
                    </li>
                    <RouterLink class="nav-link active" to="/cam-nang" aria-current="page" href="#">Cẩm nang
                    </RouterLink>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <form class="d-flex search-container" style="margin-top:.3rem;padding: 0;">
                <input @keydown.enter.prevent="router.push({ path: '/tim-kiem/' + searchText })" v-model="searchText"
                  class="form-control me-2 search-box" type="search" placeholder="Tìm kiếm" aria-label="Search">
              </form>
            </li>
            <li>
              <button style="margin-top:.3rem;" class=" btn btn-outline-success"
                @click="router.push({ path: '/tim-kiem/' + searchText })"><i class="fas fa-search"></i></button>
            </li>
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

  <!-- <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2522553192643!2d103.96182667493468!3d22.494716879547287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cd139cd20452db%3A0x1e087d472f4b71ce!2zMTE2IFPGoW4gxJDhuqFvLCBD4buRYyBM4bq_dSwgTMOgbyBDYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1695747411920!5m2!1svi!2s"
    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe> -->
  <!-- <div class="spacer" style="height: 8rem;"></div> -->
  <PageFooter></PageFooter>
  <MessengerBtn></MessengerBtn>
  <!-- <scrollToTop></scrollToTop> -->
</template>

<style scoped>
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
  /* display: none; */
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
  position: absolute;
  bottom: 0;
}

.custom-bg {
  background-color: #cefecaa8;
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
  font-size: medium;
  font-weight: 500;
  transition: border-bottom 0.2s linear color 0.2s linear;
  border-bottom: 1px solid transparent;
}

.dropdown-menu {
  /* margin-top: 1rem; */
  background-color: #dbebe1;
  width: 15rem;
}

.nav-link:hover {
  border-right: 5px solid #ff6600;
  color: white;
}

.search-box {
  background: none;
  margin-left: 1rem;
  border: #0aa886 1px solid;
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


.home-breadcrumb {
  text-decoration: none !important;
}

.admin-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.logout-button {
  position: absolute;
  right: 6.5rem;
  top: 1rem;
}

* {
  box-sizing: border-box;
}

ul.nav-menu {
  text-decoration: none !important;
  z-index: 99999999999999;
  margin: 0;
  padding: 0;
  float: left;
  margin-right: 100px;
}

.region-item:hover {
  background-color: #0aa886;
}

.region-menu:hover {
  background-color: #0aa886;
  cursor: pointer;
}

.location-menu:hover {
  background-color: #0aa886;
  cursor: pointer;

}

ul.nav-menu li {
  /* display: block; */
  margin: 0;
  padding: 0;
  text-decoration: none !important;
  list-style: none;
  line-height: 50px;
}

ul.nav-menu li:hover {
  /* background-color: #cefeca; */
  position: relative;
}

ul.nav-menu li a {
  text-decoration: none !important;

  /* text-decoration: none; */
  color: #000000;
  /* text-transform: uppercase; */
  padding: 10px 25px;
}

ul.nav-menu li p {
  text-decoration: none !important;

  /* text-decoration: none; */
  color: #000000;
  /* text-transform: uppercase; */
  padding-right: 2rem;
  padding-left: 2rem;
}

.drop-one {
  font-weight: 500;
  margin: 0;
  padding: 0;
  width: 250px;
  position: absolute;
  top: 50px;
  left: 0;
  display: none;
  background: #dbebe1;
}

ul.nav-menu li:hover>.drop-one {
  display: block;
}

.drop-two {
  margin: 0;
  padding: 0;
  width: max-content;
  position: absolute;
  top: 0;
  left: 100%;
  background: #dbebe1;
  display: none;
}

.drop-one li:hover>.drop-two {
  display: flex;
}

.drop-two-special {

  margin: 0;
  padding: 0;
  width: max-content;
  position: absolute;
  top: -50px;
  left: 100%;
  background: #dbebe1;
  display: none;
  font-size: large;
  color: #045B48;
}

.service-item {
  color: #045B48 !important;
}

.service-item:hover {
  background-color: #0aa886;
}

.drop-one li:hover>.drop-two-special {
  display: flex;
  flex-direction: column;
}

.drop-three {
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  top: 0;
  background: #dbebe1;
  display: block;
}

.mobile-nav-container {

  display: none;
  top: 0;
  width: 100%;
}

.mobile-nav {
  background-color: #045B48;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4rem;
}

.mobile-btn {
  width: 4rem;
  font-size: 2rem;
}

.logo-container {
  height: 100%;
  padding: 0.5rem;
}

.mobile-logo {}

.nav-category {
  position: absolute;
  right: 0;
  z-index: 9;
  background-color: #d3ecd7;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  height: 85vh;
  overflow: scroll;
}

@media screen and (max-width: 992px) {
  .mobile-nav-container {
    display: block;
  }
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.mobile-nav-item {
  height: 100%;
  text-decoration: none;
  height: 3rem;
  min-height: 3rem;
  font-size: larger;
  color: black;
  padding: 0.5rem;
}

.black-layout {
  position: fixed;
  width: 100vw;
  height: 100%;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.24);
}

hr {
  margin: 0;
  padding: 0;
}

.arrow-toggle {
  width: 4rem;
  text-align: center;
  font-size: 2rem;
}
</style>
