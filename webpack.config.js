// Sass
// https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // ...
    module: {
        loaders: [
            // ...
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles/css/styles.css', {
            allChunks: true
        })
    ]
}

// TSX
// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
module.exports = {
    entry: [
      "./js/dev/index.tsx"
    ],

    output: {
        filename: "bundle.js",
        path: __dirname + '/js/compiled'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
