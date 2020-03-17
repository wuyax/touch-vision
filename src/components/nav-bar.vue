<template>
  <nav class="nav-wrap">
    <router-link :to='{ name: "Home"}'>首页</router-link>
    <router-link :to='{ name: "adapt"}'>适配</router-link>
    <router-link :to='{ name: "onepx"}'>一像素问题</router-link>
    <router-link :to='{ name: "proxy"}'>代理</router-link>
    <router-link :to='{ name: "template"}'>内置模版</router-link>
    <router-link :to='{ name: "usefulcomp"}'>内置组件</router-link>
    <router-link :to='{ name: "aspectratio"}'>容器</router-link>
    <router-link :to='{ name: "thridpart"}'>第三方组件</router-link>
    <router-link :to='{ name: "chart"}'>Echarts</router-link>
    <router-link :to='{ name: "About"}'>关于</router-link>
  </nav>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'NavBar',
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
@import '../assets/css/_mixin.scss';
.nav-wrap {
  overflow: auto;

  width: 100%;
  padding-bottom: 20px;

  @include flex();
  a {
    margin-right: 28px;

    color: #2c3e50;

    font-weight: bold;
    white-space: nowrap;
    &:nth-last-child(1) {
      margin-right: 0;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>