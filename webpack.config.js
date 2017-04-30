const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/,
                use: ['url-loader']
            },
            {
                test: /\.eot$/,
                use: ['url-loader']
            },
            {
                test: /\.wof\d?/,
                use: ['url-loader']
            },
            {
                test: /\.svg$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
}