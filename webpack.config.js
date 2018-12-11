const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new ExtractTextPlugin({filename: 'style.css'}),
    new HtmlWebpackPlugin({   
        favicon: 'images/favicon.ico'
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
        app: "./client.js",
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
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                      fallback: 'style-loader',
                      use: ['css-loader']
                    })
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i, 
                loader: 'file?name=[name].[ext]'
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins
};
