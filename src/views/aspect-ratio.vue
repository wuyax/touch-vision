<template>
  <div class="aspect-ratio">
    <p class="indent">
      这里说的<code>aspect-tatio</code>不是媒体选择器里的<code>min-aspect-ratio</code><code>max-aspect-ratio</code><code>aspect-ratio</code>，而是一个占位的布局方式。他能有效的帮我们解决图片占位的问题。
    </p>
    <p class="title">使用</p>
    <p class="indent">要是用该功能，你必须设置基本的DOM结构，如下：</p>
    <pre v-highlightjs="code1"><code class="html"></code></pre>
    <p class="indent">然后，在样式文件里实现如下的代码：</p>
    <pre v-highlightjs="code2"><code class="css"></code></pre>
    <p class="indent">这样以后你就可以得到一个183:150的容器，用于设置图片容器非常实用。</p>
    <p class="indent">⚠️注意：和标准里的<code>aspect-ratio</code>的区别。以下是标准里的媒体选择器的使用例子：</p>
    <pre v-highlightjs="code3"><code class="css"></code></pre>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'AspectRatio',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      code1: `<div aspectratio class='test'>
    <div aspectratio-content></div>
</div>`,
      code2: `.test {
  // 占位的比例
  aspect-ratio: '183:150';
}
.test {
  width: 400px;
  margin: 100px auto 100px;
}`,
      code3: `@media screen and (min-aspect-ratio: 9/16) {
    // 只要宽高比大于等于9/16，就会执行
}
@media screen and (min-aspect-ratio: 3/4) {
    // 只要宽高比大于等于3/4，就会执行
}
@media screen and (min-aspect-ratio: 1/1) {
    // 只要宽高比大于等于1/1，就会执行
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