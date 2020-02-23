<template>
  <div class="dev-proxy">
    <p class="title">代理proxy</p>
    <p class="indent">开发环不可避免的会遇到跨域问题，关于跨域问题的本质网上有很多资料，不再赘述。<code>Vue-cli</code>提供的代理就很好的帮助我们解决了这个问题。</p>
    <p>在<code>vue.config.js</code>添加如下的配置：</p>
    <pre v-highlightjs="code"><code class="javascript"></code></pre>
    <p class="indent">更多关于代理的配置和介绍请访问<a href="https://cli.vuejs.org/zh/config/#devserver-proxy" target="blank">官方文档</a></p>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'DevPorxy',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      code:
`devServer: {
  proxy: {
    '/api': {
      target: 'http://192.168.1.200:8080/', // 接口地址，按需修改
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/api': '/api' //需要rewrite重写,
      },
      cookiePathRewrite: {
        //重写cookie路径 按需修改
        '/api': '/'
      }
    }
  }
}`
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>