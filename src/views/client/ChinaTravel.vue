<template>
    <div class="china-container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><i class="fa-solid fa-house"></i> <a href="/" class="home-breadcrumb">Trang
                        chủ</a></li>
                <li class="breadcrumb-item">Du lịch Trung Quốc</li>
            </ol>
        </nav>
        <div v-if="posts">
            <p>{{ posts }}</p>
        </div>
        <LoadingComponent v-else />
    </div>
</template>

<script>
import LoadingComponent from '../../components/LoadingComponent.vue';
import baseUrl from '../../connect';
import { onMounted, ref } from 'vue';
export default {
    components: {
        LoadingComponent
    },
    setup() {
        let posts = ref('')
        onMounted(() => {
            baseUrl.get('posts').then((response) => {
                console.log(response.data)
                posts.value = response.data
            })
        })
        return { posts }
    }
}
</script>

<style>
.china-container {
    padding-top: 2rem;
    width: 85%;
    margin: auto;
    padding: auto;
}

.breadcrumb-item {
    font-size: large;
}

.home-breadcrumb {
    text-decoration: none !important;
    font-weight: bold;
    color: black;
}
</style>