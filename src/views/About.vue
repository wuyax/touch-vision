<template>
  <div class="about">
    <h2>参考文章</h2>
    <ul class="article-list">
      <li class="article-item"
        v-for="(article, index) in articles"
        :key="index">
        <a :href="article.url"
          target="_blank"
          rel="noopener noreferrer">{{article.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'About',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      articles: [
        {
          title: '如何在Vue项目中使用vw实现移动端适配',
          url: 'https://www.w3cplus.com/mobile/vw-layout-in-vue.html'
        },
        {
          title: '使用Flexible实现手淘H5页面的终端适配',
          url: 'https://github.com/amfe/article/issues/17'
        },
        {
          title: '使用Flexible实现手淘H5页面的终端适配',
          url: 'https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html'
        },
        {
          title: '再聊移动端页面的适配',
          url: 'https://www.w3cplus.com/css/vw-for-layout.html'
        },
        {
          title: '再谈Retina下1px的解决方案',
          url: 'https://www.w3cplus.com/css/fix-1px-for-retina.html'
        },{
          title: '手机上限制字符长度的正确姿势',
          url: 'https://www.tuicool.com/articles/uAVvqaI'
        },
      ]
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