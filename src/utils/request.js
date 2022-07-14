import axios from "axios";
import { getStorageItem, clearStorage } from "./storage";
import { ElMessage } from "element-plus";
// 创建axios实例
const request = axios.create({
  // api请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 50000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      ElMessage({
        showClose: true,
        message: "未授权请重新登录",
        type: "error",
      });
    } else {
      ElMessage({
        showClose: true,
        message: error.response.status,
        type: "error",
      });
    }
  }
};

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // 添加token
  const token = getStorageItem("TOKEN");
  if (config.url === "/user/login" || config.url === "/user/loginAddSmsCode") {
    config.headers["Authorization"] = "Basic Y2xpZW50aWQ6c2VjcmV0";
  } else {
    config.headers["Authorization"] = token;
  }
  return config;
}, errorHandler);

// 响应拦截器
request.interceptors.response.use((response) => {
  if (response.data.code === 1) {
    return response.data;
  }
  if (response.data.code === 3) {
    // 清除缓存
    clearStorage();
    ElMessage({
      showClose: true,
      message: "请先登录",
      type: "error",
    });
  } else if (response.data.code === 0) {
    if (response.data.message) {
      ElMessage({
        showClose: true,
        message: response.data.message,
        type: "error",
      });
    }

    return Promise.reject(response.data);
  }
});

export default request;
