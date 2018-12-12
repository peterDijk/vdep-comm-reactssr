const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new ExtractTextPlugin({filename: 'style.css'}),
    new CopyWebpackPlugin([
        // relative path is from src
        { from: './images/favicon.ico' },
        { 
            from: 'images',
            to: 'images/' 
        }
      ]),
    new MiniCssExtractPlugin({
        filename: 'style.css',
      })
];

if ( !dev ) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    } ) );
}

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join( __dirname, "src" ),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.jsx",
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // taken out ? before $
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                },
                resolve: {
                    extensions: [".js", ".jsx"]
                }
                
            },
            {
                test: /\.scss$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
              }
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins
};
