const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // 相对于outputDir的静态资源(js、css、img、fonts)目录
    assetsDir: 'static',
    // webpack-dev-server 相关配置 
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        //web的端口号
        open: true,
        port: 2201,
        host: '127.0.0.1',
        https: false,
        hotOnly: false,
        //配置proxy跨域
        proxy: {
            '/api': {
                target: 'http://183.0.0.1:8100/', //请求api的路径
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }

        }
    },
    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: (config) => {
        //添加别名
        config.resolve.alias
            .set('@', resolve('src'))

    },
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: (config) => {

        //开启gzip压缩
        if (IS_PROD) {
            const plugins = [];
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
            config.plugins = [
                ...config.plugins,
                ...plugins
            ];
        }

    }

}