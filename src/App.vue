<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, onMounted } from 'vue';
import PageFooter from './components/PageFooter.vue'
import scrollToTop from './components/ScrollToTop.vue'
import MessengerBtn from './components/MessengerBtn.vue'
import baseUrl from './connect';
import { useRouter } from 'vue-router';
const router = useRouter();

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
  baseUrl.post("/client/count")
  baseUrl.get("/connect")
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

</script>

<template>
  <div class="header-container">
    <RouterLink class=" btn btn-success active admin-button" to="/admin" aria-current="page" href="#">Admin
    </RouterLink>
    <!-- <div class="banner-text"> -->
    <!-- <p class="company-name">HOÀNG HÀ</p>
      <p class="subtext-1">travel and tourism</p> -->
    <!-- </div> -->
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

            <!-- <li class="nav-item dropdown">
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
                  <RouterLink class="nav-link active" to="/tour-hot" aria-current="page" href="#">Tour Hot &nbsp;<i
                      style="color: orangered;" class="fa-solid fa-fire fa-bounce"></i>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/du-lich-trong-nuoc" aria-current="page" href="#">Du lịch trong
                    nước
                    &nbsp; <i class="fa-solid fa-flag"></i>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/du-lich-trung-quoc" aria-current="page" href="#">Du lịch Trung
                    Quốc
                    &nbsp; <i class="fa-solid fa-vihara"></i>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/du-lich-quoc-te" aria-current="page" href="#">Du lịch quốc tế
                    &nbsp; <i class="fa-solid fa-globe"></i>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/du-lich-quoc-te" aria-current="page" href="#">Dịch vụ du lịch
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link active" to="/du-lich-quoc-te" aria-current="page" href="#">Cẩm nang
                  </RouterLink>
                </li>
              </ul>
            </li> -->
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
                    <RouterLink class="nav-link active" to="/du-lich-trung-quoc" aria-current="page" href="#">Du lịch
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
                        <li>
                          <a href="#" style="font-size: larger;">Du lich mien bac</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">Cat Ba</a></li>
                            <li class="region-item"><a href="#">Ha Long</a></li>
                            <li class="region-item"><a href="#">Sa Pa</a></li>
                            <li class="region-item"><a href="#">Hanoi</a></li>
                            <li class="region-item"><a href="#">Ninh Binh</a></li>
                            <li class="region-item"><a href="#">Moc Chau</a></li>
                            <li class="region-item"><a href="#">Co To</a></li>
                            <li class="region-item"><a href="#">Tam Dao</a></li>
                            <li class="region-item"><a href="#">Le Hoi</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" style="font-size: larger;">Du lich mien nam</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">Da Nang</a></li>
                            <li class="region-item"><a href="#">Hoi An</a></li>
                            <li class="region-item"><a href="#">Hue</a></li>
                            <li class="region-item"><a href="#">Quy Nhon</a></li>
                            <li class="region-item"><a href="#">Ly Son</a></li>
                            <li class="region-item"><a href="#">Nghe An</a></li>
                            <li class="region-item"><a href="#">Quang Binh</a></li>
                            <li class="region-item"><a href="#">Phan Thiet</a></li>
                            <li class="region-item"><a href="#">Sam Son</a></li>
                            <li class="region-item"><a href="#">Tay Nguyen</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" style="font-size: larger;">Du lich mien trung</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">Da Lat</a></li>
                            <li class="region-item"><a href="#">Con Dao</a></li>
                            <li class="region-item"><a href="#">Phu Quoc</a></li>
                            <li class="region-item"><a href="#">Can Tho</a></li>
                            <li class="region-item"><a href="#">Nha Trang</a></li>
                            <li class="region-item"><a href="#">Sai Gon</a></li>
                            <li class="region-item"><a href="#">Cam Ranh</a></li>
                            <li class="region-item"><a href="#">Binh Phuoc</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <RouterLink class="nav-link active" to="/danh-muc/du-lich-quoc-te" aria-current="page" href="#">Du
                        lịch quốc
                        tế
                        &nbsp; <i class="fa-solid fa-globe"></i>
                      </RouterLink>
                      <ul class="drop-two">
                        <li>
                          <a href="#" style="font-size: larger;">Du lich Chau A</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">Campuchia</a></li>
                            <li class="region-item"><a href="#">Malaysia</a></li>
                            <li class="region-item"><a href="#">Thai Lan</a></li>
                            <li class="region-item"><a href="#">Dubai</a></li>
                            <li class="region-item"><a href="#">Nhat Ban</a></li>
                            <li class="region-item"><a href="#">Singapore</a></li>
                            <li class="region-item"><a href="#">Trung Quốc</a></li>
                            <li class="region-item"><a href="#">Vân Nam - Trung Quốc</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" style="font-size: larger;">Du lich Chau Au</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">Tay Au</a></li>
                            <li class="region-item"><a href="#">Phap</a></li>
                            <li class="region-item"><a href="#">Bi</a></li>
                            <li class="region-item"><a href="#">Nga</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" style="font-size: larger;">Du lich Chau My</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">My</a></li>
                            <li class="region-item"><a href="#">Canada</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" style="font-size: larger;">Du lich Chau Uc</a>
                          <ul class="drop-three">
                            <li class="region-item"><a href="#">Uc</a></li>
                            <li class="region-item"><a href="#">New Zealand</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <RouterLink class="nav-link active" to="/du-lich-trung-quoc" aria-current="page" href="#">Dich vu du
                        lich
                        &nbsp; <i class="fa-solid fa-vihara"></i>
                      </RouterLink>
                      <ul class="drop-two-special">
                        <li class="region-item"><a href="#">Booking ve may bay</a></li>
                        <li class="region-item"><a href="#">Dich vu lam ho chieu</a></li>
                        <li class="region-item"><a href="#">Dat ve cap treo fansipan</a></li>
                      </ul>
                    </li>
                    <RouterLink class="nav-link active" to="/du-lich-quoc-te" aria-current="page" href="#">Cẩm nang
                    </RouterLink>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <form class="d-flex search-container" style="margin-top:.3rem;padding: 0;">
                <input @keydown.enter.prevent="searchSend" v-model="searchText" class="form-control me-2 search-box"
                  type="search" placeholder="Search" aria-label="Search">
              </form>
            </li>
            <p>{{ searchText }}</p>
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
    <!-- <RouterView /> -->
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

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
  top: 0;
  left: 100%;
  background: #dbebe1;
  display: none;
}

.drop-one li:hover>.drop-two-special {
  display: block;
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
</style>
