var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "../../styles/styles.css"
});

module.exports = {
    entry: "./js/dev/index.tsx",

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
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
              test: /\.scss$/,
              loader: extractSass.extract({
                  use: [
                    {loader: "css-loader"},
                    // { loader: 'css-loader', options: { importLoaders: 1 } },
                    {loader: "postcss-loader"},
                    {loader: "sass-loader"}
                  ],
                  // use style-loader in development
                  fallback: "style-loader"
              })
            }
        ],
    },

    plugins: [
      extractSass
    ]

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};
