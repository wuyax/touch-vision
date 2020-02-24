<template>
  <div class="home">
    <div aspectratio
      class="aspect-box">
      <img aspectratio-content
        alt="logo"
        src="../assets/img/logo.svg" />
    </div>
    <p class="indent"> <q>有关于移动端的适配布局一直以来都是众说纷纭，对应的解决方案也是有很多种。在《使用Flexible实现手淘H5页面的终端适配》提出了Flexible的布局方案，随着viewport单位越来越受到众多浏览器的支持，因此在《再聊移动端页面的适配》一文中提出了vw来做移动端的适配问题。到目前为止不管是哪一种方案，都还存在一定的缺陷。言外之意，还没有哪一个方案是完美的。
事实上真的不完美？其实不然。最近为了新项目中能更完美的使用vw来做移动端的适配。探讨出一种能解决不兼容viewport单位的方案。今天整理一下，与大家一起分享。如果方案中存在一定的缺陷，欢迎大家一起拍正。</q></p>
    <p class="indent">以上一段话摘录于启发本项目的文章<a href="https://www.w3cplus.com/mobile/vw-layout-in-vue.html" target="_blank" rel="noopener noreferrer">《如何在Vue项目中使用vw实现移动端适配》</a>。</p>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'Home',
  components: {},
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
  methods: {}
}
</script>
<style lang="scss" scoped>
.aspect-box {
  aspect-ratio: '183:150';
}
.aspect-box {
  width: 400px;
  margin: 100px auto 100px;
}
</style>