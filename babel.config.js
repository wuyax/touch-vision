// babel plugins
let plugins = [
  ['@babel/plugin-proposal-optional-chaining'],
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    },
    'vant'
  ],
  ["transform-imports", {
    "lodash-es": {
      "transform": "lodash-es/${member}",
      "preventFullImport": true
    }
  }]
]
// 生产环境移除console
const { NODE_ENV, DROP_CONSOLE } = process.env
if (NODE_ENV === 'production' && DROP_CONSOLE === 'yes') {
  plugins.push(['transform-remove-console'])
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}
