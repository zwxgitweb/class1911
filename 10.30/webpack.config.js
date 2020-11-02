const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const extractCss = require('extract-text-webpack-plugin');


module.exports = {
	mode: "development",
	entry: {
		app1: './index.js',
	},
	output: {
		path: path.join(__dirname, '/bundle'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				
			},
			{
				test: /\.css$/,
				use: extractCss.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader"
						}
					]
				})
				
			}
		]
	},
	plugins: [
		new htmlPlugin({
			template: "./index.html",
			filename: "demo.html"
		}),
		new extractCss({
			filename: "style.css"
		})
	]
}