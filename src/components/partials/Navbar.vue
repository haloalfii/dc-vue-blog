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

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <!-- <a class="nav-link active" aria-current="page" href="#"
                            ></a
                        > -->
                        <router-link
                            to="/"
                            class="nav-link"
                            :class="{ active: this.$route.path == '/' }"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="/add"
                            class="nav-link"
                            :class="{ active: this.$route.path == '/add' }"
                            >Add Blog</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
