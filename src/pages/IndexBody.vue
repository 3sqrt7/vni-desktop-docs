<script setup lang="ts">
history.go(1);
setTimeout(() => {
    (document.getElementById("nav")?.children[0].children[0] as HTMLElement).click();
}, 100);
</script>

<template>
    &nbsp;
</template>