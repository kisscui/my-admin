<template>
  <div class="committee-wrapper page-container">
    <div class="title-wrapper">
      <span class="title">指导委员会</span>
      <span class="manage">指导委员会管理员：徐婕</span>
    </div>
    <div class="committee-list-wrapper">
      <Title title="主任委员"></Title>
      <div class="committee-list zhuren">
        <el-popover
          v-for="user of userInfo.zhurenweiyuan"
          :key="user.name"
          width="450"
          placement="top-start"
          trigger="hover"
        >
          <div style="max-width: 450px">
            <div class="committee-info-wrap">
              <div
                :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                style="
                  border-radius: 50%;
                  height: 80px;
                  width: 80px;
                  background-size: cover;
                "
              ></div>
              <div class="committee-info">
                <div class="name">{{ user.name }}</div>
                <div class="workspace">{{ user.workspace }}</div>
                <div class="label-wrap">
                  <div
                    class="label"
                    v-for="(label, index) of user.label"
                    :key="index"
                  >
                    {{ label }}
                  </div>
                </div>
              </div>
            </div>
            <div class="committee-introduce">{{ user.introduce }}</div>
          </div>
          <template #reference>
            <div class="name-item">{{ user.name }}</div>
          </template>
        </el-popover>
      </div>
      <Title title="执行主任"></Title>
      <div class="committee-list zhuren">
        <el-popover
          v-for="user of userInfo.zhixingzhuren"
          :key="user.name"
          placement="top-start"
          width="450"
          trigger="hover"
        >
          <div style="max-width: 450px">
            <div class="committee-info-wrap">
              <div>
                <div
                  :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                  style="
                    border-radius: 50%;
                    height: 80px;
                    width: 80px;
                    background-size: cover;
                  "
                ></div>
              </div>
              <div class="committee-info">
                <div class="name">{{ user.name }}</div>
                <div class="workspace">{{ user.workspace }}</div>
                <div class="label-wrap">
                  <div
                    class="label"
                    v-for="(label, index) of user.label"
                    :key="index"
                  >
                    {{ label }}
                  </div>
                </div>
              </div>
            </div>
            <div class="committee-introduce">{{ user.introduce }}</div>
          </div>
          <template #reference
            ><div class="name-item">{{ user.name }}</div></template
          >
        </el-popover>
      </div>
      <Title title="委员" subtitle="(按姓氏拼音排序)"></Title>
      <div class="committee-list">
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(0, 7)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference
              ><div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
        </div>
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(7, 14)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference>
              <div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
        </div>
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(14, 21)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference
              ><div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
        </div>
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(21, 28)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference
              ><div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
        </div>
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(28, 35)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference
              ><div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
        </div>
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(35, 42)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference>
              <div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
        </div>
        <div class="weiyuan">
          <el-popover
            v-for="user of userInfo.weiyuan.slice(42, 48)"
            :key="user.name"
            placement="top-start"
            width="450"
            trigger="hover"
          >
            <div style="max-width: 450px">
              <div class="committee-info-wrap">
                <div>
                  <div
                    :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
                    style="
                      border-radius: 50%;
                      height: 80px;
                      width: 80px;
                      background-size: cover;
                    "
                  ></div>
                </div>
                <div class="committee-info">
                  <div class="name">{{ user.name }}</div>
                  <div class="workspace">{{ user.workspace }}</div>
                  <div class="label-wrap">
                    <div
                      class="label"
                      v-for="(label, index) of user.label"
                      :key="index"
                    >
                      {{ label }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="committee-introduce">{{ user.introduce }}</div>
            </div>
            <template #reference>
              <div class="name-item">{{ user.name }}</div></template
            >
          </el-popover>
          <div class="name-item"></div>
          <div class="name-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./components/Title";
import userInfo from "./data/userInfo";

export default {
  components: {
    Title,
  },
  data() {
    return {
      userInfo,
    };
  },
};
</script>
<style lang="scss">
.committee-info-wrap {
  display: flex;
  align-items: center;
  padding: 14px 24px 0px;
  .committee-info {
    padding-left: 25px;
    .name {
      font-size: 16px;
      font-weight: 500;
      color: rgba(69, 71, 77, 1);
    }
    .workspace {
      font-size: 14px;
      font-weight: 400;
      color: rgba(71, 86, 105, 1);
      padding: 8px 0px;
    }
    .label-wrap {
      display: flex;
      font-size: 12px;
      font-weight: 400;
      color: rgba(71, 86, 105, 1);
      .label {
        background: rgba(242, 248, 249, 1);
        border-radius: 9px;
        border: 1px solid #1890ff;
        margin-right: 10px;
        padding: 2px 8px;
      }
    }
  }
}
.committee-introduce {
  padding: 14px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(71, 86, 105, 1);
}
</style>
<style lang="scss" scoped>
.committee-wrapper {
  background: #fff;
  padding: 24px;
  .title-wrapper {
    .title {
      height: 25px;
      font-size: 18px;
      font-weight: 600;
      color: rgba(0, 30, 36, 1);
      line-height: 25px;
    }
    .manage {
      float: right;
      font-size: 14px;
      color: #45474d;
      line-height: 25px;
      padding-right: 120px;
    }
  }
  .committee-list-wrapper {
    padding: 0px 120px;
    .committee-list {
      padding: 40px 0px;
      // background-color: rgba(4, 124, 147, 0.05);
      background-color: rgba(24, 144, 255, 0.05);
    }
    .zhuren {
      display: flex;
      justify-content: center;
    }
    .weiyuan {
      display: flex;
      justify-content: space-around;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    .name-item {
      width: 100px;
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      flex-shrink: 0;
      color: rgba(69, 71, 77, 1);
      cursor: pointer;
    }
  }
}
</style>
