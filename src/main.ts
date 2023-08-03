import * as Vue from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";

const downloadUrl = "https://3sqrt7.lanzouq.com/iqMAg13p4p3c";
const topInfo = {
    productName: "维念桌面",
    links: [
        { text: "软件下载", href: downloadUrl },
        { text: "开发文档", href: "" }
    ],
    rightButton: { text: "下载 Windows 版本", href: downloadUrl }
};

const docsMenu = {
    "start": "前言",
    "rules": "守则",
    "introduction": "认识小组件",
    "firstWidget": "第一个小组件",
    "node": "Node 集成",
    "publish": "发布小组件"
};

const routes = [{
    path: "/",
    component: () => import("./pages/IndexBody.vue")
}];
for (const navName of Object.keys(docsMenu)) {
    routes.push({
        path: `/${navName}`,
        component: () => import(`./docs/${navName}.md`)
    });
}

const app = Vue.createApp(App, {
    topInfo: topInfo,
    docsMenu: docsMenu,
    currentPage: location.pathname.substring(1)
});

app.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
}));

app.mount("#app");