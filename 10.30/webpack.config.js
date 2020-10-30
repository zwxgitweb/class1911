const path = requerire('path')

module.exports = {
    // entry: './app.js',
    entry: {
        aaa: './app.js'
    },
    output: {
        path: path.join(__dirname + '/bundle'),
        filename: 'index.js'
    },

    //模块
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // options: {
                //     presets: [
                //         [
                //             '@babel/preset-env',
                //             {
                //                 targets: [{
                //                     browser: [">1%"]
                //                 }]
                //             }

                //         ]
                //     ]
                // }
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
			filename: "index.css"
		})
	]

}