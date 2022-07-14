import { createStore } from "vuex";
import { setStorageItem, getStorageItem, clearStorage } from "@/utils/storage";
import {
  SET_USER,
  SET_TOKEN,
  SET_PERMISSIONS,
  SETUP_COLLAPSE,
  ADD_HISTORYTAG,
  CLOSE_TAG,
  CLOSE_OTHERTAG,
  CLOSE_ALLTAG,
  SET_THEME,
  LOGOUT,
  TABLEHEIGHT,
} from "./mutation-types";
import { login, getPermissions } from "@/api/user.js";
import router from "@/router";
export default createStore({
  state: {
    token: "",
    user: null,
    permissions: null,
    collapse: false,
    historyTag: [],
    tags: [],
    themeColor: "#0F4174",
    tableHeight: 400,
  },
  getters: {
    getUser: (state) => {
      return state.user || getStorageItem("USER");
    },
    getHistoryTag: (state) => {
      return state.historyTag;
    },
    getCollapse: (state) => {
      return state.collapse;
    },
    getThemeColor: (state) => {
      return state.themeColor;
    },
  },
  mutations: {
    [SET_TOKEN]: (state, token) => {
      state.token = token;
    },
    [SET_USER]: (state, payload) => {
      state.user = payload;
    },
    [SET_PERMISSIONS]: (state, payload) => {
      state.permissions = payload;
    },
    [SETUP_COLLAPSE]: (state, payload) => {
      state.collapse = payload;
    },
    [ADD_HISTORYTAG]: (state, payload) => {
      state.historyTag.push(payload);
      state.tags.push(payload.name);
    },
    [CLOSE_TAG]: (state, payload) => {
      state.historyTag.splice(payload, 1);
      state.tags.splice(payload, 1);
    },
    [CLOSE_OTHERTAG]: (state, payload) => {
      const recordHistoryTag = [state.historyTag[payload]];
      const recordTags = [state.tags[payload]];
      state.historyTag = recordHistoryTag;
      state.tags = recordTags;
    },
    [CLOSE_ALLTAG]: (state) => {
      const recordHistoryTag = [state.historyTag[0]];
      const recordTags = [state.tags[0]];
      state.historyTag = recordHistoryTag;
      state.tags = recordTags;
    },
    [SET_THEME]: (state, payload) => {
      setStorageItem("themeColor", payload);
      state.themeColor = payload;
    },
    [LOGOUT]: (state) => {
      clearStorage();
      state.token = "";
    },
    [TABLEHEIGHT]: (state, payload) => {
      state.tableHeight = payload;
    },
  },
  actions: {
    Login({ commit }, payload) {
      login(payload)
        .then((res) => {
          commit(SET_USER, res.results.user);
          commit(SET_TOKEN, res.results.token);
          setStorageItem("TOKEN", res.results.token);
          setStorageItem("USER", res.results.user);
          router.push({
            name: "Layout",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取菜单信息
    GetPermissions({ commit }, payload) {
      return new Promise((resolve, reject) => {
        getPermissions(payload)
          .then((res) => {
            commit(SET_PERMISSIONS, res.results);
            resolve(res.results);
          })
          .catch((err) => {
            reject(err);
            console.log(err);
          });
      });
    },
    addHistoryTags({ commit, state }, payload) {
      if (payload.name && payload.meta.title) {
        // 防止重复添加
        if (!state.tags.includes(payload.name)) {
          commit(ADD_HISTORYTAG, payload);
        } else {
          const index = state.tags.findIndex((ele) => payload.name === ele);
          state.historyTag.splice(index, 1, payload);
          state.tags.splice(index, 1, payload.name);
        }
      }
    },
    closeTag({ commit }, payload) {
      commit(CLOSE_TAG, payload);
    },
    closeOther({ commit }, payload) {
      commit(CLOSE_OTHERTAG, payload);
    },
    closeAll({ commit }) {
      commit(CLOSE_ALLTAG);
    },
    setupCollapse({ commit }, payload) {
      commit(SETUP_COLLAPSE, payload);
    },
    setThemeColor({ commit }, payload) {
      commit(SET_THEME, payload);
    },
    setTableHeight({ commit }, payload) {
      commit(TABLEHEIGHT, payload);
    },
    logout({ commit }) {
      commit(LOGOUT);
      router.push({
        name: "Login",
      });
    },
  },
  modules: {},
});
