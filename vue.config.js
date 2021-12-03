const path = require('path')
function resolvePath(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: (config) => {
        let resolve = {
            alias: {
                "@": resolvePath("src"),
            },
        };
        return { resolve };
    }
}