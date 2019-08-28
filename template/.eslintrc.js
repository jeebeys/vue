
module.exports = {
    root: true,
    parser: 'babel-eslint',
    // parserOptions: {
    //     sourceType: 'module',
    //     "ecmaVersion": 6,
    //     "ecmaFeatures": {
    //         "jsx": true
    //     }
    // },
    env: {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "amd": true
    },
    extends: 'vue',
    plugins: [
        'vue'
    ],

    rules: {
        'no-console': 'off'
    }
}
