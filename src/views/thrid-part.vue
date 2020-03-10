<template>
  <div class="thrid-part">
    <p class="title">第三方UI框架之Vant</p>
    <p class="indent">有赞前端团队维护的移动端Vue&小程序组件库。文档地址<a href="https://youzan.github.io/vant/#/zh-CN/home" target="blank">https://youzan.github.io/vant/</a></p>
    <p class="indent">该组件已经完成了vw适配，因此开发者不需要关心具体的适配问题。</p>
    <p>关于样式覆盖的问题：</p>
    <ul>
      <li>1. Vant的<code>viewport</code>是基于<code>375px</code>设计的，因此我们在postcss的配置中做了特殊的配置。</li>
      <li>2. 基于第一条，因此请不要在项目中新建名字中带有<code>vant</code>的文件和文件夹。</li>
      <li>3. 所有公共的<code>Vant</code>重置样式都应该写在<code>css/vui-reset.scss</code>文件中。</li>
      <li>4. 重置的样式请按照<code>viewport = 750px</code>计算。</li>
    </ul>
    <van-button type="primary" @click="openwebsite">按需引入</van-button>
    <p class="title">第三方UI框架之tailwind</p>
    <p class="indent">Tailwind CSS 是一个高度可定制的基础层 CSS 框架，它为您提供了构建定制化设计所需的所有构建块，而无需重新覆盖任何内建于框架中的设计风格。更多使用方法和信息你可以访问 <a href="https://www.tailwindcss.cn/">https://www.tailwindcss.cn/</a></p>
    <p class="font-black text-green-600">如果项目中不实用该功能直接注释掉<code>assets/css/index.scss</code>文件中的<code>@import './tailwind.css'。</code></p>
    <p class="title text-gray-800">示例：</p>
    <div class="font-normal sm:font-bold md:font-thin lg:font-semibold xl:font-black">调整尺寸查看字体大小</div>
    <div class="box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
      <div class="h-full w-full bg-gray-400"></div>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant'
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'ThridPart',
  components: {
    VanButton: Button
  },
  model: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    openwebsite() {
      window.open('https://youzan.github.io/vant/#/zh-CN/quickstart#fang-shi-yi.-zi-dong-an-xu-yin-ru-zu-jian-tui-jian')
    }
  }
}
</script>
<style lang="scss" scoped>
.van-button--normal {
  padding:  0 60px;
}
</style>