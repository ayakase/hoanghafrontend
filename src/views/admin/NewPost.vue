<template>
  <LoadingOverlay v-if="showOverlay"></LoadingOverlay>
  <div class="add-container">
    <h2 style="text-align: center; padding-top: 2rem">Tạo bài viết mới</h2>
    <div class="mb-3">
      <label for="" class="form-label">Tiêu đề</label>
      <input
        type="text"
        class="form-control"
        id=""
        placeholder=""
        v-model="tourTitle"
      />
    </div>
    <div class="mb-3 thumbnail">
      <label for="formFile" class="form-label">Hình thu nhỏ</label>
      <input
        class="form-control"
        accept="image/*"
        type="file"
        id="formFile"
        @change="processImg"
      />
      <div style="width: 20rem; margin-top: 1rem">
        <img :src="thumbnailSrc" alt="" style="width: 100%" />
      </div>
    </div>
    <div
      style="
        width: 12rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      "
    >
      <v-switch
        v-model="publishState"
        label="Xuất bản luôn"
        color="info"
        style="margin-right: 1rem"
        hide-details
      ></v-switch>
      <i
        v-if="publishState"
        style="color: rgb(0, 102, 255)"
        class="fa-regular fa-paper-plane"
      ></i>
    </div>
    <div>
      <Editor
        style="height: 50rem"
        v-model="postContent"
        api-key="8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6"
        :init="{
          plugins:
            '  lists advlist link image table code help wordcount autosave emoticons',
          toolbar:
            ' forecolor backcolor | undo redo | styleselect | bold italic | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'outdent indent | numlist bullist | emoticons',
        }"
      />
    </div>
    <div class="mt-10 mb-2"></div>
    <div
      @click="addTour"
      class="btn btn-success"
      style="margin-top: 1rem; right: 0; float: right"
    >
      Add Tour
    </div>
  </div>
</template>

<script setup>
import LoadingOverlay from "../../components/LoadingOverlay.vue";
import baseUrl from "../../connect";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import Editor from "@tinymce/tinymce-vue";
import { ref, computed } from "vue";
let publishState = ref(false);
const thumbnailSrc = ref();
function processImg(event) {
  console.log(event);
  if (event.target.files.length) {
    thumbnailSrc.value = URL.createObjectURL(event.target.files[0]);
  }
  tourThumbnail.value = event.target.files[0];
}
function addTour() {
  showOverlay.value = true;
  // console.log(tourThumbnail.value)
  const tourData = new FormData();
  tourData.append("tourTitle", tourTitle.value);
  tourData.append("tourThumbnail", tourThumbnail.value);
  tourData.append("tourSchedule", tourSchedule.value);
  tourData.append("tourCategory", tourCategory.value);
  tourData.append("tourType", tourType.value);
  tourData.append("tourFrom", tourFrom.value);
  tourData.append("tourLength", tourLength.value);
  tourData.append("isHot", isHot.value);
  tourData.append("recommend", recommendText.value);
  tourData.append("tourTransport", tourTransport.value.toString());
  tourData.append("adultPrice", adultPrice.value);
  tourData.append("youngPrice", youngPrice.value);
  tourData.append("childPrice", childPrice.value);
  tourData.append("tourSpecial", tourSpecial.value);
  tourData.append("tourBonus", tourBonus.value);
  tourData.append("tourVisa", tourVisa.value);
  tourData.append("tourDetail", tourDetail.value);
  tourData.append("tourPriceService", tourPriceService.value);
  tourData.append("tourGuide", tourGuide.value);

  baseUrl
    .post("/admin/tour", tourData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data);
      showOverlay.value = false;
      toast.success("Đã nhận thông tin", {
        autoClose: 2000,
        theme: "colored",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    })
    .catch((error) => {
      console.error(error);
      showOverlay.value = false;
      toast.error(
        "Lỗi " +
          error +
          " , đảm bảo là bạn đã điền đủ thông tin, hãy đợi 1p rồi submit lại hoặc là reload lại trang",
        {
          autoClose: 2000,
          theme: "colored",
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    });
}
</script>

<style scoped>
.add-container {
  width: 75vw;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
  padding-bottom: 4rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color: #dbf4e8;
}

.category-type-from {
  display: flex;
  justify-content: space-between;
}

.age-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

* {
  color: rgb(75, 75, 75);
}
</style>
