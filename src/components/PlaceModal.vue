<template>
    <div>
        <div style="margin-top: 0rem;" class="modal fade" id="placeModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <input style="height: 3rem;" class="form-control" id="" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Điện thoại <span style="color: red;">*</span></label>
                                <input style="height: 3rem;" class="form-control" id="" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email <span style="color: red;">*</span></label>
                                <input type="email" style="height: 3rem;" class="form-control" id="" placeholder="">
                            </div>
                            <div class="adult"
                                style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                                <p style="margin: 0;padding: 0;">Người lớn (Trên 12 tuổi)</p>
                                <input type="number" style="height: 3rem;width: 8rem;" class="form-control" id=""
                                    placeholder="">
                            </div>
                            <div class="children-5-11"
                                style="display: flex; align-items: center; justify-content: space-between;margin-bottom: 1rem;">
                                <p style="margin: 0;padding: 0;">Trẻ em (Từ 5 - 11 tuổi)</p>
                                <input type="number" style="height: 3rem;width: 8rem;" class="form-control" id=""
                                    placeholder="">
                            </div>
                            <div class="children-below-5"
                                style="display: flex; align-items: center; justify-content: space-between;margin-bottom: 1rem;">
                                <p style="margin: 0;padding: 0;">Trẻ em (Dưới 5 tuổi)</p>
                                <input type="number" style="height: 3rem;width: 8rem;" class="form-control" id=""
                                    placeholder="">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ghi chú</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a class="btn" style="background-color: #97CBB4;" :href="download" target="_blank">Đặt Tour</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// let props = defineProps(
//     {
//         title: String,
//         description: String,
//         download: String,
//     }
// )
</script>

<style lang="scss" scoped></style>