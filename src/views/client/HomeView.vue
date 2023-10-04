<template>
  <div class="home-container">
    <div class="home-first-section" style="margin-bottom: 5rem;">
      <div class="travel-category">
        <div class="travel-category-item" @click="router.push('/du-lich-trong-nuoc')">
          <h5>Du lịch trong nước</h5> <i class="fa-solid fa-chevron-right"></i>

        </div>
        <div class="travel-category-item" @click="router.push('/du-lich-trung-quoc')">
          <h5>Du lịch Trung Quốc </h5><i class=" fa-solid fa-chevron-right"></i>
        </div>
        <div class="travel-category-item" @click="router.push('/du-lich-quoc-te')">
          <h5>Du lịch quốc tế </h5><i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="travel-category-item">
          <h5>Cẩm nang </h5><i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="travel-category-item">
          <h5>Khuyến mãi</h5> <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <!-- data-bs-ride="carousel" -->
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              class="d-block slide-img" alt="...">
            <!-- <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div> -->
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/example.jpg" class="d-block slide-img" alt="...">
            <!-- <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> -->
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/Slide.png" class="d-block slide-img" alt="...">
            <!-- <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> -->
          </div>
        </div>
        <button class="carousel-control-prev carousel-btn-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next carousel-btn-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="extended-category">
        <div class="extent-item">
          <h5>Hà Khẩu</h5>
        </div>
        <div class="extent-item">
          <h5>DV Visa</h5>
        </div>
        <div class="extent-item">
          <h5>KS / Dịch vụ</h5>
        </div>
      </div>
    </div>
    <h2 style="text-align: center;margin-bottom: 2rem;">Cẩm nang</h2>
    <div class="post-container" v-if="posts">
      <div @click="router.push({ path: '/postdetail', query: { id: posts[0].id } })" class="post-1"
        v-if=posts[0].thumbnail><img style="height: 100%;width: 100%;object-fit: cover;" :src=posts[0].thumbnail alt="">
        <h1>{{ posts[0].title }}</h1>
      </div>
      <div @click="router.push({ path: '/postdetail', query: { id: posts[1].id } })" class="post-2"
        v-if=posts[1].thumbnail><img style="height: 100%;width: 100%;object-fit: cover;" :src=posts[1].thumbnail alt="">
        <h4>{{ posts[1].title }}</h4>
      </div>
      <div @click="router.push({ path: '/postdetail', query: { id: posts[2].id } })" class="post-3"
        v-if=posts[2].thumbnail><img style="height: 100%;width: 100%;object-fit: cover;" :src=posts[2].thumbnail alt="">
        <h4>{{ posts[2].title }}</h4>
      </div>
      <div @click="router.push({ path: '/postdetail', query: { id: posts[3].id } })" class="post-4"
        v-if=posts[3].thumbnail><img style="height: 100%;width: 100%;object-fit: cover;" :src=posts[3].thumbnail alt="">
        <h4>{{ posts[3].title }}</h4>
      </div>
      <div @click="router.push({ path: '/postdetail', query: { id: posts[4].id } })" class="post-5"
        v-if=posts[4].thumbnail><img style="height: 100%;width: 100%;object-fit: cover;" :src=posts[4].thumbnail alt="">
        <h4>{{ posts[4].title }}</h4>
      </div>
      <div @click="router.push({ path: '/postdetail', query: { id: posts[5].id } })" class="post-6"
        v-if=posts[5].thumbnail><img style="height: 100%;width: 100%;object-fit: cover;" :src=posts[5].thumbnail alt="">
        <h4>{{ posts[5].title }}</h4>
      </div>
    </div>
    <div v-if="hotTour" style="width: 100%;margin: auto;padding: auto;padding-bottom: 2rem;padding-top: 4rem;">
      <h2 style="text-align: center;margin-bottom: 1.5rem;color: #045B48">Hot Tour &nbsp; <i
          class="fa-solid fa-fire fa-bounce" style="color: #ff6600;"></i>
      </h2>
      <div style="width: 95%;margin: auto;">
        <Splide :options=options aria-label="Vue Splide Example">
          <SplideSlide v-for="tour in hotTour" @click="router.push({ path: '/tourdetail', query: { id: tour.id } })"
            style="cursor: pointer;">
            <v-img style=" border-radius: 1rem;" :src=tour.thumbnail></v-img>
            <h4 style="width: 90%;padding-top: 0.8rem;">{{ tour.title }}</h4>
            <h5><span style="color: orange;">{{ numeralFormat(tour.adultprice) }}</span></h5>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div v-if="china"
      style="width: 100%;margin-top: 5rem;margin: auto;padding: auto;padding-bottom: 2rem;padding-top: 1rem;">
      <h2 style="text-align: center;margin-bottom: 1.5rem;color: #045B48">Du lịch Trung Quốc &nbsp; <i
          class="fa-solid fa-vihara"></i>
      </h2>
      <div style="width: 95%;margin: auto;">
        <Splide :options=options aria-label="Vue Splide Example">
          <SplideSlide v-for="tour in china" @click="router.push({ path: '/tourdetail', query: { id: tour.id } })"
            style="cursor: pointer;">
            <v-img style=" border-radius: 1rem;" :src=tour.thumbnail></v-img>
            <h4 style="width: 90%;padding-top: 0.8rem;">{{ tour.title }}</h4>
            <h5><span style="color: orange;">{{ numeralFormat(tour.adultprice) }}</span></h5>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div v-if="domestic"
      style="width: 100%;margin-top: 5rem;margin: auto;padding: auto;padding-bottom: 2rem;padding-top: 1rem;">
      <h2 style="text-align: center;margin-bottom: 1.5rem;color: #045B48">Du lịch trong nước &nbsp; <i
          class="fa-solid fa-flag"></i>
      </h2>
      <div style="width: 95%;margin: auto;">
        <Splide :options=options aria-label="Vue Splide Example">
          <SplideSlide v-for="tour in domestic" @click="router.push({ path: '/tourdetail', query: { id: tour.id } })"
            style="cursor: pointer;">
            <v-img style=" border-radius: 1rem;" :src=tour.thumbnail></v-img>
            <h4 style="width: 90%;padding-top: 0.8rem;">{{ tour.title }}</h4>
            <h5><span style="color: orange;">{{ numeralFormat(tour.adultprice) }}</span></h5>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div v-if="foreign"
      style="width: 100%;margin-top: 5rem;margin: auto;padding: auto;padding-bottom: 2rem;padding-top: 1rem;">
      <h2 style="text-align: center;margin-bottom: 1.5rem;color: #045B48">Du lịch quốc tế &nbsp; <i
          class="fa-solid fa-globe"></i>
      </h2>
      <div style="width: 95%;margin: auto;">
        <Splide :options=options aria-label="Vue Splide Example">
          <SplideSlide v-for="tour in foreign" @click="router.push({ path: '/tourdetail', query: { id: tour.id } })"
            style="cursor: pointer;">
            <v-img style=" border-radius: 1rem;" :src=tour.thumbnail></v-img>
            <h4 style="width: 90%;padding-top: 0.8rem;">{{ tour.title }}</h4>
            <h5><span style="color: orange;">{{ numeralFormat(tour.adultprice) }}</span></h5>
          </SplideSlide>
        </Splide>
      </div>
    </div>

  </div>
