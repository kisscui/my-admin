<template>
  <div class="history-wrapper">
    <div
      class="history-item m-r-10"
      v-for="(item, index) in getHistoryTag"
      :key="index"
    >
      <el-dropdown trigger="contextmenu" @command="handleCommand">
        <el-button
          size="small"
          :type="item.path === route.path ? 'primary' : ''"
          @click="toPath(item)"
        >
          {{ item.meta.title
          }}<el-icon
            @click="closeTag(index)"
            v-if="getHistoryTag.length !== 1"
            class="el-icon--right"
            ><Close
          /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :command="{ type: 'refresh', item, index }"
              >刷新</el-dropdown-item
            >
            <el-dropdown-item :command="{ type: 'close', item, index }"
              >关闭</el-dropdown-item
            >
            <el-dropdown-item :command="{ type: 'closeOther', item, index }"
              >关闭其他</el-dropdown-item
            >
            <el-dropdown-item :command="{ type: 'closeAll', item, index }"
              >关闭所有</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Close } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";
import router from "@/router/index";
const store = useStore();
const route = useRoute();
const getHistoryTag = computed(() => {
  return store.getters.getHistoryTag;
});
function handleCommand(command) {
  const type = command.type;
  switch (type) {
    case "refresh":
      router.replace({
        name: "Redirect",
        params: command.item,
      });
      break;
    case "close":
      closeTag(command.index);
      break;
    case "closeOther":
      closeOther(command.index);
      break;
    case "closeAll":
      closeAll();
      break;
    default:
      break;
  }
}
function closeTag(index) {
  if (getHistoryTag.value.length === index + 1) {
    router.replace({
      name: "Redirect",
      params: getHistoryTag.value[index - 1],
    });
  } else {
    router.replace({
      name: "Redirect",
      params: getHistoryTag.value[index + 1],
    });
  }
  store.dispatch("closeTag", index);
}
function toPath(ele) {
  router.push({
    name: ele.name,
  });
}
function closeOther(index) {
  router.replace({
    name: "Redirect",
    params: getHistoryTag.value[index],
  });
  store.dispatch("closeOther", index);
}
function closeAll() {
  router.replace({
    name: "Redirect",
    params: getHistoryTag.value[0],
  });
  store.dispatch("closeAll");
}
</script>

<style lang="scss" scoped>
.history-wrapper {
  height: 44px;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgb(0 21 41 / 32%);
  width: 100%;
  padding: 0 24px;
  overflow-x: auto;
  box-sizing: border-box;
  display: flex;
  .history-item {
    align-self: center;
  }
  // 覆盖默认的滚动条
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 53%, 0.4);
  }

  &:hover::-webkit-scrollbar-track {
    background: hsla(0, 0%, 53%, 0.1);
  }
}
</style>
