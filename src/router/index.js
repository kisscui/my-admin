import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import NProgress from "nprogress";
import { getStorageItem } from "@/utils/storage";
import "../styles/nprogress.scss";

import layout from "@/layout/base.vue";
const routes = [
  {
    path: "/",
    name: "Layout",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { title: "指导委员会" },
        component: () => import("../view/home/index.vue"),
      },
      {
        path: "/userManage",
        name: "UserManage",
        meta: { title: "用户管理" },
        component: () => import("../view/usermanage/index.vue"),
      },
      {
        path: "/course",
        name: "Course",
        meta: { title: "课程管理" },
        component: () => import("../view/course/index.vue"),
      },
      {
        path: "/commentlist",
        name: "CommentManag",
        meta: { title: "留言管理" },
        component: () => import("../view/commentManage/index.vue"),
      },
      {
        path: "/base",
        name: "BaseManage",
        meta: { title: "基地管理" },
        component: () => import("../view/baseManage/index.vue"),
      },
      {
        path: "/clinical",
        name: "Clinical",
        meta: { title: "临床实践" },
        component: () => import("../view/clinical/index.vue"),
      },
      {
        path: "/clinicalPractice",
        name: "ClinicalPractice",
        meta: { title: "实践记录" },
        component: () => import("../view/clinicalPractice/index.vue"),
      },
      {
        path: "/scorelist",
        name: "ScoreList",
        meta: { title: "成绩列表" },
        component: () => import("../view/scoreList/index.vue"),
      },
      {
        path: "/advisory",
        name: "Advisory",
        meta: { title: "咨询管理" },
        component: () => import("../view/advisory/index.vue"),
      },
      {
        path: "/questionnaire",
        name: "Questionnaire",
        meta: { title: "问卷调查" },
        component: () => import("../view/questionnaire/index.vue"),
      },
      {
        path: "/userStatistics",
        name: "UserStatistics",
        meta: { title: "用户统计" },
        component: () => import("../view/userStatistics/index.vue"),
      },
      {
        path: "/operatorlogs",
        name: "OperatorLogs",
        meta: { title: "操作日志" },
        component: () => import("../view/userStatistics/index.vue"),
      },
      {
        path: "/infoguard",
        name: "Infoguard",
        meta: { title: "个人中心" },
        component: () => import("../view/infoguard/index.vue"),
      },
      {
        path: "/redirect",
        name: "Redirect",
        meta: { title: "" },
        component: () => import("../view/redirect/index.vue"),
      },
      {
        path: "/vFromRender",
        name: "VFromRender",
        meta: { title: "动态表单渲染" },
        component: () => import("../view/vForm/VFormRender.vue"),
      },
    ],
  },
  {
    path: "/vFromDesigner",
    name: "VFormDesigner",
    component: () => import("../view/vForm/VFormDesigner.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = getStorageItem("TOKEN");
  if (to.path === "/login") {
    next();
  } else if (!token) {
    next({ path: "/login" });
  } else {
    next();
  }
});

router.afterEach((to) => {
  NProgress.done();
  store.dispatch("addHistoryTags", to);
});

export default router;
