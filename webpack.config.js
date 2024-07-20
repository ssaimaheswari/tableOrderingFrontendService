const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',  // Entry point for the application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',  // Output filename
        publicPath: '/'
    },
    mode: 'production',  // Use 'development' for development mode
    module: {
        rules: [
            {
                test: /\.js$/,  // Apply Babel loader to all .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,  // Apply style loaders to .css files
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,  // Handle image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // Template for the HTML file
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'  // Output filename for the CSS
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true  // For handling client-side routing
    },
    resolve: {
        extensions: ['.js', '.jsx']  // Resolve these extensions
    }
};
