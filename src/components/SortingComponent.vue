<template>
    <div class="sorting-container">
        <h4>Sắp xếp:</h4>
        <div class="sorting-item">Mới nhất</div>
        <div class="sorting-item">Cũ nhất</div>
        <div class="sorting-item">Đã xử lí</div>
        <div class="sorting-item">Chưa xử lí</div>
        <div class="sorting-item">Từ ngày tới ngày</div>
        <!-- <div class=""></div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sorting-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 4rem;
    margin-bottom: 2rem;
}
.sorting-item {
    padding: 1rem;
}
</style>