<script setup lang="ts">
class TopInfo {
    productName!: string;
    links!: Array<LinkItem>;
    rightButton!: LinkItem;
}
class LinkItem {
    text!: string;
    href!: string;
    target!: string;
    right!: boolean;
}
defineProps<{
    info: TopInfo
}>()
</script>

<template>
    <div class="top">
        <div id="top_ann"></div>
        <div class="continer vni">
            <a href="https://www.vnisoft.top" target="_blank">
                <img src="https://asset.3sqrt7.com/img/vnisoft/logo.webp" />
            </a>
        </div>
        <div class="continer links">
            <RouterLink to="/">
                <img src="/favicon.ico">
                <p style="font-size: 20px;">{{ info.productName }}</p>
            </RouterLink>
            <!--eslint-disable-next-line vue/require-v-for-key-->
            <p v-for="link in info.links">
                <a v-if="link.href.startsWith('https://')" :href="link.href" target="_blank">{{ link.text }}</a>
                <RouterLink v-else :to="link.href">{{ link.text }}</RouterLink>
            </p>
        </div>
        <div class="continer right">
            <a :href="info.rightButton.href" target="_blank">
                <button>{{ info.rightButton.text }}</button>
            </a>
        </div>
    </div>
</template>

<style scoped>
.top {
    position: relative;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    z-index: 114;
}
.continer {
    display: inline-block;
    vertical-align: middle;
    height: 70px;
}
.vni img {
    margin: 20px 0 20px 100px;
    height: 30px;
    padding-right: 20px;
    border: solid #bbb;
    border-width: 0 2px 0 0;
}
.links img {
    margin: 15px 0 15px 20px;
    width: 40px;
    height: 40px;
    vertical-align: middle;
}
.links p {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    margin: 0 15px;
    color: #000;
}
.links p:hover {
    text-decoration: underline;
}
.links p a {
    color: inherit;
    text-decoration: inherit;
}
.right {
    float: right;
    position: relative;
}
.right button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    padding: 5px 20px;
    background-color: transparent;
    border: 2px solid #0078d4;
    border-radius: 5px;
    color: #0078d4;
    font-size: 17px;
    font-weight: bolder;
    white-space: nowrap;
    cursor: pointer;
    transition: all .1s;
}
.right button:hover {
    color: #fff;
    background-color: #0078d4;
}
</style>