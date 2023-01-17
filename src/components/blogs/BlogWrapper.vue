<template>
    <div class="container mt-5">
        <div class="d-flex align-items-center justify-content-between">
            <h1>Blog Wrapper</h1>
            <p class="mb-0 text-end">Home Page</p>
        </div>
        <BlogItem
            v-for="(data, index) of posts"
            :key="'index-posts-' + index"
            :data="data"
        />
    </div>
</template>

<script>
import BlogItem from "./items/BlogItem.vue";

export default {
    props: {
        posts: {
            type: Array,
        },
    },
    components: { BlogItem },
};
</script>

<style lang="scss" scoped></style>
