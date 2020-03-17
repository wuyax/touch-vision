// 所有的组件和图标可以在这里找到 https://github.com/apache/incubator-echarts/blob/master/index.js

// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts')
// 引入图表
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/radar')
// 引入组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

export default echarts
