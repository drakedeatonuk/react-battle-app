const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // test
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: './app/index.js', // entry point of the application
    module: {
        rules: [    // rules for when to use different types of loaders/transformations other than ".js" loader
            { test: /\.svg$/, use:'svg-inline-loader' },    // if package ends in '.svg', use loader 'svg-inline-loader'
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },  // if package ends in 'css', use loader 'css-loader' (loads styles into JS), then use loader 'style-loader' (loads styles into DOM)
            { test: /\.(js)$/, use:'babel-loader' }     // if package ends in '.js', use loader 'babel-loader' (loads all JS into an older version of JS that the browser understands)
        ]
    },
    output: {   // defines the output dir/file to export the package to
        path: path.resolve('.', 'dist'),    // export to dir '.' , create dir 'dist'
        filename: 'index_bundle.js',     // give the file the name 'index_bundle.js'
        publicPath: '/'     // default/fallback/public path that all incoming requests should use
    },
    plugins: [  // plugins allow you to execute certain tasks after the bundle has been created & exported
        new HtmlWebpackPlugin({    // generates an index.html page, puts it in our '/dist' folder with a <script> tag that references the newly created bundle
            template: 'app/index.html'
        }),
        new CopyPlugin({
                patterns : [
                    { from: '_redirects' }        // copies this file into the 'dist' bundle **
                ]
            }
        )
        // new webpack.EnvironmentPlugin({ 'NODE_ENV': 'production' })     // sets 'process.env.NODE_ENV' to 'production' before deploying code. This tells React to build the project in 'production mode' which strips out dev features like warnings
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',     // IF NODE-ENV == 'production': set to 'production' ELSE set to development ('production mode' strips out dev features)
    devServer: {
        historyApiFallback: true    // tells webpack not to try to handle any requests that come into the server
    }
}

// **: Note! The '_redirects' file is used by the Netlify server to redirect all traffic to our app to the "/" page.
//      This is needed because of the fact that React Router is handling all the endpoints, meaning the server doesn't need to handle redirects
//      webpack.config.js had to be told this too, via the 'publicPath', and 'historyApiFallback' attributes.