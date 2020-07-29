module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
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
        'import/resolver': {
            alias: {
                map: [
                    ['@static', './static'],
                    ['@components', './src/components'],
                    ['@store', './src/store'],
                    ['@themes', './src/themes'],
                    ['@page-components', './src/page-components'],
                ],
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            },
        },
    },
    plugins: [
        'prettier',
        'babel',
        'flowtype',
        'unicorn',
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
        'prettier/standard',
        'prettier/babel',
        'prettier/flowtype',
        'prettier/unicorn',
        'prettier/react',
        'plugin:flowtype/recommended',
        'plugin:unicorn/recommended',
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
        'unicorn/prevent-abbreviations': [
            'error',
            {
                replacements: {
                    props: false,
                    env: false,
                },
            },
        ],
        'unicorn/filename-case': 'off',
        'flowtype/no-types-missing-file-annotation': 'off',
        // 'react/prop-@types': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
                ecmaVersion: 2020,
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
                'import/resolver': {
                    node: {
                        extensions: ['.ts', '.tsx', '.d.ts'],
                    },
                },
            },
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
                'plugin:react/recommended',
            ],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                // '@typescript-eslint/no-explicit-any': 'off',
                // '@typescript-eslint/ban-ts-ignore': 'off',
            },
        },
    ],
}
