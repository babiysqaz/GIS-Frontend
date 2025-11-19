// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'README.md',
    ],
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'ts/prefer-literal-enum-member': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
