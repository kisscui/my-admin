/**
 * @desc 函数防抖
 * @param {*} fun // 回调函数
 * @param {*} delay //延迟执行毫秒数
 * @returns
 */

export const debounce = function (fun, delay) {
  let timer; // 定时器
  return function () {
    let _this = this; // 记录this的值，防止在回调函数中丢失
    let args = arguments; // 函数参数
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(() => {
      // 防止this值变为window
      fun.call(_this, args);
    }, delay);
  };
};

// 触发事件后立即执行回调函数，但是触发后n毫秒内不会再执行回调函数，如果n毫秒内触发了事件，也会重新计时
/**
 * @desc 函数防抖
 * @param {*} fun // 回调函数
 * @param {*} delay //延迟执行毫秒数
 * @returns
 */
export const _debounce = function (fun, delay) {
  let timer;
  return function () {
    let _this = this;
    let args = arguments;
    // 标识是否立即执行
    let isImmediately = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delay);
    isImmediately ? fun.call(_this, args) : null;
  };
};
