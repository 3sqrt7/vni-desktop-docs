<script lang="ts">
export default {
    data() {
        return {
            bottomData: Object(Object)
        }
    },
    mounted() {
        fetch("https://asset.3sqrt7.com/json/vnisoft/bottom.json").then((response) => {
            return response.json();
        }).then((data) => {
            this.bottomData = data;
        });
    }
}
</script>

<template>
    <div class="bottom">
        <div class="card">
            <a href="https://www.vnisoft.top" target="_blank">
                <img src="https://asset.3sqrt7.com/img/vnisoft/logo.webp" />
            </a>
        </div>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <div v-for="title in Object.keys(bottomData)" class="card">
            <h1>{{ title }}</h1>
            <!-- eslint-disable-next-line vue/require-v-for-key -->
            <p v-for="text in Object.keys(bottomData[title])">
                <a :href="bottomData[title][text]" target="_blank">{{ text }}</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
.bottom {
    width: calc(100% - 80px);
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    margin-top: 10px;
    background-color: #fff;
    display: inline-flex;
    justify-content: center;
    padding: 30px 40px;
}
.card {
    flex: 1;
    max-width: 220px;
}
.card img {
    margin-top: 40px;
    height: 40px;
}
.card h1 {
    font-size: 20px;
    margin: 0;
}
.card p {
    font-size: 16px;
    margin: 10px 0;
}
.card a {
    text-decoration: none;
    color: #000;
}
.card a:hover {
    text-decoration: underline;
}
</style>