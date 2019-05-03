const log = (...args) => console.log(`[Loader]`, ...args);

module.exports = function(context) {
    return context;
}
