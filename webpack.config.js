const path = require('path');

module.exports = {
    entry: {
        background: './src/background/index.ts',
        popup: './src/popup/index.ts',
        options: './src/options/index.ts',
        inject: './src/inject/index.ts',
        content: './src/content/index.ts',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
        }],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: false,
    watch: true,
};
