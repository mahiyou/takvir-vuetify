module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "vue/script-indent": ["error", 4],
        "vue/html-indent": ["error", 4],
    },
};
