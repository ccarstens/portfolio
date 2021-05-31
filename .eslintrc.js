// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        node: true,
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        // "prettier/vue",
        'plugin:prettier/recommended',
    ],
    // required to lint *.vue files
    plugins: ['vue', 'eslint-plugin-prettier'],
    globals: {
        process: 'readonly',
    },
    // add your custom rules here
    rules: {
        // allow async-await
        // 'generator-star-spacing': 'off',
        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-prototype-builtins': 'off',
    },
}