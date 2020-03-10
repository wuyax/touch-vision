const tailwindConfig = require('./tailwind.config')
module.exports = ({ file }) => {
  let vwUnit
  // 对文件路径中包含vant的文件设置vwUnit为375
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    vwUnit = 375
  } else {
    vwUnit = 750
  }
  return {
    plugins: {
      tailwindcss: tailwindConfig,
      'postcss-aspect-ratio-mini': {},
      'postcss-write-svg': {
        utf8: false
      },
      'postcss-px-to-viewport': {
        viewportWidth: vwUnit, // (Number) The width of the viewport.
        viewportHeight: 1334, // (Number) The height of the viewport.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: 'vw', // (String) Expected units.
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false // (Boolean) Allow px to be converted in media queries.
      },
      'postcss-preset-env': {
        stage: 0
      }
    }
  }
}
