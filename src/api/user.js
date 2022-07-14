import request from "@/utils/request";

export const login = (params) => {
  return request({
    url: "/user/login",
    method: "post",
    params: params,
  });
};

export const getPermissions = (roleId) => {
  return request({
    url: `/menus/menuList/${roleId}`,
    method: "get",
  });
};

export const userList = (params) => {
  return request({
    url: "user/list",
    method: "get",
    params,
  });
};
