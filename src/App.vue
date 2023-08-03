<script setup lang="ts">
import VniSoftTop from "./components/VniSoftTop.vue";
import "github-markdown-css/github-markdown.css";

defineProps<{
    topInfo: any,
    docsMenu: any,
    currentPage: String
}>();

window.addEventListener("load", () => {
    document.querySelector(".top .links a")?.setAttribute("href", "https://desktop.vnisoft.top/");
    (document.querySelector(".top .links a") as HTMLElement).onclick = () => {
        location.href = "https://desktop.vnisoft.top/";
    };
});
</script>

<script lang="ts">
export default {
    watch: {
        $route(to: any) {
            document.getElementById("show")?.scrollTo(0, 0);
            document.getElementsByClassName("nav_item_focused")[0]?.classList.remove("nav_item_focused");
            document.getElementsByName(to.path.substring(1))[0]?.classList.add("nav_item_focused");

            setTimeout(() => {
                for (let dom of (document.getElementById("show")?.querySelectorAll("a") as NodeList)) {
                    let a = dom as HTMLElement;
                    a.setAttribute("target", "_blank");
                }
            }, 100);
        }
    }
}
</script>

<template>
    <VniSoftTop :info="topInfo" />
    <div id="nav">
        <RouterLink v-for="navName in Object.keys(docsMenu)" :key="navName" :to="navName">
            <div :name="navName" :class="'nav_item' + ((currentPage == navName) ? ' nav_item_focused' : '')">
                {{ docsMenu[navName] }}
            </div>
        </RouterLink>
        <div class="more">
            <p class="title">更多精彩内容</p>
            <div class="container" id="more_ctx"></div>
            <div class="container">
                <span class="tips">广告位招租</span>
            </div>
        </div>
    </div>
    <div id="show" class="markdown-body">
        <RouterView />
    </div>
</template>

<style>
body {
    min-width: 900px;
    margin: 0;
}
.top {
    box-shadow: 0 1px 0 0 #ccc !important;
}
</style>

<style scoped>
#nav {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-top: 15px;
    height: calc(100% - 70px - 15px);
    width: 280px;
    background-color: #fff;
    box-shadow: 1px 0 0 0 #ccc;
    z-index: 1;
}

#nav a {
    color: initial;
    text-decoration: none;
    cursor: default;
}
.nav_item {
    font-size: 15px;
    padding: 8px 14px;
    margin: 0 10px;
    width: calc(100% - 48px);
    border-radius: 5px;
    transition: all .1s;
}
.nav_item:hover {
    background-color: rgb(0 0 0 / 4%);
}
.nav_item:active {
    background-color: rgb(0 0 0 / 8%);
}
.nav_item_focused {
    background-color: #0078d4 !important;
    color: #fff !important;
}

#show {
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 280px - 80px);
    height: calc(100% - 70px - 60px);
    overflow: auto;
    padding: 10px 40px 50px 40px;
}

#nav .more {
    position: absolute;
    bottom: 4px;
    left: 15px;
    width: calc(100% - 30px);
}
#nav .more .title {
    color: #BFBFBF;
    font-weight: bolder;
    font-size: 14px;
    margin: 0 0 12px 12px;
}
#nav .more .container {
    position: relative;
    width: 100%;
    min-height: 60px;
    background-color: #F9F9F9;
    border-radius: 8px;
    margin-bottom: 12px;
}
#nav .more .container .tips {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: #bbb;
    font-size: 15px;
}
</style>