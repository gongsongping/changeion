var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var purify = require("purifycss-webpack-plugin");
module.exports = {
    entry: "./www/entry.js",
    output: {
        path: "./www/bundle",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};

// ,
// new purify({
//     // basePath: __dirname,
//     paths: [
//         "./www/*.html",
//         "./www/templates/*.html"
//     ]
// })

// module.exports = {
//     entry: "./www/entry.js",
//     output: {
//         path: "./www/bundle",
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: 'style-loader!css-loader' },
//             { test: /\.scss$/, loader: 'style!css!sass'},
//             { test: /\.less$/, loader: 'style!css!less'},
//             { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
//             { test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}
//         ]
//     }
// };