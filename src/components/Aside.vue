<template>
  <div class="aside-layout">
    <div class="aside-login">
      <div
        v-if="!store.state.collapse"
        class="name animate__animated animate__backInLeft"
      >
        后台管理系统
      </div>
    </div>
    <el-menu
      :default-active="route.path"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="store.state.collapse"
      :router="true"
    >
      <el-menu-item
        :index="ele.path"
        :key="index"
        v-for="(ele, index) in routeList"
      >
        <el-icon>
          <component :is="ele.iconComp"></component>
        </el-icon>
        <template #title>
          <span>{{ ele.title }}</span></template
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup>
import {
  Location,
  User,
  Collection,
  Calendar,
  UserFilled,
  Document,
  ChatDotRound,
  Notebook,
  Notification,
  Postcard,
  List,
  Checked,
  Tickets,
} from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { markRaw } from "vue";
import { routeList } from "../router/route-list";
const store = useStore();
const route = useRoute();
console.log(route, "route");
const icons = {
  Location,
  User,
  Collection,
  Calendar,
  UserFilled,
  Document,
  ChatDotRound,
  Notebook,
  Notification,
  Postcard,
  List,
  Checked,
  Tickets,
};
console.log(routeList, "routeList");
routeList.forEach((ele) => {
  ele.iconComp = markRaw(icons[ele.icon]);
});
function handleSelect() {
  // console.log(index, indexPath, item, routeResult);
}
</script>
<style lang="scss" scoped>
.aside-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
  .aside-login {
    height: 64px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    background: var(--el-color-primary);
    color: #fff;
    .name {
      font-size: 12px;
      align-self: center;
    }
    img {
      align-self: center;
    }
  }
  .el-menu-vertical-demo {
    height: 100%;
    &:not(.el-menu--collapse) {
      width: 210px;
      min-height: 400px;
    }
  }
}
</style>
