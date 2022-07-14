<template>
  <div class="committee-title-wrapper">
    <div class="committee-title">
      <div class="line"></div>
      <div class="title-img-wrapper">{{ title }}</div>
      <div class="line"></div>
    </div>
    <div class="tip">{{ subtitle }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: false,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.committee-title-wrapper {
  padding-top: 30px;
  .committee-title {
    display: flex;
    align-items: center;
    .line {
      border-top: 1px solid #1890ff;
      border-bottom: 1px solid #1890ff;
      flex-grow: 1;
      height: 2px;
    }
    .title-img-wrapper {
      // font-size: 0px; 这两种方法都能去除图片底部间隙
      line-height: 0px;
      margin: 0px 8px;
      width: 159px;
      height: 38px;
      background-image: url("../../../assets/title.png");
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      color: rgba(4, 124, 147, 1);
    }
  }
  .tip {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(190, 193, 202, 1);
  }
}
</style>
