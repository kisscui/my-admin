const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const target = process.env.VUE_APP_REQUEST_URL;
module.exports = {
  // 按需引入elementUI
  configureWebpack: {
    plugins: [
      AutoImport({
        resolver: [ElementPlusResolver()],
      }),
      Components({
        resolver: [ElementPlusResolver()],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.symlinks(true); // 修复热更新失效
  },
  devServer: {
    proxy: {
      "/api": {
        target,
        changeOrigin: true,
        hot: true,
        secure: true, // 是否验证SSL Certs
        pathRewrite: {
          // 需要/api所以不重写 如果不需要/api就改成''
          "^/api": "",
        },
      },
    },
  },
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true, // 生产环境是否生成 sourceMap 文件
};
