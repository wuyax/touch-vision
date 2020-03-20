<template>
  <div class="adapt-wrap">
    <p class="indent discribe">移动端适配是本模版的基础功能，也是这个模版的核心功能。接下来介绍该模版已经实现的功能和使用方法。</p>
    <p class="title">关于适配</p>
    <p class="indent">移动端适配是一个由来已久的问题，有很多解决方案。早期的<code>px2rem</code>是一种比较成熟的基于<code>dpr</code>的Hack。</p>
    <p class="indent">时过境迁，正如<a href="https://www.w3cplus.com/css/vw-for-layout.html" target="blank">大漠</a>在文章里说的：<q>Flexible已经完成了他自身的历史使命，我们可以放下Flexible，拥抱新的变化。</q></p>
    <p class="indet">本模版也是基于他的<code>vw</code>适配方案修改而来。移除了一些不再必须的插件，增加了一些在实际开发中有用的配置、组件等。</p>
    <p class="title">postcss-px-to-viewport</p>
    <p class="indent">目前出视觉设计稿，我们一般都是使用750px宽度的，那么100vw = 750px，即1vw = 7.5px。那么我们可以根据设计图上的px值直接转换成对应的vw值。手动计算非常繁琐，因此引入了该插件。</p>
    <p class="indent"><code>postcss-px-to-viewport</code>插件主要用来把<code>px</code>单位转换为<code>vw</code>、<code>vh</code>、<code>vmin</code>或者<code>vmax</code>这样的视窗单位，也是<code>vw</code>适配方案的核心插件之一。</p>
    <p class="indent">也就是说，在实际开发过程中，开发者不需要进行任何的计算，直接在代码中写<code>px</code>。</p>
    <p>源代码：</p>
    <pre v-highlightjs="code"><code class="css"></code></pre>
    <p>编译后的<code>css</code>：</p>
    <pre v-highlightjs="code2"><code class="css"></code></pre>
    <p class="title">插件的配置</p>
    <p class="indent">插件的配置文件在<code>.postcssrc.js</code>它的基本配置如下：</p>
    <pre v-highlightjs="code3"><code class="javascript"></code></pre>
    <p class="indent">开发这可以更具自己的设计稿和需求修改对应的参数。</p>
    <p class="indent">开发者也可以对照下面的系统默认配置，来调整。完整的说明可以访问<a href="https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md">官方文档</a></p>
    <pre v-highlightjs="code4"><code class="javascript"></code></pre>
    <p class="title">禁止转换</p>
    <p class="indent">在不想要把px转换为vw的时候，首先在对应的元素（html）中添加配置中指定的类名.ignore或.hairlines(.hairlines一般用于设置border-width:0.5px的元素中)：</p>
    <pre v-highlightjs="code5"><code class="html"></code></pre>
    <p><code>CSS</code></p>
    <pre v-highlightjs="code6"><code class="css"></code></pre>
    <p>编译后的<code>CSS</code></p>
    <pre v-highlightjs="code7"><code class="css"></code></pre>
    <p class="title">文字禁止转换</p>
    <p class="indent">如果文字不需要转换为vw，那么你需要像这样使用：</p>
    <pre v-highlightjs="code8"><code class="sass"></code></pre>
    <p class="title">第三方组件的适配</p>
    <p class="indent">开发者可以配置<code>exclude: [/(\/|\\)(node_modules)(\/|\\)/]</code>来排除第三方组件从px转换为vw。</p>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'Adapt',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      code: 
`.test {
  border: .5px solid black;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 20px;
  position: relative;
}`,
    code2:
`.test {
  border: .5px solid #000;
  border-bottom-width: .533vw;
  font-size: 1.867vw;
  line-height: 2.667vw;
  position: relative;
}`,
    code3:
`
'postcss-px-to-viewport': {
  viewportWidth: 750, // (Number) The width of the viewport.
  viewportHeight: 1334, // (Number) The height of the viewport.
  unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
  viewportUnit: 'vw', // (String) Expected units.
  selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
  minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
  mediaQuery: false // (Boolean) Allow px to be converted in media queries.
}`,
    code4:
`{
  unitToConvert: 'px',
  viewportWidth: 320,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: [],
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
}`,
    code5: '<div class="box ignore"></div>',
    code6:
`.ignore {
  margin: 10px;
  background-color: red;
}
.box {
  width: 180px;
  height: 300px;
}
.hairlines {
  border-bottom: 0.5px solid red;
}`,
    code7:
`.box {
  width: 24vw;
  height: 40vw;
}
.ignore {
  margin: 10px; /*.box元素中带有.ignore类名，在这个类名写的px不会被转换*/
  background-color: red;
}
.hairlines {
  border-bottom: 0.5px solid red;
}`,
    code8:
`.ignore {
  @include font-size(28px);
}
`
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