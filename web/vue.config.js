module.exports = {
  lintOnSave: false,
  devServer: {   // 本地服务器配置(npm run serve)
    port: 8081, // 端口
    host: "localhost", // 域名
    https: false, // 是否开启https
    open: true	// 是否在开启服务器后自动打开浏览器访问该服务器
  },
}