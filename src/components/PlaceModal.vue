<template>
    <div style="z-index: 9999;">
        <div style="margin-top: 0rem;" class="modal fade" id="placeModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" style="background-color: F1FAF4;">
                <div class="modal-content" style="background-color: #F1FAF4;">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Đặt Tour</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="place-form-container">
                            <div class="mb-3">
                                <label class="form-label">Họ & Tên <span style="color: red;">*</span></label>
                                <input style="height: 3rem;" class="form-control" id="" placeholder="" v-model="name">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Điện thoại <span style="color: red;">*</span></label>
                                <input style="height: 3rem;" class="form-control" id="" placeholder="" v-model="phone">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email <span style="color: red;">*</span></label>
                                <input type="email" style="height: 3rem;" class="form-control" id="" placeholder=""
                                    v-model="email">
                            </div>
                            <div class="adult"
                                style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                                <p style="margin: 0;padding: 0;">Người lớn (Trên 12 tuổi)</p>
                                <input type="number" style="height: 3rem;width: 8rem;" class="form-control" id=""
                                    placeholder="" v-model="adult">
                            </div>
                            <div class="teenager"
                                style="display: flex; align-items: center; justify-content: space-between;margin-bottom: 1rem;">
                                <p style="margin: 0;padding: 0;">Trẻ em (Từ 5 - 11 tuổi)</p>
                                <input type="number" style="height: 3rem;width: 8rem;" class="form-control" id=""
                                    placeholder="" v-model="teenager">
                            </div>
                            <div class="children"
                                style="display: flex; align-items: center; justify-content: space-between;margin-bottom: 1rem;">
                                <p style="margin: 0;padding: 0;">Trẻ em (Dưới 5 tuổi)</p>
                                <input type="number" style="height: 3rem;width: 8rem;" class="form-control" id=""
                                    placeholder="" v-model="children">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ghi chú</label>
                                <textarea class="form-control" rows="3" v-model="note"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a class="btn" style="background-color: #97CBB4;" target="_blank" @click="sendOrder">Đặt Tour</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import baseUrl from '../connect';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref } from 'vue';
const props = defineProps(['tourId'])
console.log(props.tourId)
let name = ref("")
let phone = ref("")
let email = ref("")
let adult = ref(1)
let teenager = ref()
let children = ref()
let note = ref("")
function sendOrder() {
    if (!name.value || !phone.value || !email.value || !adult.value || !note.value) {
        toast.error("Bạn cần điền đầy đủ thông tin đặt tour", {
            autoClose: 1000,
            theme: "dark",
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    } else {
        const orderData = {
            tourId: props.tourId,
            name: name.value,
            phone: phone.value,
            email: email.value,
            adult: adult.value,
            teenager: teenager.value,
            children: children.value,
            note: note.value
        }
        baseUrl.post("/client/order", orderData)
            .then(response => {
                console.log(response.data)
                toast.success("Đã nhận thông tin", {
                    autoClose: 2000,
                    theme: "dark",
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            })
            .catch(error => {
                console.error(error)
            })
    }
}
</script>

<style lang="scss" scoped></style>