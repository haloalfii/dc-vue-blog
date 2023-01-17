<template>
    <div>
        <Navbar />
        <blogWrapper />
    </div>
</template>

<script>
import Navbar from "./components/partials/Navbar.vue";
import blogWrapper from "./components/blogs/BlogWrapper.vue";

export default {
    components: { Navbar, blogWrapper },
};
</script>
