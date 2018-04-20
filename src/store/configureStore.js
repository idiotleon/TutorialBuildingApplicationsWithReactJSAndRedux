/**
 * Dynamic imports are NOT supported by ES6,
 * so one has to use "require" instead of "import".
 */
if (process.env.NODE_EVN === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}