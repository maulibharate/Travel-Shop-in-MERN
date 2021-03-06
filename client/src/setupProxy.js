const { createProxyMiddleware } = require('http-proxy-middleware');
const port = process.env.PORT || 5000

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `https://travel-shop-in-mern.herokuapp.com`,
            changeOrigin: true,
        })
    );
};