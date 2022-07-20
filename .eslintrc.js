module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'default-param-last': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-unused-vars': 'off',
    'import/export': 0,
    'require-jsdoc': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx'] },
    ],
    'max-len': ['warn', { code: 110 }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};