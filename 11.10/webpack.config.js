const {
    resolve
} = require("path");
const glob = require("glob"); // node的glob模块允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件.
const {
    ProvidePlugin
} = require("webpack"); // 配置全局环境变量
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 打包html文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包css文件
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 复制静态资源使用
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css
const uglifyjs = require('uglifyjs-webpack-plugin');

//@types/jquery awesome-typescript-loader axios babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-stage-0 better-scroll copy-webpack-plugin css-loader extract-text-webpack-plugin file-loader html-loader html-webpack-plugin jquery less less-loader mini-css-extract-plugin optimize-css-assets-webpack-plugin popper.js sass sass-loader style-loader ts-loader typescript uglifyjs-webpack-plugin url-loader webpack@4.44.1 webpack-cli@3.3.12 webpack-dev-server@3.11.0

module.exports = {
    entry: './src/index.ts',
    output: {
        path: resolve(__dirname, "dist"),
        publicPath: "./",
        // 多入口打包后的文件名,filename前面我们可以使用一个变量[name],这个就表示获取entry里面的key作为文件名加在前面
        filename: "js/[name].bundle.js",
    },

    performance: {
        // 关闭性能提示 https://blog.csdn.net/hzxOnlineOk/article/details/101282798
        hints: false,
    },
    //路径
    resolve: {
        alias: {
            "@": resolve(__dirname, "src/assets"),
        },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
                // 处理 css
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                ],
            },
            {
                // 处理 less
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                // 处理 scss
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                // 处理图片
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: "url-loader",
                options: {
                    // 小于 8 kb 转化成baser64
                    limit: 8 * 1024,
                    // 重命名hash10 ext:源文件扩展名 指定输出路径
                    name: "imgs/[hash:10].[ext]",
                },
            },
            {
                // 处理html中的img节点
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                // 处理其他文件
                exclude: /\.(css|scss|less|js|png|jpg|gif|jpeg|html|json|ts|tsx)$/,
                loader: "file-loader",
                options: {
                    // 重命名hash10 ext:源文件扩展名 指定输出路径
                    name: "font/[hash:10].[ext]",
                    publicPath: '../',
                },
            },
            {
                // 处理其他文件
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-0"], //因为安装的是babel-preset-es2015，所以这里要匹配这个
                    },
                },
            },
            {
                // 处理其他文件
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),


        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            axios: "axios",
        }),

        // // 复制静态文件
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: resolve(__dirname, "./src/text"),
        //         to: "./text",
        //     }, ],
        // }),
        // 压缩单独CSS
        new OptimizeCssAssetsWebpackPlugin(), //压缩css
        new uglifyjs(), //压缩js
    ],
    mode: "development", //开发环境
    //     // mode: "production", // 生产环境默认压缩js
    devServer: {
        // 自动打开浏览器 -- 默认浏览器
        open: true,
        // 启动的绝对路径
        contentBase: resolve(__dirname, "dist"),
        publicPath: "/",
        // 开启gzip的压缩
        compress: true,
        // 端口号
        port: 3000,
        index: 'index.html',
        // 热加载
        // hot: true,
        //服务器代理配置项
        disableHostCheck: true,
    },
}