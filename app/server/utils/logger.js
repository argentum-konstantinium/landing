const SERVER = require("../../config/server.config");
 const logger = (...args) => {
    if (process.env.STAND !== 'production') {
        console.log(args, SERVER.loggerMessageColor)
    }
}

module.exports = logger;