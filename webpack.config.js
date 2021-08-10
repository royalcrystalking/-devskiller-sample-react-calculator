const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: {
        main: './src/main'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ['@babel/proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLPlugin({ template: './src/index.html' }),
    ],
};
