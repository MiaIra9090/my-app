'use strict';

const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },

  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react-hooks/recommended',
    // eslint-config-prettier always in the end
    'eslint-config-prettier',
  ],

  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.d.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src', './'],
      },
    },
  },

  rules: {
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'camelcase': 'off',
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/camelcase': 'off',
    "react-hooks/exhaustive-deps": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "default-param-last": "off",
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['acc', 'accumulator'],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false, // sort: import {A, a, B, b} === error / import {A,B, a, b} === OK
        ignoreMemberSort: false, // sort: import {b, a, c} === error / import {a, b, c} === OK!
        ignoreDeclarationSort: true,
      },
    ],
    /**
     * react
     */
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-variables',
          'static-methods',
          '/^ref.*$/',
          'state',
          'instance-variables',
          'constructor',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set|remove)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'contextTypes',
            'childContextTypes',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    /**
     * @typescript-eslint
     */

    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    /**
     * Disable warnings when there is no extension of the imported file
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
    'no-alert': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'index', 'object', 'parent', 'sibling'],
      },
    ],
    /*
     * error in eslint - for enum
     * @link https://github.com/typescript-eslint/typescript-eslint/issues/325
     * @link https://github.com/typescript-eslint/typescript-eslint/issues/2483
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  overrides: [
    {
      files: ['**/slice.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
  ignorePatterns: ['cypress/*/*'],
};

module.exports.getConfigWithGlobals = function (globals) {
  return { ...config, globals };
};

module.exports = config;
