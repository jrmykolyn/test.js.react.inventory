module.exports = {
    // Application entrypoint.
    entry: './src/index',
    output: {
        // Name of the 'output' file.
        filename: 'bundle.js',
        // Specify 'output' location/dir.
        path: './dist/',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx?)$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react' ]
                }
            }
        ]
    },
    plugins: []
}