<template>
  <div class="default-temp">
    <p class="title">Vue项目最佳实践模版</p>
    <p class="indent">为了规范团队代码，避免在团队写作中出现迷之BUG，该项目模版提供了一套，最佳实践的最小化的模版。开发者可以将该模版添加到<code>VScode</code>的代码片段中。开发者可以在<code>src/components/base/vue-template.vue</code>中看到如下代码片段。</p>
    <pre v-highlightjs="code"><code class="vue"></code></pre>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'DefaultTemp',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      code:
`<template>
  <div class="class-name">
    <!-- your code goes here -->
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'YourComponentName',
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
< /script>
<style lang="scss" scoped>
</style>
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