module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        'prettier',
        'import',
        'react',
        'react-hooks',
        'jsx-a11y',
        'jest',
        'cypress',
    ],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/standard',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'plugin:cypress/recommended',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/prop-types': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 2018,
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
            env: {
                browser: true,
                amd: true,
                node: true,
                es6: true,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
            plugins: [
                '@typescript-eslint',
                'prettier',
                'import',
                'react',
                'react-hooks',
                'jsx-a11y',
            ],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
                'prettier/@typescript-eslint',
                'prettier/react',
                'prettier/standard',
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended',
            ],
            rules: {
                'prettier/prettier': 'warn',
                'react/prop-types': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/ban-ts-ignore': 'off',
            },
        },
    ],
}
