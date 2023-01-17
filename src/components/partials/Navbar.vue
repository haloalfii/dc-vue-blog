<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Vue DC's Blog</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <span class="navbar-text"> Total Blog = {{ postsTotal }} </span>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        postsTotal: {
            type: Number,
        },
    },
};
</script>

<style lang="scss" scoped></style>
