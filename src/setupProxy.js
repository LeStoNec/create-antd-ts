const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/slardar"],
    createProxyMiddleware({
      target: "https://i.snssdk.com",
      changeOrigin: true,
    })
  );
};
