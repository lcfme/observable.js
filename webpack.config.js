const path = require('path');

function resolve(...args) {
    return path.join(__dirname, ...args);
}

module.exports = {
    context: resolve(''),
    entry: './src/cjs',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: resolve('dist'),
        filename: 'observex.js',
        library: 'Observex',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            }
        ]
    }
};
