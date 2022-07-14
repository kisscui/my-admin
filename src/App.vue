<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import { debounce } from "./utils/tool";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const store = useStore();
onBeforeMount(() => {
  resizeHandler();
  window.addEventListener("resize", debounce(resizeHandler, 300));
});
function _isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}
function resizeHandler() {
  store.dispatch("setTableHeight", document.body.clientHeight - 106 - 40 - 36);
  if (_isMobile()) {
    store.dispatch("setupCollapse", true);
  } else {
    store.dispatch("setupCollapse", false);
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
