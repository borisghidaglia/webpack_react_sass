const HtmlWebPackPlugin = require("html-webpack-plugin")

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

let config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'img/[hash:base64:6]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
    ]
};

if (process.env.NODE_ENV == 'production') {
    config.module.rules[1].use = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            'css-loader?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:6]',
            'postcss-loader',
            'sass-loader'
        ]
    })

    config.plugins.push(
        new ExtractTextPlugin('style.css'),
        new UglifyJsPlugin(),
    )

} else {
    config.module.rules[1]['loader'] = [
        'style-loader',
        'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:6]',
        'postcss-loader',
        'sass-loader?sourceMap'
    ]
}

module.exports = config
