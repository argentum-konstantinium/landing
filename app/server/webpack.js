const webpack = require("webpack");
const path = require("path");
const webpackConfigs = require("../webpack.config.js");

const compiler = webpack(webpackConfigs);
const {ROOT_DIR} = process.env

compiler.watch({
    ignored: [path.resolve(__dirname, `${ROOT_DIR}/node_modules/`)]
}, (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(stats)
})
