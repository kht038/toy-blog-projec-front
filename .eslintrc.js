module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // 파일 확장자 경고
    'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }], // react props 로 값 넘기기 허용
    'react/react-in-jsx-scope': 'off', // react import false
    'react/function-component-definition': [
      2, {
        namedComponents: [
          'arrow-function',
          'function-declaration',
        ],
      },
    ],
    'linebreak-style': 0,
    'import/no-unresolved': 'off', // 절대 경로 허용
    'import/extensions': [1, 'never'],
  },
};
