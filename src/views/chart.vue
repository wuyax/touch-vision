<template>
  <div class="chart">
    <p class="title">按需引入Echarts</p>
    <p class="indent">默认使用<code>require('echarts')</code>
      得到的是已经加载了所有图表和组件的<code>ECharts</code>包，因此体积会比较大，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块。本模版已经集成了按需引入的示例。
      例如代码中只用到了柱状图，提示框和标题组件，因此在引入的时候也只需要引入这些模块，可以有效的将打包后的体积从<q>400</q> 多 KB 减小到<q>170</q> 多 KB。</p>
    <p class="indent">你可以访问这个连接了解更多信息<a
        href="https://www.echartsjs.com/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts">按需引入
        ECharts 图表和组件</a></p>
    <p class="indent">开发者可以在<code>@/asseta/js/loadEcharts.js</code>中添加需要的图表和组件。</p>
    <pre v-highlightjs="code"><code class="javascript"></code></pre>

    <div ref="chart" class="chart-x"
      style="width:100%; height: 80vw"></div>
    <div ref="chart2" class="chart-x"
      style="width: 100%; height:60vw"></div>
    <div ref="chart3" class="chart-x"
      style="width: 100%; height:60vw"></div>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'Chart',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      code: `// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入图表
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/radar')
// 引入组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

export default echarts
`
    }
  },
  computed: {},
  watch: {},
  created() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = this.$echarts.init(this.$refs.chart)
      this.chart2 = this.$echarts.init(this.$refs.chart2)
      this.chart3 = this.$echarts.init(this.$refs.chart3)
      this.drawLine()
      this.drawPie()
      this.drawRadar()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      this.chart?.resize?.()
      this.chart2?.resize?.()
      this.chart3?.resize?.()
    },
    drawLine() {
      let option = {
        backgroundColor: '#8b9eb1',
        title: {
          left: 'center',
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: 30,
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          top: '80',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.chart.setOption(option)
    },
    drawPie() {
      let option = {
        backgroundColor: '#2c343c',

        title: {
          text: 'Customized Pie',
          left: 'center',
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 274, name: '联盟广告' },
              { value: 235, name: '视频广告' },
              { value: 400, name: '搜索引擎' }
            ].sort(function(a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function() {
              return Math.random() * 200
            }
          }
        ]
      }
      this.chart2.setOption(option)
      // console.log(option)
    },
    drawRadar() {
      let option = {
        title: {
          text: '雷达图',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {},
        legend: {
          // top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
          textStyle: {
            color: '#fff'
          }
        },
        radar: {
          name: '预算 vs 开销（Budget vs spending）',
          radius: '60%',
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            {
              name: 'Sales',
              max: 6000
            },
            {
              name: 'Administration',
              max: 16000
            },
            {
              name: 'Information Techology',
              max: 30000
            },
            {
              name: 'Customer Support',
              max: 35000
            },
            {
              name: 'Development',
              max: 50000
            },
            {
              name: 'Marketing',
              max: 25000
            }
          ]
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 3,
                shadowColor: 'rgba(0,0,0,.7)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 0.3
              }
            },
            data: [
              {
                value: [
                  Math.random() * 6000,
                  Math.random() * 16000,
                  Math.random() * 30000,
                  Math.random() * 30000,
                  Math.random() * 50000,
                  Math.random() * 24000
                ],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [
                  Math.random() * 6000,
                  Math.random() * 16000,
                  Math.random() * 30000,
                  Math.random() * 30000,
                  Math.random() * 50000,
                  Math.random() * 25000
                ],
                name: '实际开销（Actual Spending）'
              }
            ]
          }
        ],
        color: ['#ef4b4c', '#44cede'],
        backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [
            {
              offset: 0,
              color: '#895355' // 0% 处的颜色
            },
            {
              offset: 0.4,
              color: '#593640' // 100% 处的颜色
            },
            {
              offset: 1,
              color: '#39273d' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        }
      }
      this.chart3.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  // height: 600px;
}
.chart-x {
  margin-top: 40px;
}
</style>