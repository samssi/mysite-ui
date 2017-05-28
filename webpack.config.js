var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test   : /\.(eot|ttf|woff|woff2)$/,
                loader : 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.eot', '.ttf', '.woff', '.woff2']
    },
    externals: {
        'Config': JSON.stringify(process.env.ENV === 'production' ? require('./config/production.json') : require('./config/default.json'))
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};