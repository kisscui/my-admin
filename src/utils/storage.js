// 存储插件
import storage from "store";

/**
 * @description：保存数据到localStorage
 * @param {key 键，value 值}
 * @return: undefined
 */

export const setStorageItem = (key, value) => {
  storage.set(key, value);
};

/**
 * @description: 保存数据到localStorage带上过期时间 单位毫秒
 * @param {key 键，value 值，duration 存储时间 毫秒}
 * @return: undefined
 */
export const setExpiredStorageItem = (key, value, duration) => {
  storage.set(key, value, duration);
};

/**
 * @description: 从localStorage获取数据
 * @param {key 键}
 * @return: value
 */
export const getStorageItem = (key) => {
  return storage.get(key);
};

/**
 * @description: 从localStorage移除数据
 * @param {key 键}
 * @return: undefined
 */
export const removeStorage = (key) => {
  storage.remove(key);
};

/**
 * @description: 清空localStorage数据
 * @param {}
 * @return: undefined
 */
export const clearStorage = () => {
  storage.clearAll();
};