</template>

<script>
import HeartLoading from '../../components/HeartLoading.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import '@splidejs/vue-splide/css';
import baseUrl from '../../connect';

export default {
  components: {
    HeartLoading,
    Splide,
    SplideSlide,
  },
  setup() {
    let hotTour = ref()
    let china = ref()
    let domestic = ref()
    let foreign = ref()
    let posts = ref()
    const options = {
      rewind: true,
      gap: '2rem',
      perPage: 5,
      perMove: 1,
      autoplay: true,

      // focus: 'center',

    };
    const router = useRouter();
    onMounted(() => {
      baseUrl.get('/client/carousel/hottour').then((response) => {
        hotTour.value = response.data.rows
      })
      baseUrl.get('/client/carousel/post-grid').then((response) => {
        console.log(response.data)
        posts.value = response.data.rows
      })
      baseUrl.get('/client/carousel/china').then((response) => {
        china.value = response.data.rows
      })
      baseUrl.get('/client/carousel/domestic').then((response) => {
        domestic.value = response.data.rows
      })
      baseUrl.get('/client/carousel/foreign').then((response) => {
        foreign.value = response.data.rows
      })
    })
    return {
      router,
      options,
      hotTour,
      china,
      domestic,
      foreign,
      posts
    }
  }
}
</script>

