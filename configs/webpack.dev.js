// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle-dev.js",
        path: path.resolve(__dirname, "..", "public"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", ".html"],
        modules: ["node_modules", path.resolve(__dirname, "..", "src")]
    },
    resolveLoader: {
        modules: ["node_modules"]
    },
    devServer: {
        stats: "minimal",
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.useable\.css$/,
                loader: "style-loader/useable!css"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            // {
            //     test: /bootstrap\/js\//,
            //     loader: 'imports-loader?jQuery=jquery'
            // },
            // {
            //     test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
            //     loader: 'imports-loader?jQuery=jquery'
            // },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [

        new webpack.DefinePlugin({
            "process.env.API_URL": JSON.stringify("http://localhost:3001")
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.png",
            hash: true
        })
    ]
};