import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      window.addEventListener("resize", resizeHandler);
    });
    function _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
    function resizeHandler() {
      if (_isMobile()) {
        store.dispatch("setupCollapse", true);
      }
    }
  },
};