<style >
.splide:not(.is-overflow) .splide__list {
  justify-content: center;
}

.home-container {
  padding-top: 2rem;
  margin: auto;
  padding: auto;
  width: 85%;
}

.slide-container {
  padding-bottom: 3rem;
  padding-top: 0.1rem;
  margin-top: 2rem;
}

.hot-sale-item {
  transition: transform 0.2s ease-in-out;
}

.slide-header {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: auto;
  width: 12rem;

}

.slide {
  width: 60%;
}

.carousel-inner {
  border-radius: 1rem;

  height: 100%;
}

.carousel-item {
  height: 25rem !important;
}

.slide-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.home-first-section {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: space-around;
}

.travel-category {
  position: relative;
  display: flex;
  width: 15rem;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-around;
  background-color: #d3ecd7;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.travel-category-item {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: auto;
}

.travel-category-item p {
  font-size: larger;
  margin: 0;
}

.travel-category-item:first-child {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.travel-category-item:last-child {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.travel-category-item:hover {
  background-color: #bcecc4;
}

.travel-category i {
  position: absolute;
  right: 15px;
}

.extended-category {
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  max-height: 30rem;

}

.extent-item {
  width: 100%;
  border-radius: 1rem;
  height: 7rem;
  background-color: #d3ecd7;
  text-align: center;
  padding-top: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.extent-item p {
  font-size: larger;
  margin: auto;
  padding: auto;
  margin: 0;
}

.carousel-btn-prev:hover {
  border-radius: 1rem;
  background: linear-gradient(90deg, rgb(20, 20, 20) 0%, rgba(0, 212, 255, 0) 100%);
}

.carousel-btn-next:hover {
  border-radius: 1rem;
  background: linear-gradient(90deg, rgba(0, 212, 255, 0) 0%, rgb(20, 20, 20) 100%);
}

.carousel-mobile {
  display: none;
}

@media screen and (max-width: 992px) {
  .carousel-desktop {
    display: none;
  }

  .carousel-mobile {
    display: block;
  }
}

.post-container {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-gap: 1px;
  grid-auto-flow: row;
}

.post-container>div {
  position: relative;
  box-sizing: content-box;
  overflow: hidden;
}

.post-container>div>img {
  transition: all .2s ease-in-out;
  filter: brightness(90%);
  border-radius: 5px;


}

.post-container>div>img:hover {
  transform: scale(1.1);
  filter: brightness(50%);
  cursor: pointer;
}

.post-container>div>h1 {
  padding: 1rem;
  position: absolute;
  bottom: 0;
  color: white;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: rgb(96, 96, 96);
}

.post-container>div>h4 {
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  color: white;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: rgb(96, 96, 96);
}

.post-1 {
  grid-area: 1 / 1 / 3 / 3;
  overflow: hidden;
  height: 30rem;
}

.post-2 {
  grid-area: 1 / 3 / 2 / 4;
  height: 15rem;
}

.post-3 {
  grid-area: 2 / 3 / 3 / 4;
  height: 15rem;

}

.post-4 {
  grid-area: 3 / 1 / 4 / 2;
  height: 15rem;

}

.post-5 {
  grid-area: 3 / 2 / 4 / 3;
  height: 15rem;

}

.post-6 {
  grid-area: 3 / 3 / 4 / 4;
  height: 15rem;

}
</style>