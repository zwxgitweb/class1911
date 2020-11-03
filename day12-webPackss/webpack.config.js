const path = require('path');
const htmlPlugins = require('html-webpack-plugin');
const extracts = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    //指定文件的入口
    entry: {
        app: './src/app.js',
    },
    //指定文件的出口
    output: {
        path: path.join(__dirname, 'dist'), //创建出口的文件夹
        filename: 'app.js', // 文件名
    },
    //模块配置
    module: {
        rules: [{ // 模块规则配置(loader上下文解析器)
                test: /\.js$/, // 后缀名
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: [{
                                    borwser: ['>1%'],
                                }]
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: extracts.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024 * 8,
                    name: '[name].[ext]',
                    outputPath: './img',//负责输出目录, 即打包后的写在磁盘的位置.
                    publicPath: '../img' //对页面引入资源的补充,比如img标签引入或者css引入等.
                }
            },
        ]
    },
    //实例化插件
    plugins: [
        new htmlPlugins({
            template: './src/html/index.html',
            filename: 'html/home.html',
        }),
        new extracts({
            filename: 'css/style.min.css',
        })
    ],
    //服务
    devServer: {
        port: 6969,
        host: 'localhost',
        hot: true,
        before(app) {
            app.get('list', (req, res) => {
                res.send(data);
            })
        }
    }
}