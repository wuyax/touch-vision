<template>
  <div class="one-px-wrap">
    <p class="title">一像素问题</p>
    <p class="indent">关于一些基本的概念，如:<q>视窗 viewport</q>、<q>物理像素(physical pixel)</q>、<q>设备独立像素(density-independent
        pixel)</q>、<q>CSS像素</q>、<q>屏幕密度</q>、<q>设备像素比(device pixel ratio)</q>，我就不赘述了，感兴趣的可以访问<a
        href="https://github.com/amfe/article/issues/17">这个页面</a>了解跟详细的信息。</p>
    <p class="indent">正是因为有以上这些概念，因此，设计稿上的<code>1px</code>是无法直接实现的。如果想知道为什么，你就得去了解上面的哪些概念。不能直接实现，不代表没有办法实现。</p>
    <p class="title">一、postcss-write-svg</p>
    <p class="indent">postcss-write-svg插件主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理。比如：</p>
    <pre v-highlightjs="code"><code class="css"></code></pre>
    <p>编译后的结果：</p>
    <pre v-highlightjs="code2"><code class="css"></code></pre>
    <p class="title">插件的配置</p>
    <p class="indent">插件的配置文件在<code>.postcssrc.js</code>它的基本配置如下：</p>
    <pre v-highlightjs="code3"><code class="js"></code></pre>
    <p class="indent">开发这可以更具自己需求修改对应的参数。</p>
    <p class="indent">开发者也可以对照下面的系统默认配置来调整。Option config allows you to define whether UTF-8 or base64 encoding will be
      used.完整的说明可以访问<a href="https://github.com/jonathantneal/postcss-write-svg">官方文档</a></p>
    <pre v-highlightjs="code4"><code class="javascript"></code></pre>
    <p class="title">示例</p>
    <div class="example example-border">border-image</div>
    <div class="example example-bg">background-image</div>
    <div class="example example-normal">normal</div>
    <p class="title">二、transform: scale(0.5) 方案 </p>
    <p class="indent">1.) 设置height: 1px，根据媒体查询结合transform缩放为相应尺寸。</p>
    <pre v-highlightjs="code5"><code class="css"></code></pre>
    <div class="trans transform-1px-1"></div>
    <p class="indent">2.) 用::after和::befor,设置border-bottom：1px solid #000,然后在缩放-webkit-transform:
      scaleY(0.5);可以实现两根边线的需求
    </p>
    <pre v-highlightjs="code6"><code class="css"></code></pre>
    <div class="trans transform-1px-2"></div>
    <p class="indent">3.)用::after设置border：1px solid #000; width:200%; height:200%,然后再缩放scaleY(0.5);
      优点可以实现圆角，缺点是按钮添加active比较麻烦。</p>
    <pre v-highlightjs="code7"><code class="css"></code></pre>
    <div class="trans transform-1px-3"></div>
    <p class="indent">4.)媒体查询 + transfrom 对方案1的优化</p>
    <pre v-highlightjs="code8"><code class="css"></code></pre>
    <p class="indent">每种方案都有自身的缺陷和优点，开发者根据自身的需求选用。</p>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'OnePx',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      code: `@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}
.example {
  border: 1px solid transparent;
  // 并不是所有的设备都支持
  border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
}`,
      code2: `.example {
  border: 1px solid transparent;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch;
}`,
      code3: `'postcss-write-svg': {
  utf8: false
}`,
      code4: `{
  utf8: true
}`,
      code5: `div {
  height:1px;
  background:#000;
  transform: scaleY(0.5);
  transform-origin:0 0;
  overflow: hidden;
}`,
      code6: `
div:after{
  display: inherit;
  content:'';
  width:100%;
  border-bottom:1px solid #000;
  transform: scaleY(0.5);
}`,
      code7: `.div::after {
  content: '';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  transform: scale(0.5,0.5);
  transform-origin: top left;
}`,code8:
`/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
    transform: scaleY(0.5);
    }
}
/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
     transform: scaleY(0.33);
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
$bor-col: #00b1ff;
@svg bi1px {
  width: 2px;
  height: 2px;
  @rect {
    width: 100%;
    height: 50%;

    fill: var(--color, black);
  }
}
@svg bg1px {
  @rect {
    width: 100%;
    height: 100%;

    fill: var(--color, black);
  }
}
.example {
  overflow: hidden;

  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 10px;
}
.example-border {
  border: 1px solid transparent;
  border-image: svg(bi1px param(--color #00b1ff)) 2 0 stretch;
}
.example-bg {
  background: svg(bg1px param(--color #00b1ff)) no-repeat;
  background-size: 100% 0.5px;
}
.example-normal {
  border: 1px solid $bor-col;
}
// transform 方案
.trans {
  margin-top: 40px;
  height: 60px;
}

.transform-1px-1 {
  overflow: hidden;

  height: 1px;

  background: $bor-col;

  transform: scaleY(0.5);
  transform-origin: 0 0;
}

.transform-1px-2 {
  &:after {
    display: inherit;

    width: 100%;
    border-bottom: 1px solid $bor-col;

    transform: scaleY(0.5);

    content: '';
  }
}
.transform-1px-3 {
  position: relative;
  &:after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid $bor-col;
    border-radius: 10px;
    transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    transform-origin: top left;
  }
}
</style>