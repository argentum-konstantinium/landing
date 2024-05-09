const productionConfig = require('./webpack.server.prod');
const devConfig = require('./webpack.server.dev');

const isProduction = process.env.STAND === 'production';
const config = isProduction ? productionConfig : devConfig;

module.exports = config;
