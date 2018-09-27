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
                        presets: ['react', 'env', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLPlugin({ template: './src/index.html' }),
    ],
};
