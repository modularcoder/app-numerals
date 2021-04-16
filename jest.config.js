module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**//*.[jt]s?(x)', '**/?(*.)+(spec).[jt]s?(x)'],
}
