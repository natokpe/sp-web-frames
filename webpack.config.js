const path = require( 'path' );

module.exports = ( env, options ) => {
    const theMode = options.mode ? options.mode : 'none';
    const isProd = ( theMode === 'production' );

    return {
        mode: theMode,

        entry: {
            bundle: './src/index.js'
        },

        output: {
            path: path.join( __dirname, 'public', 'js' ),
            filename: '[name]' + ( isProd ? '.min' : '' ) + '.js'
            // assetModuleFilename: '[name][ext]'
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env' ]
                        }
                    }
                }
            ]
        },

        plugins: [
        ],
    };
};
