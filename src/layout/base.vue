<template>
  <el-container class="common-layout">
    <el-aside width="initial">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
        <HistoryToolBar />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import HistoryToolBar from "@/components/HistoryToolBar.vue";
import Header from "@/components/Head.vue";
import Aside from "@/components/Aside.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.common-layout ::v-deep(.el-header) {
  padding: 0;
  height: 106px;

  box-sizing: content-box;
}
.common-layout ::v-deep(.el-main) {
  background: #f0f2f5;
}
</style>
