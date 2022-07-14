<template>
  <div class="header-wrap">
    <div>
      <el-icon
        v-if="isCollapsed"
        class="trigger"
        color="rgba(0, 0, 0, 0.65)"
        @click="toggleCollapsed"
        ><Expand
      /></el-icon>
      <el-icon
        v-else
        class="trigger"
        color="rgba(0, 0, 0, 0.65)"
        @click="toggleCollapsed"
        ><Fold
      /></el-icon>
    </div>
    <div class="form-btn">
      <el-button type="primary" @click="goVform">表单</el-button>
    </div>
    <div class="header-menu-wrap">
      <el-color-picker v-model="themeColor" @change="changeChemeColor" />
      <el-tooltip :offset="-10" :content="isScreenfull ? '退出全屏' : '全屏'">
        <el-icon class="trigger" @click="screenfullClick"
          ><FullScreen
        /></el-icon>
      </el-tooltip>
      <el-dropdown>
        <div class="header-menu m-l-20">
          <img :src="defaultHeadImg" width="50" height="50" alt="" />
          <div class="name">{{ user.name }}</div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a" @click="info"
              >个人中心</el-dropdown-item
            >
            <el-dropdown-item command="b" @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { getStorageItem } from "@/utils/storage";
import { SETUP_COLLAPSE } from "@/store/mutation-types";
import screenfull from "screenfull";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { setCheme } from "@/utils/setCheme";
import defaultHeadImg from "@/assets/default.png";
import { ElMessageBox } from "element-plus";
import { Expand, Fold, FullScreen } from "@element-plus/icons-vue";
const store = useStore();
const user = computed(() => store.getters.getUser);
const isScreenfull = ref(false);
const isCollapsed = ref(false);
const router = useRouter();
const recored = getStorageItem("themeColor");
const themeColor = ref(recored || store.state.themeColor);
setCheme(themeColor.value);
function toggleCollapsed() {
  isCollapsed.value = !isCollapsed.value;
  store.commit(SETUP_COLLAPSE, isCollapsed.value);
}
function changeChemeColor(color) {
  setCheme(color);
  store.dispatch("setThemeColor", color);
}
function info() {
  router.push("/infoguard");
}
function logout() {
  _logout();
}
function goVform() {
  router.push({
    name: "VFormDesigner",
  });
}
function screenfullClick() {
  screenfull.toggle().then(() => {
    isScreenfull.value = !isScreenfull.value;
  });
}
function _logout() {
  ElMessageBox.confirm("确定退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    store.dispatch("logout");
  });
}
</script>
<style lang="scss" scoped>
.header-wrap {
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
  height: 60px;
  display: flex;
  padding: 0 20px;
  .trigger {
    font-size: 20px;
    padding: 22px 0;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .form-btn {
    margin-left: 10px;
    align-self: center;
  }
  .header-menu-wrap {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .header-menu {
      height: 100%;
      display: flex;
      .name {
        align-self: center;
        max-width: 60px;
        color: rgba(0, 0, 0, 0.65);
        margin-left: 8px;
      }
      img {
        align-self: center;
        border-radius: 50%;
      }
    }
  }
  .header-menu-wrap ::v-deep(.el-color-picker__trigger) {
    transform: translateY(50%);
    margin-right: 10px;
  }
}
</style>
