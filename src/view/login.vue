<template>
  <div class="all">
    <div class="formDiv">
      <el-form
        ref="loginFormRef"
        label-width="80px"
        :model="loginForm"
        :rules="loginRules"
        style="width: 348px"
        :hide-required-asterisk="true"
      >
        <div class="title">后台管理</div>
        <el-form-item label="账号" prop="userName">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入账号"
            name="userName"
            type="text"
          />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>

        <el-form-item label="验证码" prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width: 150px"
          />
          <img
            class="code-img"
            :src="codeImgSrc"
            @click="refresh"
            alt="刷新重试"
          />
        </el-form-item>
        <el-button
          style="
            width: 100%;
            height: 36px;
            background-color: #6f9fff;
            color: #fff;
            border-color: #6f9fff;
            margin-top: 24px;
          "
          @click="handleLogin"
          round
          >登 录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
const loginForm = reactive({
  userName: "",
  password: "",
  code: "",
  roleId: 1,
  randomStr: null,
});
const store = useStore();
const loginRules = reactive({
  userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

let codeImgSrc = ref("/api/random/randomStr/");

loginForm.randomStr =
  new Date().getTime() + "" + (Math.random() * 100).toFixed();
codeImgSrc.value = codeImgSrc.value + loginForm.randomStr;

function refresh() {
  codeImgSrc.value = "/api/random/randomStr/" + new Date().getTime();
}
function handleLogin() {
  store.dispatch("Login", loginForm);
}
</script>

<style lang="scss" scoped>
.all {
  background-image: url("../assets/loginBg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center center;
}
.logo {
  padding-left: 92px;
  padding-top: 52px;
}
.formDiv {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 24px;
  .code-img {
    cursor: pointer;
  }
}
.formDiv ::v-deep(.el-input__inner) {
  box-shadow: 0 0 0 0px !important;
  border-bottom: 1px solid #d6deed;
  border-radius: 0;
  padding: 11px;
  .el-form-item__content {
    justify-content: space-between;
  }
}
.formDiv ::v-deep(.el-form-item__content) {
  justify-content: space-between;
}
.title {
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.65);
  line-height: 40px;
  margin-bottom: 30px;
  text-align: center;
}
.tip {
  text-align: right;
}
</style>
