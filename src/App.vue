<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/nav-bar.vue'
export default {
  name: 'App',
  components: {
    NavBar
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
  methods: {}
}
</script>
<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 40px;
  box-sizing: border-box;
}
</style>
