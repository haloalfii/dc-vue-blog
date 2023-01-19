<script setup>
import Navbar from "./components/partials/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div>
        <Navbar />
        <RouterView />
    </div>
</template>
