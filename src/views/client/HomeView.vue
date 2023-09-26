<template>
  <div class="home-container">
    <div class="home-first-section">
      <div class="travel-category">
        <div class="travel-category-item" @click="router.push('/du-lich-trong-nuoc')">
          <p>Du lịch trong nước</p> <i class="fa-solid fa-chevron-right"></i>
          <!-- <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span> -->
        </div>
        <div class="travel-category-item" @click="router.push('/du-lich-trung-quoc')">
          <p>Du lịch Trung Quốc </p><i class=" fa-solid fa-chevron-right"></i>
        </div>
        <div class="travel-category-item" @click="router.push('/du-lich-quoc-te')">
          <p>Du lịch quốc tế </p><i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="travel-category-item">
          <p>Cẩm nang </p><i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="travel-category-item">
          <p>Khuyến mãi</p> <i class="fa-solid fa-chevron-right"></i>
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
            <img src="../../assets/images/Slide.png" class="d-block w-100 slide-img" alt="...">
            <!-- <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div> -->
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/Slide.png" class="d-block w-100 slide-img" alt="...">
            <!-- <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> -->
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/Slide.png" class="d-block w-100 slide-img" alt="...">
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
          <p>Hà Khẩu</p>
        </div>
        <div class="extent-item">
          <p>DV Visa</p>
        </div>
        <div class="extent-item">
          <p>KS / Dịch vụ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeartLoading from '../../components/HeartLoading.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

export default {
  components: {
    HeartLoading,
  },
  setup() {
    const router = useRouter();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const chinaSlide = ref()
    const domesticSlide = ref()
    const foreignSlide = ref()
    const hotTourSlide = ref()
    onMounted(() => { })
    return {
      router,
    }
  }
}
</script>

<style >
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
  height: 100% !important;
}

.slide-img {
  height: 100%;
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
</style>