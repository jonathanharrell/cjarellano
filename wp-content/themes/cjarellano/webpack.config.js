const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const inProduction = (process.env.NODE_ENV === 'production')

module.exports = {
    entry: {
        main: [
            './js/main.js',
            './css/main.css'
        ],
        vendor: ['@vimeo/player', 'gsap', 'scrollmagic', 'underscore', 'youtube-player']
    },

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?importLoaders=1,url=false!postcss-loader'
                })
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },

                    'img-loader'
                ]
            },

            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: [/node_modules/, /modernizr.js/]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        alias: {
            'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
        }
    },

    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),

        new ExtractTextPlugin('[name].css'),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),

        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8888,
            files: [
                path.join(__dirname, '**/*.php'),
                path.join(__dirname, 'build/*')
            ],
            open: false,
            notify: false
        })
    ]
}

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    )
}
