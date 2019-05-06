const log = (...args) => console.log(`[Plugin]`, ...args);

class MyExampleWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit
    }
}

module.exports = MyExampleWebpackPlugin;
