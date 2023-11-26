// make a module.exports file here that puts the path

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/hockeytape.github.io/'
        : '/'
};
