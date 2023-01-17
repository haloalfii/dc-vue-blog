<template>
    <div class="mt-3 card p-3 shadow-sm">
        <h3>{{ data.title }}</h3>
        <p>{{ data.body }}</p>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped></style>
