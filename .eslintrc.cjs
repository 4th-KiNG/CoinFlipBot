module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '*.cjs', 'vite.config.ts', '*.d.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'import', 'simple-import-sort', 'unused-imports', 'mobx'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],

    // import
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      peerDependencies: true,
      optionalDependencies: false,
    }],
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/prefer-default-export': 'off',

    // typescript
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-misused-promises': 'off',

    // react
    "react/react-in-jsx-scope": "off",
    'react/jsx-curly-newline': 'off',
    'react/display-name': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
    }],
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-max-props-per-line': ['warn', {
      maximum: {
        single: 3,
        multi: 1
      }
    }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      shorthandFirst: true,
      multiline: 'last',
      reservedFirst: true,
      noSortAlphabetically: true
    }],
    'react/jsx-indent': ['warn', 2, {
      indentLogicalExpressions: true
    }],
    'react/jsx-indent-props': ['warn', 2,],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-no-useless-fragment': ['warn', {
      allowExpressions: true
    }],
    'react/self-closing-comp': ['warn', {
      'component': true,
      'html': true
    }],
    'react/button-has-type': 'off',

    // jsx-a11y
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    // mobx
    "mobx/unconditional-make-observable": "error",
    "mobx/missing-make-observable": "error",
    "mobx/missing-observer": "warn",

    // other
    'no-plusplus': 'off',
    'no-confusing-arrow': 'off',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-unneeded-ternary': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    'max-classes-per-file': 'off',
    'prefer-const': 'warn',
    'no-use-before-define': 'off',
    curly: ['error', 'multi-line'],
    'no-mixed-operators': 'error',
    camelcase: 'off',
    'no-console': ['warn', {allow: ['error']}],
    'max-len': ['warn', {
      code: 120,
      ignoreStrings: true,
      ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
      ignoreUrls: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
    }],
    'dot-notation': 'warn',
    'no-continue': 'warn',
    indent: 'off',
    'unicode-bom': 'off',
    'no-process-exit': 'error',
    'linebreak-style': 0,
    'no-nested-ternary': 'off',
    semi: ['error', 'never'],
    'no-restricted-exports': 'off',
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'always'],
    'newline-before-return': 'warn',
    'class-methods-use-this': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    cache: false,
  },
}
